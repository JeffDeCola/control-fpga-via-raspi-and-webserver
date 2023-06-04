// my-go-examples toggle-led-with-button-raspberry-pi-gpio-periph

package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"periph.io/x/conn/v3/gpio"
	"periph.io/x/conn/v3/gpio/gpioreg"
	"periph.io/x/host/v3"
)

type data_a_pins struct {
	data_7 gpio.PinIO
	data_3 gpio.PinIO
	data_2 gpio.PinIO
	data_1 gpio.PinIO
	data_0 gpio.PinIO
}

type data_pins struct {
	data_7 gpio.PinIO
	data_6 gpio.PinIO
	data_5 gpio.PinIO
	data_4 gpio.PinIO
	data_3 gpio.PinIO
	data_2 gpio.PinIO
	data_1 gpio.PinIO
	data_0 gpio.PinIO
}

type opcode_pins struct {
	opcode_3 gpio.PinIO
	opcode_2 gpio.PinIO
	opcode_1 gpio.PinIO
	opcode_0 gpio.PinIO
}

func UserControl(opcode opcode_pins, data_in_a data_a_pins, data_in_b data_pins, GO_BAR_PIN gpio.PinIO, RESET_PIN gpio.PinIO, JAM_PIN gpio.PinIO, data_out data_pins) {

	var userInput string

	for {

		time.Sleep(200 * time.Millisecond)

		fmt.Print("1: add, 2: subtract, 3: multiply, 4: divide, x: exit: ")
		fmt.Scan(&userInput)
		//fmt.Printf("\n")

		switch userInput {
		case "1":
			// ADD *************************************************************************************
			fmt.Println("    ADD")
			fmt.Println("    DATA_IN_A: 10000011")
			fmt.Println("    DATA_IN_B: 00001100")
			opcode.write_opcode(0, 0, 1, 1)
			data_in_a.write_data_in_a(1, 0, 0, 1, 1)
			data_in_b.write_data_in(0, 0, 0, 0, 1, 1, 0, 0)
			execute_opcode(GO_BAR_PIN, data_out)
		case "2":
			// SUBTRACT ********************************************************************************
			fmt.Println("    SUBTRACT")
			fmt.Println("    DATA_IN_A: 00001111")
			fmt.Println("    DATA_IN_B: 00001100")
			opcode.write_opcode(0, 1, 1, 1)
			data_in_a.write_data_in_a(0, 1, 1, 1, 1)
			data_in_b.write_data_in(0, 0, 0, 0, 1, 1, 0, 0)
			execute_opcode(GO_BAR_PIN, data_out)
		case "3":
			// MULTIPLY ********************************************************************************
			fmt.Println("    MULTIPLY")
			fmt.Println("    DATA_IN_A: 00000010")
			fmt.Println("    DATA_IN_B: 00000100")
			opcode.write_opcode(1, 1, 0, 0)
			data_in_a.write_data_in_a(0, 0, 0, 1, 0)
			data_in_b.write_data_in(0, 0, 0, 0, 0, 1, 0, 0)
			execute_opcode(GO_BAR_PIN, data_out)
		case "4":
			// DIVIDE ********************************************************************************
			fmt.Println("    DIVIDE")
			fmt.Println("    DATA_IN_A: 00000100")
			fmt.Println("    DATA_IN_B: 00000010")
			opcode.write_opcode(1, 1, 1, 0)
			data_in_a.write_data_in_a(0, 0, 1, 0, 0)
			data_in_b.write_data_in(0, 0, 0, 1, 0, 0, 0, 0)
			execute_opcode(GO_BAR_PIN, data_out)
		case "x":
			os.Exit(1)
		default:
			fmt.Println("Try again")
		}

	}

}

func (d data_a_pins) write_data_in_a(d7 int, d3 int, d2 int, d1 int, d0 int) {

	if d7 == 1 {
		err := d.data_7.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_7.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d3 == 1 {
		err := d.data_3.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_3.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d2 == 1 {
		err := d.data_2.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_2.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d1 == 1 {
		err := d.data_1.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_1.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d0 == 1 {
		err := d.data_0.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_0.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}

}

func (d data_pins) write_data_in(d7 int, d6 int, d5 int, d4 int, d3 int, d2 int, d1 int, d0 int) {

	if d7 == 1 {
		err := d.data_7.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_7.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d6 == 1 {
		err := d.data_6.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_6.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d5 == 1 {
		err := d.data_5.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_5.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d4 == 1 {
		err := d.data_4.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_4.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d3 == 1 {
		err := d.data_3.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_3.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d2 == 1 {
		err := d.data_2.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_2.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d1 == 1 {
		err := d.data_1.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_1.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if d0 == 1 {
		err := d.data_0.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := d.data_0.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
}

func (d data_pins) read_data_out() {

	var dataout [8]int

	// GET BUTTON LEVEL
	DATA_OUT_7_PIN_Level := d.data_7.Read()
	DATA_OUT_6_PIN_Level := d.data_6.Read()
	DATA_OUT_5_PIN_Level := d.data_5.Read()
	DATA_OUT_4_PIN_Level := d.data_4.Read()
	DATA_OUT_3_PIN_Level := d.data_3.Read()
	DATA_OUT_2_PIN_Level := d.data_2.Read()
	DATA_OUT_1_PIN_Level := d.data_1.Read()
	DATA_OUT_0_PIN_Level := d.data_0.Read()

	if DATA_OUT_7_PIN_Level == gpio.High {
		dataout[7] = 1
	} else {
		dataout[7] = 0
	}
	if DATA_OUT_6_PIN_Level == gpio.High {
		dataout[6] = 1
	} else {
		dataout[6] = 0
	}
	if DATA_OUT_5_PIN_Level == gpio.High {
		dataout[5] = 1
	} else {
		dataout[5] = 0
	}
	if DATA_OUT_4_PIN_Level == gpio.High {
		dataout[4] = 1
	} else {
		dataout[4] = 0
	}
	if DATA_OUT_3_PIN_Level == gpio.High {
		dataout[3] = 1
	} else {
		dataout[3] = 0
	}
	if DATA_OUT_2_PIN_Level == gpio.High {
		dataout[2] = 1
	} else {
		dataout[2] = 0
	}
	if DATA_OUT_1_PIN_Level == gpio.High {
		dataout[1] = 1
	} else {
		dataout[1] = 0
	}
	if DATA_OUT_0_PIN_Level == gpio.High {
		dataout[0] = 1
	} else {
		dataout[0] = 0
	}

	fmt.Printf("    DATA_OUT:  %b%b%b%b%b%b%b%b \n", dataout[7], dataout[6], dataout[5], dataout[4], dataout[3], dataout[2], dataout[1], dataout[0])

}

func (o opcode_pins) write_opcode(o3 int, o2 int, o1 int, o0 int) {

	if o3 == 1 {
		err := o.opcode_3.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := o.opcode_3.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if o2 == 1 {
		err := o.opcode_2.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := o.opcode_2.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if o1 == 1 {
		err := o.opcode_1.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := o.opcode_1.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
	if o0 == 1 {
		err := o.opcode_0.Out(gpio.High)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		err := o.opcode_0.Out(gpio.Low)
		if err != nil {
			log.Fatal(err)
		}
	}
}

func execute_opcode(go_bar_pin gpio.PinIO, data_out data_pins) {
	time.Sleep(1 * time.Microsecond)

	// GO_BAR
	err := go_bar_pin.Out(gpio.Low)
	if err != nil {
		log.Fatal(err)
	}

	time.Sleep(1 * time.Microsecond)

	data_out.read_data_out()

	time.Sleep(1 * time.Microsecond)

	err = go_bar_pin.Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}

	time.Sleep(1 * time.Microsecond)

}

func main() {

	fmt.Println("LETS GO 2!!")

	// INIT HOST MACHINE (i.e. Raspberry Pi)
	_, err := host.Init()
	if err != nil {
		log.Fatal(err)
	}

	// DATA_IN_A -----------------------------------
	DATA_IN_A7_PIN := gpioreg.ByName("24")
	if DATA_IN_A7_PIN == nil {
		log.Fatal("Failed to find DATA_IN_A7_PIN")
	}
	// DATA_IN_A6_PIN := gpioreg.ByName("XX")
	// if DATA_IN_A6_PIN == nil {
	//	  log.Fatal("Failed to find DATA_IN_A6_PIN")
	// }
	// DATA_IN_A5_PIN := gpioreg.ByName("XX")
	// if DATA_IN_A5_PIN == nil {
	// 	log.Fatal("Failed to find DATA_IN_A5_PIN")
	// }
	// DATA_IN_A4_PIN := gpioreg.ByName("XX")
	// if DATA_IN_A4_PIN == nil {
	//		log.Fatal("Failed to find DATA_IN_A4_PIN")
	// }
	DATA_IN_A3_PIN := gpioreg.ByName("23")
	if DATA_IN_A3_PIN == nil {
		log.Fatal("Failed to find DATA_IN_A3_PIN")
	}
	DATA_IN_A2_PIN := gpioreg.ByName("18")
	if DATA_IN_A2_PIN == nil {
		log.Fatal("Failed to find DATA_IN_A2_PIN")
	}
	DATA_IN_A1_PIN := gpioreg.ByName("15")
	if DATA_IN_A1_PIN == nil {
		log.Fatal("Failed to find DATA_IN_A1_PIN")
	}
	DATA_IN_A0_PIN := gpioreg.ByName("14")
	if DATA_IN_A0_PIN == nil {
		log.Fatal("Failed to find DATA_IN_A0_PIN")
	}
	data_in_a := data_a_pins{DATA_IN_A7_PIN, DATA_IN_A3_PIN, DATA_IN_A2_PIN, DATA_IN_A1_PIN, DATA_IN_A0_PIN}

	// DATA_IN_B -----------------------------------
	DATA_IN_B7_PIN := gpioreg.ByName("26")
	if DATA_IN_B7_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B7_PIN")
	}
	DATA_IN_B6_PIN := gpioreg.ByName("21")
	if DATA_IN_B6_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B6_PIN")
	}
	DATA_IN_B5_PIN := gpioreg.ByName("20")
	if DATA_IN_B5_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B5_PIN")
	}
	DATA_IN_B4_PIN := gpioreg.ByName("16")
	if DATA_IN_B4_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B4_PIN")
	}
	DATA_IN_B3_PIN := gpioreg.ByName("12")
	if DATA_IN_B3_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B3_PIN")
	}
	DATA_IN_B2_PIN := gpioreg.ByName("7")
	if DATA_IN_B2_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B2_PIN")
	}
	DATA_IN_B1_PIN := gpioreg.ByName("8")
	if DATA_IN_B1_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B1_PIN")
	}
	DATA_IN_B0_PIN := gpioreg.ByName("25")
	if DATA_IN_B0_PIN == nil {
		log.Fatal("Failed to find DATA_IN_B0_PIN")
	}
	data_in_b := data_pins{DATA_IN_B7_PIN, DATA_IN_B6_PIN, DATA_IN_B5_PIN, DATA_IN_B4_PIN, DATA_IN_B3_PIN, DATA_IN_B2_PIN, DATA_IN_B1_PIN, DATA_IN_B0_PIN}

	// DATA_OUT -----------------------------------
	DATA_OUT_7_PIN := gpioreg.ByName("22")
	if DATA_OUT_7_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_7_PIN")
	}
	DATA_OUT_6_PIN := gpioreg.ByName("10")
	if DATA_OUT_6_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_6_PIN")
	}
	DATA_OUT_5_PIN := gpioreg.ByName("9")
	if DATA_OUT_5_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_5_PIN")
	}
	DATA_OUT_4_PIN := gpioreg.ByName("11")
	if DATA_OUT_4_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_4_PIN")
	}
	DATA_OUT_3_PIN := gpioreg.ByName("5")
	if DATA_OUT_3_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_3_PIN")
	}
	DATA_OUT_2_PIN := gpioreg.ByName("6")
	if DATA_OUT_2_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_2_PIN")
	}
	DATA_OUT_1_PIN := gpioreg.ByName("13")
	if DATA_OUT_1_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_1_PIN")
	}
	DATA_OUT_0_PIN := gpioreg.ByName("19")
	if DATA_OUT_0_PIN == nil {
		log.Fatal("Failed to find DATA_OUT_0_PIN")
	}
	data_out := data_pins{DATA_OUT_7_PIN, DATA_OUT_6_PIN, DATA_OUT_5_PIN, DATA_OUT_4_PIN, DATA_OUT_3_PIN, DATA_OUT_2_PIN, DATA_OUT_1_PIN, DATA_OUT_0_PIN}
	// SET PULLDOWN RESISTER AND LOOK FOR BOTH EDGES (High->Low or Low->High)
	err = data_out.data_7.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_6.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_5.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_4.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_3.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_2.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_1.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}
	err = data_out.data_0.In(gpio.PullDown, gpio.BothEdges)
	if err != nil {
		log.Fatal(err)
	}

	// OPCODE -----------------------------------
	OPCODE_3_PIN := gpioreg.ByName("2")
	if OPCODE_3_PIN == nil {
		log.Fatal("Failed to find OPCODE_3_PIN")
	}
	OPCODE_2_PIN := gpioreg.ByName("3")
	if OPCODE_2_PIN == nil {
		log.Fatal("Failed to find OPCODE_2_PIN")
	}
	OPCODE_1_PIN := gpioreg.ByName("4")
	if OPCODE_1_PIN == nil {
		log.Fatal("Failed to find OPCODE_1_PIN")
	}
	OPCODE_0_PIN := gpioreg.ByName("17")
	if OPCODE_0_PIN == nil {
		log.Fatal("Failed to find OPCODE_0_PIN")
	}
	opcode := opcode_pins{OPCODE_3_PIN, OPCODE_2_PIN, OPCODE_1_PIN, OPCODE_0_PIN}

	// GO_BAR, RESET, JAM -----------------------------------
	GO_BAR_PIN := gpioreg.ByName("27")
	if GO_BAR_PIN == nil {
		log.Fatal("Failed to find GO_BAR_PIN")
	}
	RESET_PIN := gpioreg.ByName("0")
	if RESET_PIN == nil {
		log.Fatal("Failed to find RESET_PIN")
	}
	JAM_PIN := gpioreg.ByName("1")
	if JAM_PIN == nil {
		log.Fatal("Failed to find JAM_PIN")
	}

	//SET INIT OUTPUTS ----------------------
	opcode.write_opcode(0, 0, 0, 0)
	data_in_a.write_data_in_a(0, 0, 0, 0, 0)
	data_in_b.write_data_in(0, 0, 0, 0, 0, 0, 0, 0)
	err = GO_BAR_PIN.Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}
	err = RESET_PIN.Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}
	err = JAM_PIN.Out(gpio.Low)
	if err != nil {
		log.Fatal(err)
	}

	// RESET *************************************************************************************
	fmt.Println("RESET")

	time.Sleep(1 * time.Microsecond)

	err = RESET_PIN.Out(gpio.Low)
	if err != nil {
		log.Fatal(err)
	}
	time.Sleep(1 * time.Microsecond)

	err = RESET_PIN.Out(gpio.High)
	if err != nil {
		log.Fatal(err)
	}

	time.Sleep(1 * time.Microsecond)

	UserControl(opcode, data_in_a, data_in_b, GO_BAR_PIN, RESET_PIN, JAM_PIN, data_out)

}
