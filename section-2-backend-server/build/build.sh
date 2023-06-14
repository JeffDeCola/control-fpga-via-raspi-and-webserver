#!/bin/sh -e
# control-fpga-via-raspi-and-webserver build.sh

echo " "

if [ "$1" = "-debug" ]
then
    echo "************************************************************************"
    echo "* build.sh -debug (START) **********************************************"
    echo "************************************************************************"
    # set -x enables a mode of the shell where all executed commands
    # are printed to the terminal.
    set -x
    echo " "
else
    echo "************************************************************************"
    echo "* build.sh (START) *****************************************************"
    echo "************************************************************************"
    echo " "
fi

echo "cd to where go code is"
echo "cd .."
cd ..
echo " " 

echo "Build your docker image using Dockerfile"
echo "NOTE: The binary is built using this step"
echo "DOCKER_BUILDKIT=0 docker build --output type=docker --platform=linux/arm64 --no-cache -f build/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver ."
DOCKER_BUILDKIT=0 docker build --output type=docker --platform=linux/arm64 --no-cache -f build/Dockerfile -t jeffdecola/control-fpga-via-raspi-and-webserver .
echo " "

echo "Check Docker Image size"
echo "docker images jeffdecola/control-fpga-via-raspi-and-webserver:latest"
docker images jeffdecola/control-fpga-via-raspi-and-webserver:latest
echo " "

echo "Useful commands:"
echo "     docker run --name control-fpga-via-raspi-and-webserver -dit jeffdecola/control-fpga-via-raspi-and-webserver"
echo "     docker exec -i -t control-fpga-via-raspi-and-webserver /bin/bash"
echo "     docker logs control-fpga-via-raspi-and-webserver"
echo " "

echo "************************************************************************"
echo "* build.sh (END) *******************************************************"
echo "************************************************************************"
echo " "
