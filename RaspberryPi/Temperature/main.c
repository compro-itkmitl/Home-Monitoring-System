#include <stdio.h>

#include <unistd.h>

#include "common_dht_read.h"
#include "GPIO/pi_dht_read.h"

int main(int argc, char** argv) {
	int pin = 18;

	float humidity = 0, temperature = 0;

	int errors = 0;

	while (1) {
		float temp_temperature = 0, temp_humidity = 0;

		// read the sensor

		int result = pi_dht_read(DHT22, pin, &temp_humidity, &temp_temperature);


		if (result == DHT_SUCCESS) {
			// caching ftw

			humidity = temp_humidity;

			temperature = temp_temperature;

			// we have data now, houstan!

			errors = 0;
		}
		else {
			// we're really fucked up now

			if (errors > 10) {
				// let the user know thier situation

				printf("We really fucked up");
			}

			errors += 1;
		}


		if (errors < 9) {
			printf("Temp %f Humid %f", temperature, humidity);
		}

		usleep(5e2 * 1e3);
	}

	return 0;
}
