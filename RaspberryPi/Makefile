all: build run

build:
	gcc main.c GPIO/common_dht_read.c GPIO/pi_dht_read.c GPIO/pi_mmio.c -lwiringPi -o main.out

run:
	sudo ./main.out
