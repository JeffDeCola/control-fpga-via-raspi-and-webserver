package main

import (
	"fmt"

	"periph.io/x/periph/conn/gpio"
)

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
