// control-fpga-via-raspi-and-webserver main.go

package main

import (
	"fmt"
	"os"
	"time"

	log "github.com/sirupsen/logrus"
)

// Addthis Adds two ints together
func addThis(a int, b int) (temp int) {
	temp = a + b
	return
}

func init() {

	// 7 LOG LEVELS
	// Trace, Debug, Info, Warn, Error, Fatal, Panic

	// SET LOG LEVEL
	// log.SetLevel(log.InfoLevel)
	log.SetLevel(log.TraceLevel)

	// SET FORMAT
	log.SetFormatter(&log.TextFormatter{})
	// log.SetFormatter(&log.JSONFormatter{})

	// SET OUTPUT (DEFAULT stderr)
	log.SetOutput(os.Stdout)
}

// Looping forever - For the testing Marathon and Mesos
func main() {

	log.Info("Let's Start this!")

	var a = 0
	var b = 1
	for {
		a = addThis(a, b)
		fmt.Println("Hello everyone, the count is:", a)
		time.Sleep(2000 * time.Millisecond)
	}
}
