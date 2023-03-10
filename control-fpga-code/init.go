package main

import (
	"log"

	"periph.io/x/conn/v3/gpio"
	"periph.io/x/conn/v3/gpio/gpioreg"
	"periph.io/x/host/v3"
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
	pin_out_go = gpioreg.ByName("GPIO25")
	if pin_out_go == nil {
		log.Fatal("Failed to find GPI25")
	}
	err = pin_out_go.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// LED
	// With init output level 1 (true)
	pin_out_led = gpioreg.ByName("GPIO26")
	if pin_out_led == nil {
		log.Fatal("Failed to find GPI26")
	}
	err = pin_out_led.Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// [3:0] OPCODE
	// With init output level 1 (true)
	pin_out_opcode[3] = gpioreg.ByName("GPIO27")
	if pin_out_opcode[3] == nil {
		log.Fatal("Failed to find GPI27")
	}
	err = pin_out_opcode[3].Out(true)
	if err != nil {
		log.Fatal(err)
	}
	pin_out_opcode[2] = gpioreg.ByName("GPIO22")
	if pin_out_opcode[2] == nil {
		log.Fatal("Failed to find GPI22")
	}
	err = pin_out_opcode[2].Out(true)
	if err != nil {
		log.Fatal(err)
	}
	pin_out_opcode[1] = gpioreg.ByName("GPIO23")
	if pin_out_opcode[1] == nil {
		log.Fatal("Failed to find GPI23")
	}
	err = pin_out_opcode[1].Out(true)
	if err != nil {
		log.Fatal(err)
	}
	pin_out_opcode[0] = gpioreg.ByName("GPIO24")
	if pin_out_opcode[0] == nil {
		log.Fatal("Failed to find GPI24")
	}
	err = pin_out_opcode[0].Out(true)
	if err != nil {
		log.Fatal(err)
	}

	// INPUTS (GET) -------------------------------------------------------

	// [7:0] DATA_OUT
	// The RasPi has an internal pull down resistor
	// PULL DOWN - DEFAULTS TO LOW WHEN UNCONNECTED
	// RISING EDGE - LOW TO HIGH
	pin_in_data_out[7] = gpioreg.ByName("GPIO16")
	if pin_in_data_out[7] == nil {
		log.Fatal("Failed to find GPIO16")
	}
	err = pin_in_data_out[7].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[6] = gpioreg.ByName("GPIO14")
	if pin_in_data_out[6] == nil {
		log.Fatal("Failed to find GPIO14")
	}
	err = pin_in_data_out[6].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[5] = gpioreg.ByName("GPIO15")
	if pin_in_data_out[5] == nil {
		log.Fatal("Failed to find GPIO15")
	}
	err = pin_in_data_out[5].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[4] = gpioreg.ByName("GPIO17")
	if pin_in_data_out[4] == nil {
		log.Fatal("Failed to find GPIO17")
	}
	err = pin_in_data_out[4].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[3] = gpioreg.ByName("GPIO4")
	if pin_in_data_out[3] == nil {
		log.Fatal("Failed to find GPIO4")
	}
	err = pin_in_data_out[3].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[2] = gpioreg.ByName("GPIO12")
	if pin_in_data_out[2] == nil {
		log.Fatal("Failed to find GPIO12")
	}
	err = pin_in_data_out[2].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[1] = gpioreg.ByName("GPIO5")
	if pin_in_data_out[1] == nil {
		log.Fatal("Failed to find GPIO5")
	}
	err = pin_in_data_out[1].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	pin_in_data_out[0] = gpioreg.ByName("GPIO6")
	if pin_in_data_out[0] == nil {
		log.Fatal("Failed to find GPIO6")
	}
	err = pin_in_data_out[0].In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}

}
