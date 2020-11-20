#!/bin/sh -e
# control-fpga-via-raspi-and-webserver.go run.sh

echo "**********************************************************************"
echo "* run.sh (START) ************************************************"
echo "**********************************************************************"
echo " "

echo "go run control-fpga-via-raspi-and-webserver.go init.go inputs.go outputs.go"
go run control-fpga-via-raspi-and-webserver.go init.go inputs.go outputs.go 
echo " "

echo "**********************************************************************"
echo "* run.sh (END) **************************************************"
echo "**********************************************************************"
echo " "
