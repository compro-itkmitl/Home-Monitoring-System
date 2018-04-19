#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <curl/curl.h>
#include <time.h>

#include <wiringPi.h>

#include "GPIO/common_dht_read.h"
#include "GPIO/pi_dht_read.h"

void read_temp(void);
int read_pir(void);

int main(int argc, char **argv)
{
	int process = fork();

	// Temp read
	if (process == 0)
	{
		read_temp();
	}
	// PIR
	else
	{
		read_pir();
	}

	return 0;
}

void read_temp(void)
{
	int pin = 23, errors = 0;
	float humidity = 0, temperature = 0;

	while (1)
	{
		float temp_temperature = 0, temp_humidity = 0;

		// read the sensor
		int result = pi_dht_read(DHT22, pin, &temp_humidity, &temp_temperature);

		if (result == DHT_SUCCESS)
		{
			// caching ftw
			humidity = temp_humidity;
			temperature = temp_temperature;

			// we have data now, houstan!
			errors = 0;
		}
		else
		{
			// read error!
			if (errors > 10)
			{
				// let the user know thier situation
				printf("Process 1 : Read failed!\n");
			}
			errors += 1;
		}

		if (errors < 9)
		{
			int current_time = (int)time(NULL);
			int second = current_time % 60;
			int minute = current_time / 60 % 60;

			if (second == 0)
			{
				printf("Process 1 : Temp %f Humid %f @%d %d\n", temperature, humidity, minute, second);

				CURL *curl;
				CURLcode res;

				struct curl_httppost *formpost = NULL;
				struct curl_httppost *lastptr = NULL;
				struct curl_slist *headerlist = NULL;
				static const char buf[] = "Expect:";

				char time_str[20];
				char temp_str[20];
				char humidity_str[20];
				snprintf(time_str, 20, "%d", (int)time(NULL));
				snprintf(temp_str, 20, "%f", temperature);
				snprintf(humidity_str, 20, "%f", humidity);

				curl_global_init(CURL_GLOBAL_ALL);

				curl_formadd(&formpost,
							 &lastptr,
							 CURLFORM_COPYNAME, "time",
							 CURLFORM_COPYCONTENTS, time_str,
							 CURLFORM_END);

				curl_formadd(&formpost,
							 &lastptr,
							 CURLFORM_COPYNAME, "temp",
							 CURLFORM_COPYCONTENTS, temp_str,
							 CURLFORM_END);

				curl_formadd(&formpost,
							 &lastptr,
							 CURLFORM_COPYNAME, "humidity",
							 CURLFORM_COPYCONTENTS, humidity_str,
							 CURLFORM_END);

				curl = curl_easy_init();

				headerlist = curl_slist_append(headerlist, buf);
				if (curl)
				{
					/* what URL that receives this POST */
					curl_easy_setopt(curl, CURLOPT_URL, "https://us-central1-compro-home-monitoring.cloudfunctions.net/temp");

					curl_easy_setopt(curl, CURLOPT_HTTPPOST, formpost);

					/* Perform the request, res will get the return code */
					res = curl_easy_perform(curl);
					/* Check for errors */
					if (res != CURLE_OK)
						fprintf(stderr, "curl_easy_perform() failed: %s\n",
								curl_easy_strerror(res));

					/* always cleanup */
					curl_easy_cleanup(curl);

					/* then cleanup the formpost chain */
					curl_formfree(formpost);

					/* free slist */
					curl_slist_free_all(headerlist);
				}
				printf("Process 1 : Command successfully run\n");
			}
		}
		usleep(5e2 * 1e3);
	}
}

int read_pir(void)
{

	if (wiringPiSetup() == -1)
		return 1;

	int pin = 25;

	pinMode(pin, OUTPUT);
	digitalWrite(pin, LOW);
	delay(2000);

	pinMode(pin, INPUT);
	delay(2000);

	printf("Process 2 : Process initialized!\n");

	while (1)
	{
		if (digitalRead(25))
		{
			printf("Process 2 : Detected!\n");

			char *fp = popen("raspistill -w 640 -h 480 -e jpg -o -", "r");

			if (fp == NULL)
			{
				printf("Process 2 : Failed to run photo capture command\n");
			}
			else
			{
				printf("Process 2 : Command has started\n");

				CURL *curl;
				CURLcode res;

				struct curl_httppost *formpost = NULL;
				struct curl_httppost *lastptr = NULL;
				struct curl_slist *headerlist = NULL;
				static const char buf[] = "Expect:";

				char time_str[20];
				snprintf(time_str, 20, "%d", (int)time(NULL));

				printf("Process 2: Pass 1\n");
				curl_global_init(CURL_GLOBAL_ALL);

				/* Fill in the file upload field */
				curl_formadd(&formpost,
							 &lastptr,
							 CURLFORM_COPYNAME, "photo",
							 CURLFORM_COPYCONTENTS, fp,
							 CURLFORM_CONTENTTYPE, "image/jpeg",
							 CURLFORM_END);

				printf("Process 2: Pass 2\n");
				curl_formadd(&formpost,
							 &lastptr,
							 CURLFORM_COPYNAME, "time",
							 CURLFORM_COPYCONTENTS, time_str,
							 CURLFORM_END);

				printf("Process 2: Pass 3\n");
				curl = curl_easy_init();
				/* initialize custom header list (stating that Expect: 100-continue is not
     wanted */
				printf("Process 2: Pass 4\n");
				headerlist = curl_slist_append(headerlist, buf);
				if (curl)
				{
					printf("Process 2: Pass 5\n");
					/* what URL that receives this POST */
					curl_easy_setopt(curl, CURLOPT_URL, "https://wiput.me");

					printf("Process 2: Pass 6\n");
					curl_easy_setopt(curl, CURLOPT_HTTPPOST, formpost);

					printf("Process 2: Pass 7\n");
					/* Perform the request, res will get the return code */
					res = curl_easy_perform(curl);
					/* Check for errors */
					if (res != CURLE_OK)
						fprintf(stderr, "curl_easy_perform() failed: %s\n",
								curl_easy_strerror(res));

					/* always cleanup */
					curl_easy_cleanup(curl);

					/* then cleanup the formpost chain */
					curl_formfree(formpost);
					/* free slist */
					curl_slist_free_all(headerlist);

					printf("Process 2 : Command successfully run\n");
				}
				else
				{
					printf("Process 2 : Failed to run curl\n");
				}
			}
			pclose(fp);
			while (digitalRead(25))
				;
			delay(2500);
		}
		delay(1);
	}
}