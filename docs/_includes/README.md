_built with
[concourse ci](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/blob/master/ci-README.md)_

# OVERVIEW

This project is separated into 3 main sections,

1. The FPGA
2. The Raspberry Pi (go code) to control the I/O of the FPGA
3. The Webserver (bluehost) providing a GUI to control the Raspberry Pi

This may help,

![IMAGE - overview.jpg - IMAGE](pics/overview.jpg)

## A LITTLE MORE DETAIL

The following figure provides more details and will be explained
in the following three sections,

![IMAGE - controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg - IMAGE](pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)

## SECTION I - THE FPGA

My
[programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor)
will be used as an example. Please refer to that repo on how to burn a
FPGA from verilog.

In that repo,

* I designed the 8-bit microprocessor in
  [Verilog](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/development/languages/systemverilog-cheat-sheet)
  (An HDL language)
* Used the
  [Xilinx Vivado](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  IDE to synthesize and burn/flash on boot the FPGA
* Used a
  [Digilent ARTY-S7](https://github.com/JeffDeCola/my-cheat-sheets/tree/master/hardware/tools/synthesis/xilinx-vivado-cheat-sheet)
  FPGA development board 

To operate this microprocessor, the Raspberry Pi will,

* Set both inputs [7:0] DATA_IN_A and [7:0] DATA_IN_B
* Select an [3:0] OPCODE instruction (such as ADD)
  * 0011: ADD
  * 0111: SUBTRACT
  * 1100: MULTIPLY
  * 1110: DIVIDE
* Enable the GO_BAR via GO signal
* Oserve the resulting [7:0] DATA_OUT

The number of I/O the Raspberry Pi can control is 26 I/O pins.
But as shown in the following figure, the microprocessor has 31 pins.
The next section will go over which 5 pins we hardcoded or will be controled by the FPGA
development board,

![IMAGE - Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg - IMAGE](https://github.com/JeffDeCola/my-systemverilog-examples/blob/master/docs/pics/Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg?raw=true)

## SECTION II - THE RASPBERRY PI

The Raspberry Pi shall do two things,

* Control 26 pins of the I/O of the FPGA (GPIO to PMOD)
* Provide an interface to the webserver (REST JSON API)

The code has been written is go using the
[google/periph](https://github.com/google/periph)
go library and the

To run the go code,

```
go get -u periph.io/x/periph/cmd/...
sh run.go
```

### RASPBERRY PI TO FPGA DEV BOARD INTERFACE (GPIO to PMOD)

The GPIO (Input/Output) of the Raspberry Pi is connected to the
Input/Ouput of the FPGA development board via Pmod connectors.
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

tbd

## SECTION III - THE WEBSERVER

tbd
