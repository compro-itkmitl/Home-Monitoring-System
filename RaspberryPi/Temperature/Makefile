all: build run

build:
	g++ main.cpp common_dht_read.c GPIO/pi_dht_read.c GPIO/pi_mmio.c -o main.out

run:
	sudo ./main.out
