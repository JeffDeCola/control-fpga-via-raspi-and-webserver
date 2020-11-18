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
var go_button_out gpio.PinIO

func go_button(userInputCh chan int) {

	//var go_button_level int

	// Loop forever
	for {

		go_button_level := <-userInputCh
		if go_button_level == 1 {

			fmt.Println("You pressed 1")

			err := go_button_out.Out(gpio.High)
			if err != nil {
				log.Fatal(err)
			}

		} else if go_button_level == 0 {

			fmt.Println("You pressed 0")

			err := go_button_out.Out(gpio.Low)
			if err != nil {
				log.Fatal(err)
			}

		}

	}

}

func init() {

	// Load all the drivers: Initialize the periph host
	_, err := host.Init()
	if err != nil {
		log.Fatal(err)
	}

	go_button_out = gpioreg.ByName("GPIO14")
	if go_button_out == nil {
		log.Fatal("Failed to find GPI14")
	}

	// Setup P21 as OUTPUT
	// With init output level 1 (true)
	err = go_button_out.Out(true)
	if err != nil {
		log.Fatal(err)
	}

}

func main() {

	var userInputCh = make(chan int)
	var userInput int
	go go_button(userInputCh)

	fmt.Println("Enter go button level: 1 or 0")

	for {
		fmt.Scanln(&userInput)
		userInputCh <- userInput
		if userInput == 3 {
			break
		}
	}

	// Press return to exit
	//fmt.Scanln()
	//fmt.Println("done")

	// Press return to exit
	//fmt.Scanln()
	//fmt.Println("done")
}
