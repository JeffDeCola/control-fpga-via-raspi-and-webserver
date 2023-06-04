// my-go-examples toggle-led-with-button-raspberry-pi-gpio-periph

package main

import (
	"testing"

	"periph.io/x/conn/v3/gpio"
)

func TestUserControl(t *testing.T) {
	type args struct {
		opcode     opcode_pins
		data_in_a  data_a_pins
		data_in_b  data_pins
		GO_BAR_PIN gpio.PinIO
		RESET_PIN  gpio.PinIO
		JAM_PIN    gpio.PinIO
		data_out   data_pins
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			UserControl(tt.args.opcode, tt.args.data_in_a, tt.args.data_in_b, tt.args.GO_BAR_PIN, tt.args.RESET_PIN, tt.args.JAM_PIN, tt.args.data_out)
		})
	}
}

func Test_data_a_pins_write_data_in_a(t *testing.T) {
	type fields struct {
		data_7 gpio.PinIO
		data_3 gpio.PinIO
		data_2 gpio.PinIO
		data_1 gpio.PinIO
		data_0 gpio.PinIO
	}
	type args struct {
		d7 int
		d3 int
		d2 int
		d1 int
		d0 int
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			d := data_a_pins{
				data_7: tt.fields.data_7,
				data_3: tt.fields.data_3,
				data_2: tt.fields.data_2,
				data_1: tt.fields.data_1,
				data_0: tt.fields.data_0,
			}
			d.write_data_in_a(tt.args.d7, tt.args.d3, tt.args.d2, tt.args.d1, tt.args.d0)
		})
	}
}

func Test_data_pins_write_data_in(t *testing.T) {
	type fields struct {
		data_7 gpio.PinIO
		data_6 gpio.PinIO
		data_5 gpio.PinIO
		data_4 gpio.PinIO
		data_3 gpio.PinIO
		data_2 gpio.PinIO
		data_1 gpio.PinIO
		data_0 gpio.PinIO
	}
	type args struct {
		d7 int
		d6 int
		d5 int
		d4 int
		d3 int
		d2 int
		d1 int
		d0 int
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			d := data_pins{
				data_7: tt.fields.data_7,
				data_6: tt.fields.data_6,
				data_5: tt.fields.data_5,
				data_4: tt.fields.data_4,
				data_3: tt.fields.data_3,
				data_2: tt.fields.data_2,
				data_1: tt.fields.data_1,
				data_0: tt.fields.data_0,
			}
			d.write_data_in(tt.args.d7, tt.args.d6, tt.args.d5, tt.args.d4, tt.args.d3, tt.args.d2, tt.args.d1, tt.args.d0)
		})
	}
}

func Test_data_pins_read_data_out(t *testing.T) {
	type fields struct {
		data_7 gpio.PinIO
		data_6 gpio.PinIO
		data_5 gpio.PinIO
		data_4 gpio.PinIO
		data_3 gpio.PinIO
		data_2 gpio.PinIO
		data_1 gpio.PinIO
		data_0 gpio.PinIO
	}
	tests := []struct {
		name   string
		fields fields
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			d := data_pins{
				data_7: tt.fields.data_7,
				data_6: tt.fields.data_6,
				data_5: tt.fields.data_5,
				data_4: tt.fields.data_4,
				data_3: tt.fields.data_3,
				data_2: tt.fields.data_2,
				data_1: tt.fields.data_1,
				data_0: tt.fields.data_0,
			}
			d.read_data_out()
		})
	}
}

func Test_opcode_pins_write_opcode(t *testing.T) {
	type fields struct {
		opcode_3 gpio.PinIO
		opcode_2 gpio.PinIO
		opcode_1 gpio.PinIO
		opcode_0 gpio.PinIO
	}
	type args struct {
		o3 int
		o2 int
		o1 int
		o0 int
	}
	tests := []struct {
		name   string
		fields fields
		args   args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			o := opcode_pins{
				opcode_3: tt.fields.opcode_3,
				opcode_2: tt.fields.opcode_2,
				opcode_1: tt.fields.opcode_1,
				opcode_0: tt.fields.opcode_0,
			}
			o.write_opcode(tt.args.o3, tt.args.o2, tt.args.o1, tt.args.o0)
		})
	}
}

func Test_execute_opcode(t *testing.T) {
	type args struct {
		go_bar_pin gpio.PinIO
		data_out   data_pins
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			execute_opcode(tt.args.go_bar_pin, tt.args.data_out)
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
