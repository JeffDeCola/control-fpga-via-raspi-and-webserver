#!/bin/sh
# control-fpga-via-raspi-and-webserver destroy-pipeline.sh

echo " "
echo "Destroy pipeline on target jeffs-ci-target which is team jeffs-ci-team"
fly --target jeffs-ci-target \
    destroy-pipeline \
    --pipeline control-fpga-via-raspi-and-webserver
echo " "
