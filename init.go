package main

import (
	"log"

	"periph.io/x/periph/conn/gpio"
	"periph.io/x/periph/conn/gpio/gpioreg"
	"periph.io/x/periph/host"
)

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
