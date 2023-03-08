// control-fpga-via-raspi-and-webserver raspi-gpio.go
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
	"periph.io/x/periph/conn/gpio/gpioreg"
	"periph.io/x/periph/host"
)

// OUTPUT PINS
var pin_out_go gpio.PinIO
var pin_out_led gpio.PinIO

// INPUT PINS
var pin_in_data_out gpio.PinIO

// GO (SET)
func set_go(setGoLevelCh chan int) {

	// Loop forever
	for {

		fmt.Println("set_go() - Waiting to set Go Level...")
		set_go_level := <-setGoLevelCh

		if set_go_level == 1 {

			fmt.Println("set_go() - Setting GO and LED to 1")

			err := pin_out_go.Out(gpio.High)
			if err != nil {
				log.Fatal(err)
			}
			err = pin_out_led.Out(gpio.High)
			if err != nil {
				log.Fatal(err)
			}

		} else if set_go_level == 0 {

			fmt.Println("set_go() - Setting GO and LED to 0")

			err := pin_out_go.Out(gpio.Low)
			if err != nil {
				log.Fatal(err)
			}
			err = pin_out_led.Out(gpio.Low)
			if err != nil {
				log.Fatal(err)
			}

		}

	}

}

// DATA_OUT (GET)
func get_data_out(getDataOutLevelCh chan int, capturedDataOutLevelCh chan gpio.Level) {

	// Loop forever
	for {

		fmt.Println("get_data_out() - Waiting to capture data_out...")
		get_data_out_level := <-getDataOutLevelCh

		fmt.Printf("get_data_out() - Getting data_out Level, %v \n", get_data_out_level)

		// GET THE LEVEL
		captured_data_out_level := pin_in_data_out.Read()

		fmt.Printf("get_data_out() - Captured data_out level is %v \n", captured_data_out_level)
		capturedDataOutLevelCh <- captured_data_out_level

	}

}

func init() {

	// INIT PERIPH HOST
	_, err := host.Init()
	if err != nil {
		log.Fatal(err)
	}

	// OUTPUTS (SET) -------------------------------------------------------

	// GO
	// With init output level 1 (true)
	pin_out_go = gpioreg.ByName("GPIO26")
	if pin_out_go == nil {
		log.Fatal("Failed to find GPI26")
	}
	err = pin_out_go.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// LED
	// With init output level 1 (true)
	pin_out_led = gpioreg.ByName("GPIO21")
	if pin_out_led == nil {
		log.Fatal("Failed to find GPI21")
	}
	err = pin_out_led.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// INPUTS (GET) -------------------------------------------------------

	// DATA_OUT
	// The RasPi has an internal pull down resistor
	// PULL DOWN - DEFAULTS TO LOW WHEN UNCONNECTED
	// RISING EDGE - LOW TO HIGH
	pin_in_data_out = gpioreg.ByName("GPIO20")
	if pin_in_data_out == nil {
		log.Fatal("Failed to find GPIO20")
	}
	err = pin_in_data_out.In(gpio.PullDown, gpio.RisingEdge)
	if err != nil {
		log.Fatal(err)
	}

}

func main() {

	// OUTPUTS (SET)
	//    pin_out_name
	//    set_name(setNameLevelCh)
	// INPUTS (GET)
	//    pin_in_name
	//    get_name(getNameLevelCh, capturedNameLevelCh)

	var setGoLevelCh = make(chan int)
	var userInput int
	var getDataOutLevelCh = make(chan int)
	var capturedDataOutLevelCh = make(chan gpio.Level)

	// OUTPUTS -------------------------------------

	// Set go
	go set_go(setGoLevelCh)

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
			fmt.Println("You pressed 3 -  get [7:0] DATA_OUT levels")
			getDataOutLevelCh <- 1
			capture_data_out_level := <-capturedDataOutLevelCh
			fmt.Printf("[7:0] DATA_OUT levels are %v\n", capture_data_out_level)
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
