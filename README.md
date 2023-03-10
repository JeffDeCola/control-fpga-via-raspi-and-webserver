# CONTROL FPGA VIA RASPI AND WEBSERVER

[![Tag Latest](https://img.shields.io/github/v/tag/jeffdecola/control-fpga-via-raspi-and-webserver)](https://github.com/JeffDeColacontrol-fpga-via-raspi-and-webserver/tags)
[![CodeClimate Issues](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/badges/issue_count.svg)](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/issues)
[![Docker Pulls](https://badgen.net/docker/pulls/jeffdecola/crypto-miner-manager?icon=docker&label=pulls)](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver/)
[![MIT License](http://img.shields.io/:license-mit-blue.svg)](http://jeffdecola.mit-license.org)
[![jeffdecola.com](https://img.shields.io/badge/website-jeffdecola.com-blue)](https://jeffdecola.com)

```text
*** THE REPO IS UNDER CONSTRUCTION - CHECK BACK SOON ***
```

_Control a FPGA via a Raspberry Pi and a Webserver. As an example, I burned my
[programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor)
to an FPGA development board and you can control it at
[jeffdecola.com/control-an-fpga](https://jeffdecola.com/control-an-fpga)._

Table of Contents

* [TRY IT](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#try-it)
* [OVERVIEW](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#overview)
* [A LITTLE MORE DETAIL](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#a-little-more-detail)
* [SECTION I - THE FPGA](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-i---the-fpga)
* [SECTION II - THE RASPBERRY PI](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-ii---the-raspberry-pi)
  * [PREREQUISITES](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#prerequisites)
  * [RUN](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#run)
  * [CREATE BINARY](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#create-binary)
  * [RASPBERRY PI TO FPGA DEV BOARD INTERFACE (GPIO to PMOD)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#raspberry-pi-to-fpga-dev-board-interface-gpio-to-pmod)
  * [RASPBERRY PI TO WEBSERVER INTERFACE (REST JSON API)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#raspberry-pi-to-webserver-interface-rest-json-api)
  * [STEP 1 - TEST](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-1---test)
  * [STEP 2 - BUILD (DOCKER IMAGE VIA DOCKERFILE)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-2---build-docker-image-via-dockerfile)
  * [STEP 3 - PUSH (TO DOCKERHUB)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-3---push-to-dockerhub)
  * [CONTINUOUS INTEGRATION & DEPLOYMENT](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#continuous-integration--deployment)
* [SECTION III - THE WEB SERVER](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-iii---the-web-server)
* [SECTION IV - THE BROWSER](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-iv---the-browser)

Documentation and Reference

* I burned my
  [programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor)
  to a FPGA
* The
  [control-fpga-via-raspi-and-webserver](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver)
  docker image at dockerhub  
* [raspi-gpio](https://github.com/JeffDeCola/my-go-examples/tree/master/single-board-computers/raspi-gpio)
  is an example of controlling the GPIO (Input/Output)
  on the Raspberry Pi using go
* This repos
  [github webpage](https://jeffdecola.github.io/control-fpga-via-raspi-and-webserver/)
  _built with
  [concourse](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)_

## TRY IT

I have a working demo at
[jeffdecola.com/control-an-fpga](https://jeffdecola.com/control-an-fpga).

## OVERVIEW

This project is separated into 4 main sections,

1. The FPGA
2. The BACKEND SERVER (Raspberry Pi) to control the I/O of the FPGA
3. The WEB SERVER (bluehost) providing to control the Raspberry Pi
4. The BROWSER to provide a GUI

This may help,

![IMAGE - overview.jpg - IMAGE](docs/pics/overview.jpg)

## A LITTLE MORE DETAIL

The following figure provides more details and will be explained
in the following four sections,

![IMAGE - controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg - IMAGE](docs/pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)

## SECTION I - THE FPGA

My
[programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor)
will be used as an example. Please refer to that repo on how to burn a
FPGA from verilog.

In that repo,

* I designed the 8-bit microprocessor in
  [Verilog](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/languages/verilog-cheat-sheet)
  (An HDL language)
* Used the
  [Xilinx Vivado](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  IDE to synthesize and burn/flash on boot the FPGA
* Used a
  [Digilent ARTY-S7](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/fpga-development-boards/digilent-arty-s7-cheat-sheet)
  FPGA development board

To operate this microprocessor, the Raspberry Pi will,

* Set both inputs [7:0] DATA_IN_A and [7:0] DATA_IN_B
* Select an [3:0] OPCODE instruction (such as ADD)
  * 0011: ADD
  * 0111: SUBTRACT
  * 1100: MULTIPLY
  * 1110: DIVIDE
* Enable the GO_BAR via GO signal
* Observe the resulting [7:0] DATA_OUT

The number of I/O the Raspberry Pi can control is 26 I/O pins.
But as shown in the following figure, the microprocessor has 31 pins.
The next section will go over which 5 pins we hardcoded or will be
controlled by the FPGA development board,

![IMAGE - Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg - IMAGE](https://github.com/JeffDeCola/my-systemverilog-examples/blob/master/docs/pics/Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg?raw=true)

## SECTION II - THE RASPBERRY PI

The Raspberry Pi shall do two things,

* Control 26 pins of the I/O of the FPGA (GPIO to PMOD)
* Provide an interface to the webserver (REST JSON API)

### PREREQUISITES

I used the following language,

* [go](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/development/languages/go-cheat-sheet)

You will need the following go packages,

```bash
go get periph.io/x/cmd/...
```

To build a docker image you will need docker on your machine,

* [docker](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/operations/orchestration/builds-deployment-containers/docker-cheat-sheet)

To push a docker image you will need,

* [DockerHub account](https://hub.docker.com/)

### RUN

The following steps are located in
[run.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/run.sh).

To run
[main.go](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/main.go)
from the command line,

```bash
cd control-fpga-code
go run main.go init.go inputs.go outputs.go
```

### CREATE BINARY

The following steps are located in
[create-binary.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/bin/create-binary.sh).

```bash
cd control-fpga-code
go build -o bin/control-fpga main.go init.go inputs.go outputs.go
cd bin
./control-fpga
```

This binary will not be used during a docker build since it creates it’s own.

### RASPBERRY PI TO FPGA DEV BOARD INTERFACE (GPIO to PMOD)

The GPIO (Input/Output) of the Raspberry Pi is connected to the
Input/Output of the FPGA development board via Pmod connectors.
On a side note, it may be a good idea to place a 200 Ohm resister in-line.

All of the GPIOs have weak internal pull-ups and downs which may be enabled
or disabled by software. I control this in my go code.

There are a total of 26 I/O pins that you may use in the Raspberry Pi.
But I have a total of 31 I would like to use.  So I had to compromise
and hardcoded 5 of the Inputs (????).

The Raspberry Pi will connect to the processor as follows,

* **OUTPUT (SET)**
  * [3:0] OPCODE
  * GO_BAR
  * RESET (N/C)
  * JAM (N/C)
  * [7:0] DATA_IN_A (Bits 4,5,6 hardcoded to low)
  * [7:0] DATA_IN_B
* **INPUT (GET)**
  * [7:0] DATA_OUT

A go program is used to control and capture the I/O.

The pin list between the Raspberry Pi and the FPGA development
board is as follows,

|                 | PMOD Pins         | RasPi GPIO Pin        |
|----------------:|:-----------------:|:---------------------:|
| [7:0] DATA_IN_A |  JA PMOD          |                       |
| [7]             |  1                | 24 (GPIO8)            |
| [6] SET TO LOW  |  2                | --- N/C               |
| [5] SET TO LOW  |  3                | --- N/C               |
| [4] SET TO LOW  |  4                | --- N/C               |
| [3]             |  7                | 35 (GPIO19)           |
| [2]             |  8                | 40 (GPIO21)           |
| [1]             |  9                | 38 (GPIO20)           |
| [0]             |  10               | 12 (GPIO18)           |
|                 |                   |                       |
| [7:0] DATA_IN_B |  JB PMOD          |                       |
| [7]             |  1                | 26 (GPIO7)            |
| [6]             |  2                | 19 (GPIO10)           |
| [5]             |  3                | 21 (GPIO9)            |
| [4]             |  4                | 23 (GPIO11)           |
| [3]             |  7                | 37 (GPIO26)           |
| [2]             |  8                | 33 (GPIO13)           |
| [1]             |  9                | 05 (GPIO3)            |
| [0]             |  10               | 03 (GPIO2)            |
|                 |                   |                       |
| [7:0] DATA_OUT  |  JC PMOD          |                       |
| [7]             |  1                | 36 (GPIO16)           |
| [6]             |  2                | 08 (GPIO14)           |
| [5]             |  3                | 10 (GPIO15)           |
| [4]             |  4                | 11 (GPIO17)           |
| [3]             |  7                | 07 (GPIO4)            |
| [2]             |  8                | 32 (GPIO12)           |
| [1]             |  9                | 29 (GPIO5)            |
| [0]             |  10               | 31 (GPIO6)            |
|                 |                   |                       |
| [3:0] OPCODE    |  JD PMOD          |                       |
| [3]             |  1                | 13 (GPIO27)           |
| [2]             |  2                | 15 (GPIO22)           |
| [1]             |  3                | 16 (GPIO23)           |
| [0]             |  4                | 18 (GPIO24)           |
| GO              |  7                | 22 (GPIO25)           |
| RESET --- N/C   |  8                | --- N/C               |
| JAM --- N/C     |  9                | --- N/C               |
| N/C             |  10               | --- N/C               |

### RASPBERRY PI TO WEBSERVER INTERFACE (REST JSON API)

tbd.

### STEP 1 - TEST

The following steps are located in
[unit-tests.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/control-fpga-code/test/unit-tests.sh).

To unit test the code,

```bash
cd control-fpga-code
go test -cover ./... | tee test/test_coverage.txt
cat test/test_coverage.txt
```

To create `_test` files,

```bash
gotests -w -all main.go
```

### STEP 2 - BUILD (DOCKER IMAGE VIA DOCKERFILE)

The following steps are located in
[build.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/build-push/build.sh).

We will be using a multi-stage build using a
[Dockerfile](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/build-push/Dockerfile).
The end result will be a very small docker image around 13MB.

```bash
cd control-fpga-code
docker build -f build-push/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver .
```

You can check and test this docker image,

```bash
docker images jeffdecola/control-fpga-via-raspi-and-webserver:latest
docker run --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver
docker exec -i -t control-fpga-via-raspi-and-webserver /bin/bash
docker logs control-fpga-via-raspi-and-webserver
```

In **stage 1**, rather than copy a binary into a docker image (because
that can cause issues), **the Dockerfile will build the binary in the
docker image.**

If you open the DockerFile you can see it will get the dependencies and
build the binary in go,

```bash
FROM golang:alpine AS builder
RUN go get -d -v
RUN go build -o /go/bin/control-fpga-via-raspi-and-webserver main.go
```

In **stage 2**, the Dockerfile will copy the binary created in
stage 1 and place into a smaller docker base image based
on `alpine`, which is around 13MB.

### STEP 3 - PUSH (TO DOCKERHUB)

The following steps are located in
[push.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/control-fpga-code/build-push/push.sh).

If you are not logged in, you need to login to dockerhub,

```bash
docker login
```

Once logged in you can push to DockerHub,

```bash
docker push jeffdecola/control-fpga-via-raspi-and-webserver
```

Check the
[control-fpga-via-raspi-and-webserver](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver)
docker image at DockerHub.

### CONTINUOUS INTEGRATION & DEPLOYMENT

Refer to
[ci-README.md](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)
on how I automated the above steps.

## SECTION III - THE WEB SERVER

tbd

## SECTION IV - THE BROWSER

tbd
