#!/bin/sh
# control-fpga-via-raspi-and-webserver set-pipeline.sh

echo " "
echo "Set pipeline on target jeffs-ci-target which is team jeffs-ci-team"
fly --target jeffs-ci-target \
    set-pipeline \
    --pipeline control-fpga-via-raspi-and-webserver \
    --config pipeline.yml \
    --load-vars-from ../../../.credentials.yml \
    --check-creds
echo " "
