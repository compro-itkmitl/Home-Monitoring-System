all: build run

build:
	gcc main.c GPIO/common_dht_read.c GPIO/pi_dht_read.c GPIO/pi_mmio.c -lwiringPi -lcurl -o main.out

run:
	./main.out
