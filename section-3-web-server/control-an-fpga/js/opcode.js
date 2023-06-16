/* addition.js */

var operand1Done = false;
var operand2Done = false;

var state = "start";
// start
// completed_operands
// send_add_to_server
// sent_add_to_server
// showed_sum 
// server_error

console.log("STATE = " + state);

var lightgreen = "#d4ffb7";
var darkgreen = "#54e90f";
var grey = "#b6b6b6";
var white = "#ffffff";
var black = "#000000";
var red = "#ff0000";

console.log("STARTING addition.js JAVASCRIPT");

// RESET ------------------------------------------------------------------------------------------------

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
    serverError = false;
    document.getElementById('operand_1_input_field').disabled = false;
    document.getElementById('operand_2_input_field').disabled = false;
}

// STEP 1  ----------------------------------------------------------------------------------------------
// USER ENTERS OPERANDS
console.log("STEP 1 - USER ENTERS OPERANDS");

function operand_1_onchange() {
    document.getElementById("operand_1_input").style.backgroundColor=lightgreen;
    document.getElementById("operand_1_input_field").style.backgroundColor=lightgreen;
    document.getElementById("operand_1_input_field").style.color=black;
    operand1Done = true;
    console.log("USER OPERAND 1 = true");
}

function operand_2_onchange() {
    document.getElementById("operand_2_input").style.backgroundColor=lightgreen;
    document.getElementById("operand_2_input_field").style.backgroundColor=lightgreen;
    document.getElementById("operand_2_input_field").style.color=black;
    operand2Done = true;
    console.log("USER OPERAND 2 = true");
}

// STEP 2  ----------------------------------------------------------------------------------------------
// WAIT: FOR USER TO ENTER THE OPERANDS
// STATE: start -> completed_operands
console.log("STEP 2 - WAIT: FOR USER TO ENTER THE OPERANDS");

setInterval(function(){
    if (state == "start") {
        if ((operand1Done) && (operand2Done)) {
            state = "completed_operands";
            console.log("STATE = " + state);
            completed_operands();
        }
    }
}, 100);

// STEP 3 ------------------------------------------------------------------------------------------------------------
// WAIT: FOR USER TO CLICK ADD
// STATE: completed_operands -> start_generate_preview

function completed_operands() {
    console.log("STEP 3 - WAIT: FOR USER TO CLICK ADD");
    document.getElementById("add_button_push").classList.add("button_pulse"); // PULSE ADD BUTTON
}

function add_button_onmouseover() {
    switch(state) {
        case "start":
            document.getElementById("add_button_text").innerHTML="FILL IN OPERANDS";
            document.getElementById("add_button_push").style.backgroundColor=grey;
            break;
        case "completed_operands":
            document.getElementById("add_button_text").innerHTML="ADD";
            document.getElementById("add_button_push").style.backgroundColor=darkgreen;
            break;
        }
}

function add_button_onmouseout() {
    switch(state) {
        case "start":
            document.getElementById("add_button_text").innerHTML="ADD";
            document.getElementById("add_button_push").style.backgroundColor=white;
            break;
        case "completed_operands":
            document.getElementById("add_button_text").innerHTML="ADD";
            document.getElementById("add_button_push").style.backgroundColor=white;
            break;
    }
}

function add_button_onclick() {
    switch(state) {
        case "completed_operands":
            state = "send_add_to_server";
            console.log("STATE = " + state);
            add();
            break;
    }
}

// STEP 4 ----------------------------------------------------------------------------------------------------------
// SEND OPERANDS TO SERVER
// STATE: send_add_to_server -> sent_add_to_server

function add() {
    console.log("STEP 4 - SEND ADD TO SERVER");
    document.getElementById("add_button_push").classList.remove("button_pulse"); // REMOVE PULSE GENERATE BUTTON
    document.getElementById("add_button_text").innerHTML="ADD";
    document.getElementById("add_button_push").style.backgroundColor=darkgreen;
    document.getElementById("sum_display").classList.add("button_pulse"); // PULSE SUM
    document.getElementById("sum_display_text").innerHTML="Wait...";
    document.getElementById("sum_display").style.color=black;

    // GATHER ALL OPERANDS FROM INPUT 
    operand1 = document.getElementById('operand_1_input_field').value;
    operand2 = document.getElementById('operand_2_input_field').value;

    // SEND ATTRIBUTES TO SERVER
    // "POST"/SEND DATA TO SERVER - RUN PHP FILE ON SERVER - GET RESPONSE
    send_data_to_web_server(operand1, operand2);

    // UPDATE STATE
    state = "sent_add_to_server";
    console.log("STATE = " + state);
}

// STEP 5A ------------------------------------------------------------------------------------------------------------
// WAIT TO SHOW SUM
// STATE: sent_add_to_server -> showed_sum

function show_data(data) {
    console.log("STEP 5A - WAIT TO SHOW SUM");

    // CLEAN UP THE PIC
    document.getElementById("add_button_push").classList.add("button_pulse"); // PULSE ADD BUTTON

    // GET RESPONSE
    document.getElementById("sum_display_text").innerHTML=data.sum;

    // CLEAN UP
    document.getElementById("add_button_push").classList.remove("button_pulse"); // REMOVE PULSE
    document.getElementById("sum_display").classList.remove("button_pulse"); // REMOVE PULSE
    document.getElementById("sum_display").style.backgroundColor=lightgreen;

    // FREEZE INPUT
    document.getElementById('operand_1_input_field').disabled = true;
    document.getElementById('operand_2_input_field').disabled = true;

    state = "showed_sum";
    console.log("STATE = " + state);

}

// STEP 5B ------------------------------------------------------------------------------------------------------------
// WAIT: ERRORS FROM SERVER
// STATE: sent_add_to_server -> server_error

function server_error() {          
    console.log("STEP 5B - SERVER ERROR");

    document.getElementById("sum_display_text").innerHTML="SERVER ERROR";
    document.getElementById("sum_display").style.backgroundColor=red;
    document.getElementById("sum_display").style.color=black;
    document.getElementById("sum_display").classList.remove("button_pulse"); // REMOVE PULSE

    state = "server_error";
    console.log("STATE = " + state);

}