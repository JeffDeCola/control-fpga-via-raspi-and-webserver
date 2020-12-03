# control-fpga-via-raspi-and-webserver Dockerfile used to build docker image

# Multi-stage build to create a small docker image

#################################
# STAGE 1 build executable binary
#################################

FROM golang:alpine AS builder

# Install git
# Git is required for fetching the dependencies
RUN apk update && apk add --no-cache git

# SET WORKING DIRECTORY AND PLACE YOUR CODE IN
WORKDIR $GOPATH/src/github.com/jeffdecola/control-fpga-via-raspi-and-webserver/
COPY . .

# CHECK
RUN ls -lat $GOPATH/src/github.com/jeffdecola/control-fpga-via-raspi-and-webserver/

# Fetch dependencies using go get
RUN go get -u periph.io/x/periph/cmd/...
RUN go get -d -v

# Build the binary
RUN go build -o /go/bin/control-fpga-via-raspi-and-webserver main.go init.go inputs.go outputs.go

###############################
# STAGE 2 build a smaller image
###############################

FROM alpine

# Add my name to it
LABEL maintainer="Jeff DeCola https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver"

# Put the binary from previous build into /app
RUN mkdir /app
COPY --from=builder /go/bin/control-fpga-via-raspi-and-webserver /app/control-fpga-via-raspi-and-webserver
WORKDIR /app

# Add the ailibty to /bin/bash in alpine
RUN apk add --update bash

# Run the binary
ENTRYPOINT ["/app/control-fpga-via-raspi-and-webserver"]
