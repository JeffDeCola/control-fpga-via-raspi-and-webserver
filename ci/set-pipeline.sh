#!/bin/bash
# control-fpga-via-raspi-and-webserver set-pipeline.sh

fly -t ci set-pipeline -p control-fpga-via-raspi-and-webserver -c pipeline.yml --load-vars-from ../../../../../.credentials.yml
