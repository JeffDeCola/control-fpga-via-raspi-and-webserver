  _built with
  [concourse](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)_

# TRY IT

I have a working demo at
[jeffdecola.com/control-an-fpga](https://jeffdecola.com/control-an-fpga).

## OVERVIEW

This project is separated into 4 main sections,

1. The FPGA
1. The BACKEND SERVER (Raspberry Pi) to control the I/O of the FPGA
1. The WEB SERVER (bluehost) providing the interface between the frontend and backend
1. The BROWSER to provide a GUI

This may help,

![IMAGE - overview.jpg - IMAGE](pics/overview.jpg)

## A LITTLE MORE DETAIL

The following figure provides more details and will be explained
in the following four sections,

![IMAGE - 8-bit processor - IMAGE](pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)

## SOFTWARE STACK

* DEVELOPMENT
  * [go](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/development/languages/go-cheat-sheet)
  * gotests
* OPERATIONS
  * [concourse](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/operations/continuous-integration-continuous-deployment/concourse-cheat-sheet)
    (optional)
  * [docker](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/operations/orchestration/builds-deployment-containers/docker-cheat-sheet)
* SERVICES
  * [dockerhub](https://hub.docker.com/)
  * [github](https://github.com/)

Where,

* **GUI**
  _golang net/http package and ReactJS_
* **Routing & REST API framework**
  _golang gorilla/mux package_
* **Backend**
  _golang_
* **Database**
  _N/A_

## SECTION I - THE FPGA

I burned my
[programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable_8_bit_microprocessor) to an FPGA.
Refer to that repo on how i did that.

* I designed the 8-bit microprocessor in
  [Verilog](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/languages/verilog-cheat-sheet)
  (An HDL language)
* Used the
  [Xilinx Vivado](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  IDE to synthesize and burn/flash the FPGA
* Used a
  [Digilent ARTY-S7](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/fpga-development-boards/digilent-arty-s7-cheat-sheet)
  FPGA development board

### VERILOG

This is the structural level of the 8-bit microprocessor I designed in verilog,

![IMAGE - Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg - IMAGE](https://github.com/JeffDeCola/my-verilog-examples/blob/master/docs/pics/systems/Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg?raw=true)

### ARTY S7-50 FPGA DEVELOPMENT BOARD

I used an arty S7-50 FPGA development board to burn a Spartan-7 50 FPGA,

![IMAGE - digilent-arty-s7-50.jpg - IMAGE](https://github.com/JeffDeCola/my-cheat-sheets/blob/master/docs/pics/digilent-arty-s7-50.jpg?raw=true)

## SECTION II - THE RASPBERRY PI

The Raspberry Pi shall do two things,

* Control 28 pins of the I/O of the FPGA (GPIO to PMOD) using GO
* Provide an interface to the webserver (REST JSON API)

### RASPBERRY PI TO FPGA DEV BOARD INTERFACE (GPIO to PMOD)

That is a total of 31 pins, but I only have 28 GPIO pins.
Hence, I will tie 3 of the DATA_IN_A pins to gnd.

* **OUTPUT (SET)**
  * [3:0] OPCODE
  * GO_BAR
  * RESET
  * JAM
  * [7:0] DATA_IN_A (Bits 4,5,6 hardwired to ground)
  * [7:0] DATA_IN_B
* **INPUT (GET)**
  * [7:0] DATA_OUT

The pin list between the Raspberry Pi and the FPGA development
board is as follows,

|                     | PMOD Pins         | RasPi GPIO Pin        |
|--------------------:|:-----------------:|:---------------------:|
| **[7:0] DATA_IN_A** |  JA PMOD          |                       |
| [7]                 |  1                | 18 (GPIO24)           |
| **(GND)** [6]       |  2                | N/C                   |
| **(GND)** [5]       |  3                | N/C                   |
| **(GND)** [4]       |  4                | N/C                   |
| [3]                 |  7                | 16 (GPIO23)           |
| [2]                 |  8                | 12 (GPIO18)           |
| [1]                 |  9                | 10 (GPIO15)*          |
| [0]                 |  10               | 08 (GPIO14)*          |
|                     |                   |                       |
| **[7:0] DATA_IN_B** |  JB PMOD          |                       |
|                     |                   |                       |
| [7]                 |  1                | 37 (GPIO26)           |
| [6]                 |  2                | 40 (GPIO21)           |
| [5]                 |  3                | 38 (GPIO20)           |
| [4]                 |  4                | 36 (GPIO16)           |
| [3]                 |  7                | 32 (GPIO12)           |
| [2]                 |  8                | 26 (GPIO7)            |
| [1]                 |  9                | 24 (GPIO8)            |
| [0]                 |  10               | 22 (GPIO25)           |
|                     |                   |                       |
| **[7:0] DATA_OUT**  |  JC PMOD          |                       |
|                     |                   |                       |
| [7]                 |  1                | 15 (GPIO22)           |
| [6]                 |  2                | 19 (GPIO10)           |
| [5]                 |  3                | 21 (GPIO9)            |
| [4]                 |  4                | 23 (GPIO11)           |
| [3]                 |  7                | 29 (GPIO5)            |
| [2]                 |  8                | 31 (GPIO6)            |
| [1]                 |  9                | 33 (GPIO13)           |
| [0]                 |  10               | 35 (GPIO19)           |
|                     |                   |                       |
| **[3:0] OPCODE**    |  JD PMOD          |                       |
|                     |                   |                       |
| [3]                 |  1                | 03 (GPIO2)**          |
| [2]                 |  2                | 05 (GPIO3)**          |
| [1]                 |  3                | 07 (GPIO4)            |
| [0]                 |  4                | 11 (GPIO17)           |
| GO                  |  7                | 13 (GPIO27)           |
| RESET               |  8                | 27 (GPIO0)            |
| JAM                 |  9                | 28 (GPIO1)            |
| N/C                 |  10               | N/C                   |

**NOTE1**: To use pin 8 (GPIO14) and pin 10 (GPIO15)
you must disable the serial port using `raspi-config`.
Select `Interfacing Options` and then
`Serial` and select `No`.

**NOTE2** Pin 3 (GPIO2) and pin 5 (GPIO3) have
fixed pull-up resistors to 3.3V.

![IMAGE - arty-s7-50-pmod-to-raspi-gpio-breadboard-connections.jpg - IMAGE](pics/arty-s7-50-pmod-to-raspi-gpio-breadboard-connections.jpg)

The result,

![IMAGE - breadboard.jpg - IMAGE](pics/breadboard.jpg)

### CONTROL I/O VIA GOLANG

To
[run.sh](https://github.com/JeffDeCola/section-2-backend-server/blob/master/section-2-backend-server/run.sh),

```bash
cd section-2-backend-server
go run main.go
```

As a placeholder, every 2 seconds it will print,

```txt
???????
```

### CREATE BINARY

To
[create-binary.sh](https://github.com/JeffDeCola/section-2-backend-server/blob/master/section-2-backend-server/bin/create-binary.sh),

```bash
cd section-2-backend-server/bin
go build -o section-2-backend-server ../main.go
./section-2-backend-server
```

This binary will not be used during a docker build
since it creates it's own.

### RASPBERRY PI TO WEBSERVER INTERFACE (REST JSON API)

tbd.

### STEP 1 - TEST

To create unit `_test` files,

```bash
cd control-fpga-via-raspi-and-webserver-code
gotests -w -all main.go
```

To run
[unit-tests.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/control-fpga-via-raspi-and-webserver-code/test/unit-tests.sh),

```bash
go test -cover ./... | tee test/test_coverage.txt
cat test/test_coverage.txt
```

### STEP 2 - BUILD (DOCKER IMAGE VIA DOCKERFILE)

To
[build.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-via-raspi-and-webserver-code/build/build.sh)
with a
[Dockerfile](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-via-raspi-and-webserver-code/build/Dockerfile),

```bash
cd control-fpga-via-raspi-and-webserver-code
docker build -f build/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver .
```

You can check and test this docker image,

```bash
docker images jeffdecola/control-fpga-via-raspi-and-webserver:latest
docker run --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver
docker exec -i -t control-fpga-via-raspi-and-webserver /bin/bash
docker logs control-fpga-via-raspi-and-webserver
docker rm -f control-fpga-via-raspi-and-webserver
```

In **stage 1**, rather than copy a binary into a docker image (because
that can cause issues), the Dockerfile will build the binary in the
docker image,

```bash
FROM golang:alpine AS builder
RUN go get -d -v
RUN go build -o /go/bin/control-fpga-via-raspi-and-webserver main.go
```

In **stage 2**, the Dockerfile will copy the binary created in
stage 1 and place into a smaller docker base image based
on `alpine`, which is around 13MB.

### STEP 3 - PUSH (TO DOCKERHUB)

You must be logged in to DockerHub,

```bash
docker login
```

To
[push.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-via-raspi-and-webserver-code/push/push.sh),

```bash
docker push jeffdecola/control-fpga-via-raspi-and-webserver
```

Check the
[control-fpga-via-raspi-and-webserver docker image](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver)
at DockerHub.

### STEP 4 - DEPLOY (TO DOCKER)

To
[deploy.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-via-raspi-and-webserver-code/deploy/deploy.sh),

```bash
cd control-fpga-via-raspi-and-webserver-code
docker run --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver
docker exec -i -t control-fpga-via-raspi-and-webserver /bin/bash
docker logs control-fpga-via-raspi-and-webserver
docker rm -f control-fpga-via-raspi-and-webserver
```

### CONTINUOUS INTEGRATION & DEPLOYMENT

Refer to
[ci-README.md](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)
on how I automated the above steps.

## SECTION III - THE WEB SERVER

tbd

## SECTION IV - THE BROWSER

tbd
