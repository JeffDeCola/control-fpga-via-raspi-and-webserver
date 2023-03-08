#!/bin/sh -e
# control-fpga-via-raspi-and-webserver example-01 run.sh

echo " "

if [ "$1" = "-debug" ]
then
    echo "************************************************************************"
    echo "* run.sh -debug (START) ************************************************"
    echo "************************************************************************"
    # set -x enables a mode of the shell where all executed commands are printed to the terminal.
    set -x
    echo " "
else
    echo "************************************************************************"
    echo "* run.sh (START) *******************************************************"
    echo "************************************************************************"
    echo " "
fi

echo "go run main.go init.go inputs.go outputs.go"
go run main.go init.go inputs.go outputs.go
echo " "

echo "************************************************************************"
echo "* run.sh (END) **************************************************"
echo "************************************************************************"
echo " "
