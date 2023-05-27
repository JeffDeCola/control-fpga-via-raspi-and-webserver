// control-fpga-via-raspi-and-webserver main.go

package main

import "testing"

func Test_addThis(t *testing.T) {
	type args struct {
		a int
		b int
	}
	tests := []struct {
		name     string
		args     args
		wantTemp int
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotTemp := addThis(tt.args.a, tt.args.b); gotTemp != tt.wantTemp {
				t.Errorf("addThis() = %v, want %v", gotTemp, tt.wantTemp)
			}
		})
	}
}

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
