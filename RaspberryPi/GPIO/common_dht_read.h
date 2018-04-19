#ifndef COMMON_DHT_READ_H
#define COMMON_DHT_READ_H

#include <stdint.h>

// Define errors and return values.
#define DHT_ERROR_TIMEOUT -1
#define DHT_ERROR_CHECKSUM -2
#define DHT_ERROR_ARGUMENT -3
#define DHT_ERROR_GPIO -4
#define DHT_SUCCESS 0

// Define sensor types.
#define DHT11 11
#define DHT22 22
#define AM2302 22

// Busy wait delay for most accurate timing, but high CPU usage.
// Only use this for short periods of time (a few hundred milliseconds at most)!
void busy_wait_milliseconds(uint32_t millis);

// General delay that sleeps so CPU usage is low, but accuracy is potentially bad.
void sleep_milliseconds(uint32_t millis);

// Increase scheduling priority and algorithm to try to get 'real time' results.
void set_max_priority(void);

// Drop scheduling priority back to normal/default.
void set_default_priority(void);

#endif
