vbd11 vbu22 mac addie

# CONTROL FPGA VIA RASPI AND WEBSERVER

[![Tag Latest](https://img.shields.io/github/v/tag/jeffdecola/control-fpga-via-raspi-and-webserver)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tags)
[![CodeClimate Issues](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/badges/issue_count.svg)](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/issues)
[![Docker Pulls](https://badgen.net/docker/pulls/jeffdecola/control-fpga-via-raspi-and-webserver?icon=docker&label=pulls)](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver/)
[![MIT License](https://img.shields.io/:license-mit-blue.svg)](https://jeffdecola.mit-license.org)
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
* [SOFTWARE STACK](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#software-stack)
* [SECTION I - THE FPGA](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-i---the-fpga)
  * [VERILOG](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#verilog)
  * [INPUT/OUTPUT](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#inputoutput)
  * [ARTY S7-50 FPGA DEVELOPMENT BOARD](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#arty-s7-50-fpga-development-board)
* [SECTION II - THE RASPBERRY PI](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#section-ii---the-raspberry-pi)
  * [BREADBOARD (GPIO to PMOD)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#breadboard-gpio-to-pmod)
  * [CONTROL FPGA I/O VIA GO](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#control-fpga-io-via-go)
  * [WEB SERVER INTERFACE (gRPC Protobuf)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#web-server-interface-grpc-protobuf)
  * [RUN](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#run)
  * [CREATE BINARY](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#create-binary)
  * [STEP 1 - TEST](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-1---test)
  * [STEP 2 - BUILD (DOCKER IMAGE VIA DOCKERFILE)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-2---build-docker-image-via-dockerfile)
  * [STEP 3 - PUSH (TO DOCKERHUB)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-3---push-to-dockerhub)
  * [STEP 4 - DEPLOY (TO DOCKER ON RASPBERRY PI)](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#step-4---deploy-to-docker-on-raspberry-pi)
  * [INTERACT WITH DOCKER CONTAINER](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver#interact-with-docker-container)
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
1. The BACKEND SERVER (Raspberry Pi) to control the I/O of the FPGA
1. The WEB SERVER (bluehost) providing the interface between the frontend and backend
1. The BROWSER to provide a GUI

This may help,

![IMAGE - overview.jpg - IMAGE](docs/pics/overview.jpg)

The following figure provides more details and will be explained
in the following four sections,

![IMAGE - 8-bit processor - IMAGE](docs/pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)

## SOFTWARE STACK

* SECTION 1 - The FPGA
  * [Verilog](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/languages/verilog-cheat-sheet)
  * [Xilinx Vivado](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  * [Digilent ARTY-S7](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/fpga-development-boards/digilent-arty-s7-cheat-sheet)
* SECTION 2 - The Raspberry Pi
  * [go](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/development/languages/go-cheat-sheet)
  * [docker](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/operations/orchestration/builds-deployment-containers/docker-cheat-sheet)
  * [dockerhub](https://hub.docker.com/)
  * [concourse](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/software/operations/continuous-integration-continuous-deployment/concourse-cheat-sheet)
* SECTION 3 - The Web Server
  * php, css, js
  * [bluehost](https://www.bluehost.com/)
* SECTION 4 - The Browser
  * js, html, css

## SECTION I - THE FPGA

I burned my
[programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable_8_bit_microprocessor) to an FPGA.
Refer to that repo on how I did that.

Summary,

* I designed the 8-bit microprocessor in
  [Verilog](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/languages/verilog-cheat-sheet)
  (An HDL language)
* I used the
  [Xilinx Vivado](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  IDE to synthesize and burn/flash the FPGA
* I used the
  [Digilent ARTY-S7](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/fpga-development-boards/digilent-arty-s7-cheat-sheet)
  FPGA development board

### VERILOG

This is the high level architecture of the 8-bit microprocessor
I designed in verilog,

![IMAGE - Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg - IMAGE](https://github.com/JeffDeCola/my-verilog-examples/blob/master/docs/pics/systems/Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg?raw=true)

### INPUT/OUTPUT

* **INPUT**
  * SYSTEM_CLK
  * [3:0] OPCODE
  * GO_BAR
  * RESET
  * JAM
  * [7:0] DATA_IN_A
  * [7:0] DATA_IN_B
* **OUTPUT**
  * [7:0] DATA_OUT

### ARTY S7-50 FPGA DEVELOPMENT BOARD

I burned the microprocessor to an FPGA on an
Arty S7-50 FPGA development board.

![IMAGE - digilent-arty-s7-50.jpg - IMAGE](https://github.com/JeffDeCola/my-cheat-sheets/blob/master/docs/pics/digilent-arty-s7-50.jpg?raw=true)

## SECTION II - THE RASPBERRY PI

The Raspberry Pi has two main functions,

* Controls 28 pins of the I/O of the FPGA (GPIO to PMOD) via GO
* Provide an interface to the webserver (REST JSON API)

These function will be written in go and placed in a docker image.

### BREADBOARD (GPIO to PMOD)

To connect to the Raspberry Pi a breadboard was used to
connect the GPIO pins to the PMOD pins on the FPGA development board.

There are a total of 31 pins used by the microprocessor,
but there are only 28 GPIO pins. Hence, I tied 3 of the
DATA_IN_A pins to gnd.

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

![IMAGE - arty-s7-50-pmod-to-raspi-gpio-breadboard-connections.jpg - IMAGE](docs/pics/arty-s7-50-pmod-to-raspi-gpio-breadboard-connections.jpg)

The result,

![IMAGE - breadboard.jpg - IMAGE](docs/pics/breadboard.jpg)

![IMAGE - arty-s7-breadboard-and-raspberry-pi.jpg - IMAGE](docs/pics/arty-s7-breadboard-and-raspberry-pi.jpg)

### CONTROL FPGA I/O VIA GO

The Raspberry Pi will control the FPGA via GO using the
[periph.io](https://periph.io/)
go package.

Init Raspberry Pi,

```go
  // INIT HOST MACHINE (i.e. Raspberry Pi)
  _, err := host.Init()
  if err != nil {
    log.Fatal(err)
  }
```

For inputs,

```go
  // DATA_IN_A -----------------------------------
  DATA_IN_A7_PIN := gpioreg.ByName("24")
  if DATA_IN_A7_PIN == nil {
    log.Fatal("Failed to find DATA_IN_A7_PIN")
  }
```

For outputs also set the pulldown resistor,

```go
  // DATA_OUT -----------------------------------
  DATA_OUT_7_PIN := gpioreg.ByName("22")
  if DATA_OUT_7_PIN == nil {
    log.Fatal("Failed to find DATA_OUT_7_PIN")
  }

  // SET PULLDOWN RESISTER AND LOOK FOR BOTH EDGES (High->Low or Low->High)
  err = DATA_OUT_7_PIN.In(gpio.PullDown, gpio.BothEdges)
  if err != nil {
    log.Fatal(err)
  }
```

### WEB SERVER INTERFACE (gRPC Protobuf)

tbd.

### RUN

To
[run.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/run.sh),

```bash
cd section-2-backend-server
go run main.go
```

As a placeholder, every 2 seconds it will print,

```txt
    ????
```

### CREATE BINARY

To
[create-binary.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/bin/create-binary.sh),

```bash
cd section-2-backend-server/bin
go build -o control-fpga-via-raspi-and-webserver ../main.go
./control-fpga-via-raspi-and-webserver
```

This binary will not be used during a docker build
since it creates it's own.

### STEP 1 - TEST

To create unit `_test` files,

```bash
cd section-2-backend-server
gotests -w -all main.go
```

To run
[unit-tests.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/section-2-backend-server/test/unit-tests.sh),

```bash
go test -cover ./... | tee test/test_coverage.txt
cat test/test_coverage.txt
```

### STEP 2 - BUILD (DOCKER IMAGE VIA DOCKERFILE)

To
[build.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/build/build.sh)
with a
[Dockerfile](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/build/Dockerfile),

The Dockerfile has the architecture as arm64,

```dockerfile
FROM --platform=linux/arm64/v8 golang:alpine AS builder
```

```bash
cd section-2-backend-server
docker build -f build/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver .
docker buildx build --platform=linux/arm64 --no-cache --output type=docker -f build/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver .
```

You can check and test this docker image,

```bash
docker images jeffdecola/control-fpga-via-raspi-and-webserver:latest
docker run --privileged --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver
```

Write stdin,

```bash
echo '1' | socat EXEC:"docker attach control-fpga-via-raspi-and-webserver",pty STDIN
```

Check stdout,

```bash
docker logs control-fpga-via-raspi-and-webserver
```

Other commands,

```bash
docker exec -i -t control-fpga-via-raspi-and-webserver /bin/bash
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
[push.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/push/push.sh),

```bash
docker push jeffdecola/control-fpga-via-raspi-and-webserver
```

Check the
[control-fpga-via-raspi-and-webserver docker image](https://hub.docker.com/r/jeffdecola/control-fpga-via-raspi-and-webserver)
at DockerHub.

### STEP 4 - DEPLOY (TO DOCKER ON RASPBERRY PI)

To
[deploy.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/section-2-backend-server/deploy/deploy.sh),

```bash
cd section-2-backend-server
docker run --privileged --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver
```

### INTERACT WITH DOCKER CONTAINER

The docker container is running on your raspberry pi.
As mentioned above, the user may interact with the
stdin and stdout of the docker container by,
  
Write stdin,

```bash
echo '1' | socat EXEC:"docker attach control-fpga-via-raspi-and-webserver",pty STDIN
```

Check stdout,

```bash
docker logs control-fpga-via-raspi-and-webserver
```

### CONTINUOUS INTEGRATION & DEPLOYMENT

Refer to
[ci-README.md](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)
on how I automated the above steps.

## SECTION III - THE WEB SERVER

tbd

## SECTION IV - THE BROWSER

tbd
