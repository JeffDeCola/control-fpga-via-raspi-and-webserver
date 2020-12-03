#!/bin/sh -e
# control-fpga-via-raspi-and-webserver create-binary.sh

echo " "

if [ "$1" = "-debug" ]
then
    echo "************************************************************************"
    echo "* create-binary.sh -debug (START) **************************************"
    echo "************************************************************************"
    # set -x enables a mode of the shell where all executed commands are printed to the terminal.
    set -x
    echo " "
else
    echo "************************************************************************"
    echo "* create-binary.sh (START) *********************************************"
    echo "************************************************************************"
    echo " "
fi

echo "Create a binary control-fpga in /bin"
echo "    Kick off executable with ./control-fpga-via-raspi-and-webserver.go"
go build -o control-fpga ../control-fpga-via-raspi-and-webserver.go
echo " "

echo "************************************************************************"
echo "* create-binary.sh (END) ***********************************************"
echo "************************************************************************"
echo " "
