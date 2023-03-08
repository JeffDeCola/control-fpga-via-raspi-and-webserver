package main

import (
	"fmt"
	"log"

	"periph.io/x/periph/conn/gpio"
)

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
