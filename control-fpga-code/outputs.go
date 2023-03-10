package main

import (
	"fmt"

	"periph.io/x/conn/v3/gpio"
)

// DATA_OUT (GET)
func get_data_out(getDataOutLevelCh chan int, capturedDataOutLevelCh chan [8]int) {

	var captured_data_out_level [8]gpio.Level
	var captured_data_out_level_binary [8]int

	// Loop forever
	for {

		fmt.Println("get_data_out() - Waiting to capture data_out...")
		get_data_out_level := <-getDataOutLevelCh

		fmt.Printf("get_data_out() - Getting data_out Level, %v \n", get_data_out_level)

		// GET THE LEVEL
		captured_data_out_level[7] = pin_in_data_out[7].Read()
		captured_data_out_level[6] = pin_in_data_out[6].Read()
		captured_data_out_level[5] = pin_in_data_out[5].Read()
		captured_data_out_level[4] = pin_in_data_out[4].Read()
		captured_data_out_level[3] = pin_in_data_out[3].Read()
		captured_data_out_level[2] = pin_in_data_out[2].Read()
		captured_data_out_level[1] = pin_in_data_out[1].Read()
		captured_data_out_level[0] = pin_in_data_out[0].Read()

		fmt.Printf("get_data_out() - Captured data_out level is %v \n", captured_data_out_level)

		// Change High/Low to 1/0 respectively
		for i := 0; i < 8; i++ {
			if captured_data_out_level[i] == gpio.Low {
				captured_data_out_level_binary[i] = 0
			} else {
				captured_data_out_level_binary[i] = 1

			}
		}

		capturedDataOutLevelCh <- captured_data_out_level_binary

	}

}
