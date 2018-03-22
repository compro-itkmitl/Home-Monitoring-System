#ifndef PI_2_DHT_READ_H
#define PI_2_DHT_READ_H

#include "../common_dht_read.h"

#ifdef __cplusplus
extern "C" {
#endif

int pi_dht_read(int sensor, int pin, float* humidity, float* temperature);

#ifdef __cplusplus
}
#endif

#endif
