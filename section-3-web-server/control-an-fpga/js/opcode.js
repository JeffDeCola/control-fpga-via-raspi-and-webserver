/* opcode.js */

console.log("STARTING opcode.js JAVASCRIPT");

var lightgreen = "#d4ffb7";
var darkgreen = "#54e90f";
var grey = "#b6b6b6";
var white = "#ffffff";
var black = "#000000";
var red = "#ff0000";


// 
// COMPUTE ------------------------------------------------------------------------------------------------

function reset_button_onmouseover() {
    document.getElementById("reset_button_push").style.backgroundColor=grey;
}

function reset_button_onmouseout() {
    document.getElementById("reset_button_push").style.backgroundColor=white;    
}

function reset_button_onclick() {
    state = "start";
    console.log("STATE = " + state);
    document.getElementById("operand_1_input").style.backgroundColor=white;
    document.getElementById("operand_1_input_field").style.backgroundColor=white;
    document.getElementById("operand_1_input_field").style.color=black;
    document.getElementById("operand_1_input_field").value = "";
    operand1Done = false;
    console.log("USER OPERAND 2 = false");
    document.getElementById("operand_2_input").style.backgroundColor=white;
    document.getElementById("operand_2_input_field").style.backgroundColor=white;
    document.getElementById("operand_2_input_field").style.color=black;
    document.getElementById("operand_2_input_field").value = "";
    operand2Done = false;
    console.log("USER OPERAND 2 = false");
    document.getElementById("sum_display").style.backgroundColor=white;
    document.getElementById("sum_display_text").innerHTML="";
    document.getElementById("add_button_push").classList.remove("button_pulse"); // REMOVE PULSE
    document.getElementById("add_button_push").style.backgroundColor=white;
    document.getElementById("add_button_text").innerHTML="ADD";
    // serverError = false;
    document.getElementById('operand_1_input_field').disabled = false;
    document.getElementById('operand_2_input_field').disabled = false;
}
