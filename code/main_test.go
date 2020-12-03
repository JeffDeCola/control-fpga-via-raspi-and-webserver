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

import "testing"

func Test_main(t *testing.T) {
	tests := []struct {
		name string
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			main()
		})
	}
}
