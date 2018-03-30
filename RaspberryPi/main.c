#include <stdio.h>

#include <unistd.h>

#include "GPIO/common_dht_read.h"
#include "GPIO/pi_mmio.h"
#include "GPIO/pi_dht_read.h"

void read_temp(void);
void read_pir(void);

int main(int argc, char** argv) {

	int process = fork();

	// Temp read
	if (process == 0) {
		read_temp();
	}
	// PIR
	else {

	}

	return 0;
}

void read_temp(void) {
	int pin = 18, errors = 0;
	float humidity = 0, temperature = 0;

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
				printf("We really fucked up\n");
			}
			errors += 1;
		}

		if (errors < 9) {
			printf("Temp %f Humid %f\n", temperature, humidity);
		}
		usleep(5e2 * 1e3);
	}
}

void read_pir(void) {
	pi_mmio_set_input(25);
	printf("%d\n", pi_mmio_input(25));
}