# control-fpga-via-raspi-and-webserver

[![CodeClimate Issues](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/badges/issue_count.svg)](https://codeclimate.com/github/JeffDeCola/control-fpga-via-raspi-and-webserver/issues)
[![MIT License](http://img.shields.io/:license-mit-blue.svg)](http://jeffdecola.mit-license.org)

_Control a FPGA via Raspberry Pi and a Webserver._

Table of Contents,

* [OVERVIEW](https://github.com/JeffDeCola//tree/masterh#overview)
* [SECTION I - THE FPGA](https://github.com/JeffDeCola//tree/masterh#section-i---the-fpga)
* [SECTION II - THE RASPI](https://github.com/JeffDeCola//tree/masterh#section-ii---the-raspi)
  * [GPIO INTERFACE](https://github.com/JeffDeCola//tree/masterh#gpio-interface)
  * [WEBSERVER INTERFACE](https://github.com/JeffDeCola//tree/masterh#webserver-interface)
* [SECTION III - THE WEBSERVER](https://github.com/JeffDeCola//tree/masterh#section-iii---the-webserver)
* [MY GITHUB WEBPAGE IS UPDATED USING CONCOURSE (OPTIONAL)](https://github.com/JeffDeCola//tree/masterh#my-github-webpage-is-updated-using-concourse-optional)

Documents and references,

* The FPGA used is my
  [programable-8-bit-microprocessor](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor)
* [raspi-gpio](https://github.com/JeffDeCola/my-go-examples/tree/master/single-board-computers/raspi-gpio)
is an example of controlling GPIO (Input/Output) on the RasPi using go

[GitHub Webpage](https://jeffdecola.github.io/control-fpga-via-raspi-and-webserver/)

## OVERVIEW

This project is sepearted into 3 sections,

1. The FPGA
2. The Raspberry Pi (go code) to control the I/O of the FPGA
3. The Webserver to Control the Raspberry Pi

This illustration help,

![IMAGE - controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg - IMAGE](docs/pics/controlling-my-programable-8-bit-microprocessor-from-a-raspi-and-webserver.jpg)

## SECTION I - THE FPGA

The Hardware I'm using is an 8-bit microprocessor I designed in Verilog (An HDL language)
and burned to an FPGA. This explanation is out of the scope of this repo but the entire code and implementation can be found in my repo
[my-systemverilog-examples](https://github.com/JeffDeCola/my-systemverilog-examples/tree/master/systems/microprocessors/programable-8-bit-microprocessor).

The I/O of the processor we shall connect to is as follows,

![IMAGE - Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg - IMAGE](https://github.com/JeffDeCola/my-systemverilog-examples/blob/master/docs/pics/Top-Level-Block-Diagram-of-the-8-bit-Microprocessor.jpg?raw=true)

## SECTION II - THE RASPI

The Raspi shall control the I/O of the FPGA and provide an Interface to
the webserver.  This code has been written is go.

### GPIO INTERFACE

The GPIO (Input/Output) of the Raspberry Pi.  It will be connected to the
Input/Ouput of the FPGA development board via Pmod connectors.

There will be a total of 31 I/O pins.
The RasPi will connect to for the 8-buit processor is as follows,

* OUTPUT (CONTROL)
  * [3:0] OPCODE
  * GO_BAR
  * RESET
  * JAM
  * [7:0] DATA_IN_A
  * [7:0] DATA_IN_B
* INPUT (CAPTURE)
  * [7:0] DATA_OUT

### WEBSERVER INTERFACE

tbd

## SECTION III - THE WEBSERVER

tbd

## MY GITHUB WEBPAGE IS UPDATED USING CONCOURSE (OPTIONAL)

For fun, I use concourse to automatically update
[my GitHub Webpage](https://jeffdecola.github.io/control-fpga-via-raspi-and-webserver/) and alert me of
the changes via repo status and slack.

The update is accomplished this by copying and editing/updating
this `README.md` file to `/docs/_includes/README.md`.

A pipeline file [pipeline.yml](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/ci/scripts/readme-github-pages.sh)
shows the entire ci flow. Visually, it looks like,

![IMAGE - control-fpga-via-raspi-and-webserver concourse ci pipeline - IMAGE](docs/pics/control-fpga-via-raspi-and-webserver-pipeline.jpg)

The `jobs` and `tasks` are,

* `job-readme-github-pages` runs task
  [readme-github-pages.sh](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/ci/scripts/readme-github-pages.sh).

The concourse `resources types` are,

* `control-fpga-via-raspi-and-webserver` uses a resource type
  [docker-image](https://hub.docker.com/r/concourse/git-resource/)
  to PULL a repo from github.
* `resource-slack-alert` uses a resource type
  [docker image](https://hub.docker.com/r/cfcommunity/slack-notification-resource)
  that will notify slack on your progress.
* `resource-repo-status` uses a resource type
  [docker image](https://hub.docker.com/r/dpb587/github-status-resource)
  that will update your git status for that particular commit.

For more information on using concourse for continuous integration,
refer to my cheat sheet on [concourse](https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver/tree/master/software/operations-tools/continuous-integration-continuous-deployment/concourse-cheat-sheet).
