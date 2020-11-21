// control-fpga-via-raspi-and-webserver.go
//
// Syntax:
//
// OUTPUTS (SET)
//    pin_out_name
//    set_name(setNameLevelCh)
// INPUTS (GET)
//    pin_in_name
//    get_name(getNameLevelCh, capturedNameLevelCh)

package main

import (
	"fmt"
	"log"

	"periph.io/x/periph/conn/gpio"
)

// OUTPUT PINS
var pin_out_go gpio.PinIO
var pin_out_led gpio.PinIO
var pin_out_opcode [4]gpio.PinIO

// INPUT PINS
var pin_in_data_out [8]gpio.PinIO

func main() {

	var setGoLevelCh = make(chan int)
	var userInput int
	var getDataOutLevelCh = make(chan int)
	var capturedDataOutLevelCh = make(chan [8]int)

	// OUTPUTS -------------------------------------

	// Set go
	go set_go(setGoLevelCh)

	// Set [3:0] opcode
	err := pin_out_opcode[3].Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}
	err = pin_out_opcode[2].Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}
	err = pin_out_opcode[1].Out(gpio.Low)
	if err != nil {
		log.Fatal(err)
	}
	err = pin_out_opcode[0].Out(gpio.Low)
	if err != nil {
		log.Fatal(err)
	}

	// INPUTS --------------------------------------

	// Get level for [7:0] DATA_OUT
	go get_data_out(getDataOutLevelCh, capturedDataOutLevelCh)

	// CONTROL -------------------------------------

	// USER INPUT
	fmt.Println("Enter one of the following:")
	fmt.Println("    0 - set go and led level LOW")
	fmt.Println("    1 - set go and led level HIGH")
	fmt.Println("    2 - get [7:0] DATA_OUT levels")
	fmt.Println("    3 - Exit")

	for {

		fmt.Scanln(&userInput)

		switch {
		case (userInput == 0):
			fmt.Println("You pressed 0 - set go and led level LOW")
			setGoLevelCh <- 0
		case (userInput == 1):
			fmt.Println("You pressed 1 - set go and led level HIGH")
			setGoLevelCh <- 1
		case (userInput == 2):
			fmt.Println("You pressed 2 -  get [7:0] DATA_OUT levels")
			getDataOutLevelCh <- 1
			capture_data_out_level := <-capturedDataOutLevelCh
			fmt.Printf("[7:0] DATA_OUT levels are %v  %v  %v  %v  %v  %v  %v  %v\n", capture_data_out_level[7], capture_data_out_level[6], capture_data_out_level[5],
				capture_data_out_level[4], capture_data_out_level[3], capture_data_out_level[2], capture_data_out_level[1], capture_data_out_level[0])
		case (userInput == 3):
			fmt.Println("You pressed 3 - Exit")
		default:
			fmt.Println("Try Again")
		}

		if userInput == 3 {
			break
		}

	}

}
