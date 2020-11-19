// my-go-examples raspi-gpio.go

package main

import (
	"fmt"
	"log"

	"periph.io/x/periph/conn/gpio"
	"periph.io/x/periph/conn/gpio/gpioreg"
	"periph.io/x/periph/host"
)

// The pins
var go_pin_out gpio.PinIO
var led_pin_out gpio.PinIO
var test_pin_in gpio.PinIO

// GO BUTTON
func go_button(userInputCh chan int) {

	// Loop forever
	// SET OUTPUT BUTTON DEPENDING ON userInputCh
	for {

		go_button_level := <-userInputCh

		if go_button_level == 1 {

			fmt.Println("- Setting GO button and LED to 1")

			err := go_pin_out.Out(gpio.High)
			if err != nil {
				log.Fatal(err)
			}
			err = led_pin_out.Out(gpio.High)
			if err != nil {
				log.Fatal(err)
			}

		} else if go_button_level == 0 {

			fmt.Println("- Setting GO button and LED to 0")

			err := go_pin_out.Out(gpio.Low)
			if err != nil {
				log.Fatal(err)
			}
			err = led_pin_out.Out(gpio.Low)
			if err != nil {
				log.Fatal(err)
			}

		}

	}

}

// TEST DATA
func test_data(getTestDataCh chan int, getTestDataLevelCh chan int) {

	// Loop forever
	// MONITOR TEST DEPENDING WHEN ASKED
	for {

	}

}

func init() {

	// Load all the drivers: Initialize the periph host
	_, err := host.Init()
	if err != nil {
		log.Fatal(err)
	}

	// OUTPUTS (CONTROL) -------------------------------------------------------

	// GO
	// With init output level 1 (true)
	go_pin_out = gpioreg.ByName("GPIO26")
	if go_pin_out == nil {
		log.Fatal("Failed to find GPI26")
	}
	err = go_pin_out.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// LED
	// With init output level 1 (true)
	led_pin_out = gpioreg.ByName("GPIO21")
	if led_pin_out == nil {
		log.Fatal("Failed to find GPI21")
	}
	err = led_pin_out.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// INPUTS (CAPTURE) -------------------------------------------------------

	// TEST
	// The RasPi has an internal pull down resistor
	// PULL DOWN - DEFAULTS TO LOW WHEN UNCONNECTED
	// RISING EDGE - LOW TO HIGH
	test_pin_in = gpioreg.ByName("GPIO20")
	if go_pin_out == nil {
		log.Fatal("Failed to find GPIO20")
	}
	err = test_pin_in.In(gpio.PullDown, gpio.RisingEdge)
	if err != nil {
		log.Fatal(err)
	}

}

func main() {

	var userInputCh = make(chan int)
	var userInput int
	var getTestDataCh = make(chan int)
	var getTestDataLevelCh = make(chan int)

	// OUTPUTS -------------------------------------

	// SET THE GO BUTTON
	go go_button(userInputCh)

	// INPUTS --------------------------------------

	// GET LEVEL FOR TEST BUTTON WHEN ASKED
	go test_data(getTestDataCh, getTestDataLevelCh)

	// CONTROL -------------------------------------

	// USER INPUT
	fmt.Println("Enter the following")
	fmt.Println("0 - set LED level LOW")
	fmt.Println("1 - set LED level HIGH")
	fmt.Println("2 - get LED level")
	fmt.Println("3 - get TEST level")
	fmt.Println("4 - Exit")

	for {
		fmt.Scanln(&userInput)
		userInputCh <- userInput

		switch {
		case (userInput == 0):
			fmt.Println("You pressed 0 - set LED level LOW")
			userInputCh <- 0
		case (userInput == 1):
			fmt.Println("You pressed 1 - set LED level HIGH")
			userInputCh <- 1
		case (userInput == 2):
			fmt.Println("You pressed 2 - get LED level")
		case (userInput == 3):
			fmt.Println("You pressed 3 - get TEST level")
			getTestDataCh <- 1
		case (userInput == 4):
			fmt.Println("You pressed 4 - Exit")
			break
		default:
			fmt.Println("Try Again")
		}
	}

}
