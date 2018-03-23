all: build run

build:
	gcc main.c common_dht_read.c GPIO/pi_dht_read.c GPIO/pi_mmio.c -o main.out

run:
	sudo ./main.out
