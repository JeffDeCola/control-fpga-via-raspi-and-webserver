/* opcode.js */

console.log("STARTING opcode.js JAVASCRIPT");

var compute_go_state = "ready";
// sent

var opcode_3_state = "low";
var opcode_2_state = "low";
var opcode_1_state = "high";
var opcode_0_state = "high";

var data_in_a_7_state = "high";
var data_in_a_6_state = "low";
var data_in_a_5_state = "low";
var data_in_a_4_state = "low";
var data_in_a_3_state = "low";
var data_in_a_2_state = "low";
var data_in_a_1_state = "high";
var data_in_a_0_state = "high";

var data_in_b_7_state = "low";
var data_in_b_6_state = "low";
var data_in_b_5_state = "high";
var data_in_b_4_state = "low";
var data_in_b_3_state = "high";
var data_in_b_2_state = "low";
var data_in_b_1_state = "low";
var data_in_b_0_state = "low";

console.log("compute_go_state = " + compute_go_state);

var lightgreen = "#6aa84f";
var darkgreen = "#194504";
var grey = "#b6b6b6";
var white = "#ffffff";
var black = "#000000";
var red = "#ff0000";

// OPCODE ------------------------------------------------------------------------------------------------

function opcode_one_3_onmouseover() {
    switch(opcode_3_state) {
        case "low":
            document.getElementById("opcode_one_3").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("opcode_one_3").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_3_onmouseout() {
    switch(opcode_3_state) {
        case "low":
            document.getElementById("opcode_one_3").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("opcode_one_3").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_3_onclick() {
    switch(opcode_3_state) {
        case "low":
            opcode_3_state = "high";
            console.log("opcode_3_state = " + opcode_3_state);
            document.getElementById("opcode_one_3").style.backgroundColor=lightgreen;
            document.getElementById("opcode_zero_3").style.backgroundColor=white;
            document.getElementById("opcode_value_3").innerHTML="1";
            break;
    }
}
function opcode_zero_3_onmouseover() {
    switch(opcode_3_state) {
        case "low":
            document.getElementById("opcode_zero_3").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_3").style.backgroundColor=grey;
            break;
    }
}
function opcode_zero_3_onmouseout() {
    switch(opcode_3_state) {
        case "low":
            document.getElementById("opcode_zero_3").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_3").style.backgroundColor=white;
            break;
    }
}
function opcode_zero_3_onclick() {
    switch(opcode_3_state) {
        case "high":
            opcode_3_state = "low";
            console.log("opcode_3_state = " + opcode_3_state);
            document.getElementById("opcode_one_3").style.backgroundColor=white;
            document.getElementById("opcode_zero_3").style.backgroundColor=lightgreen;
            document.getElementById("opcode_value_3").innerHTML="0";
            break;
    }
}
function opcode_one_2_onmouseover() {
    switch(opcode_2_state) {
        case "low":
            document.getElementById("opcode_one_2").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("opcode_one_2").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_2_onmouseout() {
    switch(opcode_2_state) {
        case "low":
            document.getElementById("opcode_one_2").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("opcode_one_2").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_2_onclick() {
    switch(opcode_2_state) {
        case "low":
            opcode_2_state = "high";
            console.log("opcode_2_state = " + opcode_2_state);
            document.getElementById("opcode_one_2").style.backgroundColor=lightgreen;
            document.getElementById("opcode_zero_2").style.backgroundColor=white;
            document.getElementById("opcode_value_2").innerHTML="1";
            break;
    }
}
function opcode_zero_2_onmouseover() {
    switch(opcode_2_state) {
        case "low":
            document.getElementById("opcode_zero_2").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_2").style.backgroundColor=grey;
            break;    
    }
}
function opcode_zero_2_onmouseout() {
    switch(opcode_2_state) {
        case "low":
            document.getElementById("opcode_zero_2").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_2").style.backgroundColor=white;
            break;
    }
}
function opcode_zero_2_onclick() {
    switch(opcode_2_state) {
        case "high":
            opcode_2_state = "low";
            console.log("opcode_2_state = " + opcode_2_state);
            document.getElementById("opcode_one_2").style.backgroundColor=white;
            document.getElementById("opcode_zero_2").style.backgroundColor=lightgreen;
            document.getElementById("opcode_value_2").innerHTML="0";
            break;
    }
}
function opcode_one_1_onmouseover() {
    switch(opcode_1_state) {
        case "low":
            document.getElementById("opcode_one_1").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("opcode_one_1").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_1_onmouseout() {
    switch(opcode_1_state) {
        case "low":
            document.getElementById("opcode_one_1").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("opcode_one_1").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_1_onclick() {
    switch(opcode_1_state) {
        case "low":
            opcode_1_state = "high";
            console.log("opcode_1_state = " + opcode_1_state);
            document.getElementById("opcode_one_1").style.backgroundColor=lightgreen;
            document.getElementById("opcode_zero_1").style.backgroundColor=white;
            document.getElementById("opcode_value_1").innerHTML="1";
            break;
    }
}
function opcode_zero_1_onmouseover() {
    switch(opcode_1_state) {
        case "low":
            document.getElementById("opcode_zero_1").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_1").style.backgroundColor=grey;
            break;
    }
}
function opcode_zero_1_onmouseout() {
    switch(opcode_1_state) {
        case "low":
            document.getElementById("opcode_zero_1").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_1").style.backgroundColor=white;
            break;
    }
}
function opcode_zero_1_onclick() {
    switch(opcode_1_state) {
        case "high":
            opcode_1_state = "low";
            console.log("opcode_1_state = " + opcode_1_state);
            document.getElementById("opcode_one_1").style.backgroundColor=white;
            document.getElementById("opcode_zero_1").style.backgroundColor=lightgreen;
            document.getElementById("opcode_value_1").innerHTML="0";
            break;
    }
}
function opcode_one_0_onmouseover() {
    switch(opcode_0_state) {
        case "low":
            document.getElementById("opcode_one_0").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("opcode_one_0").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_0_onmouseout() {
    switch(opcode_0_state) {
        case "low":
            document.getElementById("opcode_one_0").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("opcode_one_0").style.backgroundColor=lightgreen;
            break;
    }
}
function opcode_one_0_onclick() {
    switch(opcode_0_state) {
        case "low":
            opcode_0_state = "high";
            console.log("opcode_0_state = " + opcode_0_state);
            document.getElementById("opcode_one_0").style.backgroundColor=lightgreen;
            document.getElementById("opcode_zero_0").style.backgroundColor=white;
            document.getElementById("opcode_value_0").innerHTML="1";
            break;
  }
}
function opcode_zero_0_onmouseover() {
    switch(opcode_0_state) {
        case "low":
            document.getElementById("opcode_zero_0").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_0").style.backgroundColor=grey;
            break;    
    }
}
function opcode_zero_0_onmouseout() {
    switch(opcode_0_state) {
        case "low":
            document.getElementById("opcode_zero_0").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("opcode_zero_0").style.backgroundColor=white;
            break;
    }
}
function opcode_zero_0_onclick() {
    switch(opcode_0_state) {
        case "high":
            opcode_0_state = "low";
            console.log("opcode_0_state = " + opcode_0_state);
            document.getElementById("opcode_one_0").style.backgroundColor=white;
            document.getElementById("opcode_zero_0").style.backgroundColor=lightgreen;
            document.getElementById("opcode_value_0").innerHTML="0";
            break;
  }
}

// DATA_IN_A ---------------------------------------------------------------------------------------------

function data_in_a_one_7_onmouseover() {
    switch(data_in_a_7_state) {
        case "low":
            document.getElementById("data_in_a_one_7").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("data_in_a_one_7").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_7_onmouseout() {
    switch(data_in_a_7_state) {
        case "low":
            document.getElementById("data_in_a_one_7").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("data_in_a_one_7").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_7_onclick() {
    switch(data_in_a_7_state) {
        case "low":
            data_in_a_7_state = "high";
            console.log("data_in_a_7_state = " + data_in_a_7_state);
            document.getElementById("data_in_a_one_7").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_zero_7").style.backgroundColor=white;
            document.getElementById("data_in_a_value_7").innerHTML="1";
            break;
    }
}
function data_in_a_zero_7_onmouseover() {
    switch(data_in_a_7_state) {
        case "low":
            document.getElementById("data_in_a_zero_7").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_7").style.backgroundColor=grey;
            break;
    }
}
function data_in_a_zero_7_onmouseout() {
    switch(data_in_a_7_state) {
        case "low":
            document.getElementById("data_in_a_zero_7").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_7").style.backgroundColor=white;
            break;
    }
}
function data_in_a_zero_7_onclick() {
    switch(data_in_a_7_state) {
        case "high":
            data_in_a_7_state = "low";
            console.log("data_in_a_7_state = " + data_in_a_7_state);
            document.getElementById("data_in_a_one_7").style.backgroundColor=white;
            document.getElementById("data_in_a_zero_7").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_value_7").innerHTML="0";
            break;
    }
}
function data_in_a_one_6_onmouseover() {
    switch(data_in_a_6_state) {
        case "low":
            document.getElementById("data_in_a_one_6").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("data_in_a_one_6").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_6_onmouseout() {
    switch(data_in_a_6_state) {
        case "low":
            document.getElementById("data_in_a_one_6").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("data_in_a_one_6").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_6_onclick() {
    switch(data_in_a_6_state) {
        case "low":
            data_in_a_6_state = "high";
            console.log("data_in_a_6_state = " + data_in_a_6_state);
            document.getElementById("data_in_a_one_6").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_zero_6").style.backgroundColor=white;
            document.getElementById("data_in_a_value_6").innerHTML="1";
            break;
    }
}
function data_in_a_zero_6_onmouseover() {
    switch(data_in_a_6_state) {
        case "low":
            document.getElementById("data_in_a_zero_6").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_6").style.backgroundColor=grey;
            break;
    }
}
function data_in_a_zero_6_onmouseout() {
    switch(data_in_a_6_state) {
        case "low":
            document.getElementById("data_in_a_zero_6").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_6").style.backgroundColor=white;
            break;
    }
}
function data_in_a_zero_6_onclick() {
    switch(data_in_a_6_state) {
        case "high":
            data_in_a_6_state = "low";
            console.log("data_in_a_6_state = " + data_in_a_6_state);
            document.getElementById("data_in_a_one_6").style.backgroundColor=white;
            document.getElementById("data_in_a_zero_6").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_value_6").innerHTML="0";
            break;
    }
}
function data_in_a_one_5_onmouseover() {
    switch(data_in_a_5_state) {
        case "low":
            document.getElementById("data_in_a_one_5").style.backgroundColor=grey;
            break;
        case "high":
            document.getElementById("data_in_a_one_5").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_5_onmouseout() {
    switch(data_in_a_5_state) {
        case "low":
            document.getElementById("data_in_a_one_5").style.backgroundColor=white;
            break;
        case "high":
            document.getElementById("data_in_a_one_5").style.backgroundColor=lightgreen;
            break;
    }
}
function data_in_a_one_5_onclick() {
    switch(data_in_a_5_state) {
        case "low":
            data_in_a_5_state = "high";
            console.log("data_in_a_5_state = " + data_in_a_5_state);
            document.getElementById("data_in_a_one_5").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_zero_5").style.backgroundColor=white;
            document.getElementById("data_in_a_value_5").innerHTML="1";
            break;
    }
}
function data_in_a_zero_5_onmouseover() {
    switch(data_in_a_5_state) {
        case "low":
            document.getElementById("data_in_a_zero_5").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_5").style.backgroundColor=grey;
            break;
    }
}
function data_in_a_zero_5_onmouseout() {
    switch(data_in_a_5_state) {
        case "low":
            document.getElementById("data_in_a_zero_5").style.backgroundColor=lightgreen;
            break;
        case "high":
            document.getElementById("data_in_a_zero_5").style.backgroundColor=white;
            break;
    }
}
function data_in_a_zero_5_onclick() {
    switch(data_in_a_5_state) {
        case "high":
            data_in_a_5_state = "low";
            console.log("data_in_a_5_state = " + data_in_a_5_state);
            document.getElementById("data_in_a_one_5").style.backgroundColor=white;
            document.getElementById("data_in_a_zero_5").style.backgroundColor=lightgreen;
            document.getElementById("data_in_a_value_5").innerHTML="0";
            break;
    }
}
function data_in_a_one_4_onmouseover() {
  switch(data_in_a_4_state) {
      case "low":
          document.getElementById("data_in_a_one_4").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_a_one_4").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_4_onmouseout() {
  switch(data_in_a_4_state) {
      case "low":
          document.getElementById("data_in_a_one_4").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_a_one_4").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_4_onclick() {
  switch(data_in_a_4_state) {
      case "low":
          data_in_a_4_state = "high";
          console.log("data_in_a_4_state = " + data_in_a_4_state);
          document.getElementById("data_in_a_one_4").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_zero_4").style.backgroundColor=white;
          document.getElementById("data_in_a_value_4").innerHTML="1";
          break;
  }
}
function data_in_a_zero_4_onmouseover() {
  switch(data_in_a_4_state) {
      case "low":
          document.getElementById("data_in_a_zero_4").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_4").style.backgroundColor=grey;
          break;
  }
}
function data_in_a_zero_4_onmouseout() {
  switch(data_in_a_4_state) {
      case "low":
          document.getElementById("data_in_a_zero_4").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_4").style.backgroundColor=white;
          break;
  }
}
function data_in_a_zero_4_onclick() {
  switch(data_in_a_4_state) {
      case "high":
          data_in_a_4_state = "low";
          console.log("data_in_a_4_state = " + data_in_a_4_state);
          document.getElementById("data_in_a_one_4").style.backgroundColor=white;
          document.getElementById("data_in_a_zero_4").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_value_4").innerHTML="0";
          break;
  }
}
function data_in_a_one_3_onmouseover() {
  switch(data_in_a_3_state) {
      case "low":
          document.getElementById("data_in_a_one_3").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_a_one_3").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_3_onmouseout() {
  switch(data_in_a_3_state) {
      case "low":
          document.getElementById("data_in_a_one_3").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_a_one_3").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_3_onclick() {
  switch(data_in_a_3_state) {
      case "low":
          data_in_a_3_state = "high";
          console.log("data_in_a_3_state = " + data_in_a_3_state);
          document.getElementById("data_in_a_one_3").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_zero_3").style.backgroundColor=white;
          document.getElementById("data_in_a_value_3").innerHTML="1";
          break;
  }
}
function data_in_a_zero_3_onmouseover() {
  switch(data_in_a_3_state) {
      case "low":
          document.getElementById("data_in_a_zero_3").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_3").style.backgroundColor=grey;
          break;
  }
}
function data_in_a_zero_3_onmouseout() {
  switch(data_in_a_3_state) {
      case "low":
          document.getElementById("data_in_a_zero_3").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_3").style.backgroundColor=white;
          break;
  }
}
function data_in_a_zero_3_onclick() {
  switch(data_in_a_3_state) {
      case "high":
          data_in_a_3_state = "low";
          console.log("data_in_a_3_state = " + data_in_a_3_state);
          document.getElementById("data_in_a_one_3").style.backgroundColor=white;
          document.getElementById("data_in_a_zero_3").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_value_3").innerHTML="0";
          break;
  }
}
function data_in_a_one_2_onmouseover() {
  switch(data_in_a_2_state) {
      case "low":
          document.getElementById("data_in_a_one_2").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_a_one_2").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_2_onmouseout() {
  switch(data_in_a_2_state) {
      case "low":
          document.getElementById("data_in_a_one_2").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_a_one_2").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_2_onclick() {
  switch(data_in_a_2_state) {
      case "low":
          data_in_a_2_state = "high";
          console.log("data_in_a_2_state = " + data_in_a_2_state);
          document.getElementById("data_in_a_one_2").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_zero_2").style.backgroundColor=white;
          document.getElementById("data_in_a_value_2").innerHTML="1";
          break;
  }
}
function data_in_a_zero_2_onmouseover() {
  switch(data_in_a_2_state) {
      case "low":
          document.getElementById("data_in_a_zero_2").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_2").style.backgroundColor=grey;
          break;
  }
}
function data_in_a_zero_2_onmouseout() {
  switch(data_in_a_2_state) {
      case "low":
          document.getElementById("data_in_a_zero_2").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_2").style.backgroundColor=white;
          break;
  }
}
function data_in_a_zero_2_onclick() {
  switch(data_in_a_2_state) {
      case "high":
          data_in_a_2_state = "low";
          console.log("data_in_a_2_state = " + data_in_a_2_state);
          document.getElementById("data_in_a_one_2").style.backgroundColor=white;
          document.getElementById("data_in_a_zero_2").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_value_2").innerHTML="0";
          break;
  }
}
function data_in_a_one_1_onmouseover() {
  switch(data_in_a_1_state) {
      case "low":
          document.getElementById("data_in_a_one_1").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_a_one_1").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_1_onmouseout() {
  switch(data_in_a_1_state) {
      case "low":
          document.getElementById("data_in_a_one_1").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_a_one_1").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_1_onclick() {
  switch(data_in_a_1_state) {
      case "low":
          data_in_a_1_state = "high";
          console.log("data_in_a_1_state = " + data_in_a_1_state);
          document.getElementById("data_in_a_one_1").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_zero_1").style.backgroundColor=white;
          document.getElementById("data_in_a_value_1").innerHTML="1";
          break;
  }
}
function data_in_a_zero_1_onmouseover() {
  switch(data_in_a_1_state) {
      case "low":
          document.getElementById("data_in_a_zero_1").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_1").style.backgroundColor=grey;
          break;
  }
}
function data_in_a_zero_1_onmouseout() {
  switch(data_in_a_1_state) {
      case "low":
          document.getElementById("data_in_a_zero_1").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_1").style.backgroundColor=white;
          break;
  }
}
function data_in_a_zero_1_onclick() {
  switch(data_in_a_1_state) {
      case "high":
          data_in_a_1_state = "low";
          console.log("data_in_a_1_state = " + data_in_a_1_state);
          document.getElementById("data_in_a_one_1").style.backgroundColor=white;
          document.getElementById("data_in_a_zero_1").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_value_1").innerHTML="0";
          break;
  }
}
function data_in_a_one_0_onmouseover() {
  switch(data_in_a_0_state) {
      case "low":
          document.getElementById("data_in_a_one_0").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_a_one_0").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_0_onmouseout() {
  switch(data_in_a_0_state) {
      case "low":
          document.getElementById("data_in_a_one_0").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_a_one_0").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_a_one_0_onclick() {
  switch(data_in_a_0_state) {
      case "low":
          data_in_a_0_state = "high";
          console.log("data_in_a_0_state = " + data_in_a_0_state);
          document.getElementById("data_in_a_one_0").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_zero_0").style.backgroundColor=white;
          document.getElementById("data_in_a_value_0").innerHTML="1";
          break;
  }
}
function data_in_a_zero_0_onmouseover() {
  switch(data_in_a_0_state) {
      case "low":
          document.getElementById("data_in_a_zero_0").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_0").style.backgroundColor=grey;
          break;
  }
}
function data_in_a_zero_0_onmouseout() {
  switch(data_in_a_0_state) {
      case "low":
          document.getElementById("data_in_a_zero_0").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_a_zero_0").style.backgroundColor=white;
          break;
  }
}
function data_in_a_zero_0_onclick() {
  switch(data_in_a_0_state) {
      case "high":
          data_in_a_0_state = "low";
          console.log("data_in_a_0_state = " + data_in_a_0_state);
          document.getElementById("data_in_a_one_0").style.backgroundColor=white;
          document.getElementById("data_in_a_zero_0").style.backgroundColor=lightgreen;
          document.getElementById("data_in_a_value_0").innerHTML="0";
          break;
  }
}

// DATA_IN_B ---------------------------------------------------------------------------------------------

function data_in_b_one_7_onmouseover() {
  switch(data_in_b_7_state) {
      case "low":
          document.getElementById("data_in_b_one_7").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_b_one_7").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_7_onmouseout() {
  switch(data_in_b_7_state) {
      case "low":
          document.getElementById("data_in_b_one_7").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_b_one_7").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_7_onclick() {
  switch(data_in_b_7_state) {
      case "low":
          data_in_b_7_state = "high";
          console.log("data_in_b_7_state = " + data_in_b_7_state);
          document.getElementById("data_in_b_one_7").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_zero_7").style.backgroundColor=white;
          document.getElementById("data_in_b_value_7").innerHTML="1";
          break;
  }
}
function data_in_b_zero_7_onmouseover() {
  switch(data_in_b_7_state) {
      case "low":
          document.getElementById("data_in_b_zero_7").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_7").style.backgroundColor=grey;
          break;
  }
}
function data_in_b_zero_7_onmouseout() {
  switch(data_in_b_7_state) {
      case "low":
          document.getElementById("data_in_b_zero_7").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_7").style.backgroundColor=white;
          break;
  }
}
function data_in_b_zero_7_onclick() {
  switch(data_in_b_7_state) {
      case "high":
          data_in_b_7_state = "low";
          console.log("data_in_b_7_state = " + data_in_b_7_state);
          document.getElementById("data_in_b_one_7").style.backgroundColor=white;
          document.getElementById("data_in_b_zero_7").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_value_7").innerHTML="0";
          break;
  }
}
function data_in_b_one_6_onmouseover() {
  switch(data_in_b_6_state) {
      case "low":
          document.getElementById("data_in_b_one_6").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_b_one_6").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_6_onmouseout() {
  switch(data_in_b_6_state) {
      case "low":
          document.getElementById("data_in_b_one_6").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_b_one_6").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_6_onclick() {
  switch(data_in_b_6_state) {
      case "low":
          data_in_b_6_state = "high";
          console.log("data_in_b_6_state = " + data_in_b_6_state);
          document.getElementById("data_in_b_one_6").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_zero_6").style.backgroundColor=white;
          document.getElementById("data_in_b_value_6").innerHTML="1";
          break;
  }
}
function data_in_b_zero_6_onmouseover() {
  switch(data_in_b_6_state) {
      case "low":
          document.getElementById("data_in_b_zero_6").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_6").style.backgroundColor=grey;
          break;
  }
}
function data_in_b_zero_6_onmouseout() {
  switch(data_in_b_6_state) {
      case "low":
          document.getElementById("data_in_b_zero_6").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_6").style.backgroundColor=white;
          break;
  }
}
function data_in_b_zero_6_onclick() {
  switch(data_in_b_6_state) {
      case "high":
          data_in_b_6_state = "low";
          console.log("data_in_b_6_state = " + data_in_b_6_state);
          document.getElementById("data_in_b_one_6").style.backgroundColor=white;
          document.getElementById("data_in_b_zero_6").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_value_6").innerHTML="0";
          break;
  }
}
function data_in_b_one_5_onmouseover() {
  switch(data_in_b_5_state) {
      case "low":
          document.getElementById("data_in_b_one_5").style.backgroundColor=grey;
          break;
      case "high":
          document.getElementById("data_in_b_one_5").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_5_onmouseout() {
  switch(data_in_b_5_state) {
      case "low":
          document.getElementById("data_in_b_one_5").style.backgroundColor=white;
          break;
      case "high":
          document.getElementById("data_in_b_one_5").style.backgroundColor=lightgreen;
          break;
  }
}
function data_in_b_one_5_onclick() {
  switch(data_in_b_5_state) {
      case "low":
          data_in_b_5_state = "high";
          console.log("data_in_b_5_state = " + data_in_b_5_state);
          document.getElementById("data_in_b_one_5").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_zero_5").style.backgroundColor=white;
          document.getElementById("data_in_b_value_5").innerHTML="1";
          break;
  }
}
function data_in_b_zero_5_onmouseover() {
  switch(data_in_b_5_state) {
      case "low":
          document.getElementById("data_in_b_zero_5").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_5").style.backgroundColor=grey;
          break;
  }
}
function data_in_b_zero_5_onmouseout() {
  switch(data_in_b_5_state) {
      case "low":
          document.getElementById("data_in_b_zero_5").style.backgroundColor=lightgreen;
          break;
      case "high":
          document.getElementById("data_in_b_zero_5").style.backgroundColor=white;
          break;
  }
}
function data_in_b_zero_5_onclick() {
  switch(data_in_b_5_state) {
      case "high":
          data_in_b_5_state = "low";
          console.log("data_in_b_5_state = " + data_in_b_5_state);
          document.getElementById("data_in_b_one_5").style.backgroundColor=white;
          document.getElementById("data_in_b_zero_5").style.backgroundColor=lightgreen;
          document.getElementById("data_in_b_value_5").innerHTML="0";
          break;
  }
}
function data_in_b_one_4_onmouseover() {
switch(data_in_b_4_state) {
    case "low":
        document.getElementById("data_in_b_one_4").style.backgroundColor=grey;
        break;
    case "high":
        document.getElementById("data_in_b_one_4").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_4_onmouseout() {
switch(data_in_b_4_state) {
    case "low":
        document.getElementById("data_in_b_one_4").style.backgroundColor=white;
        break;
    case "high":
        document.getElementById("data_in_b_one_4").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_4_onclick() {
switch(data_in_b_4_state) {
    case "low":
        data_in_b_4_state = "high";
        console.log("data_in_b_4_state = " + data_in_b_4_state);
        document.getElementById("data_in_b_one_4").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_zero_4").style.backgroundColor=white;
        document.getElementById("data_in_b_value_4").innerHTML="1";
        break;
}
}
function data_in_b_zero_4_onmouseover() {
switch(data_in_b_4_state) {
    case "low":
        document.getElementById("data_in_b_zero_4").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_4").style.backgroundColor=grey;
        break;
}
}
function data_in_b_zero_4_onmouseout() {
switch(data_in_b_4_state) {
    case "low":
        document.getElementById("data_in_b_zero_4").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_4").style.backgroundColor=white;
        break;
}
}
function data_in_b_zero_4_onclick() {
switch(data_in_b_4_state) {
    case "high":
        data_in_b_4_state = "low";
        console.log("data_in_b_4_state = " + data_in_b_4_state);
        document.getElementById("data_in_b_one_4").style.backgroundColor=white;
        document.getElementById("data_in_b_zero_4").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_value_4").innerHTML="0";
        break;
}
}
function data_in_b_one_3_onmouseover() {
switch(data_in_b_3_state) {
    case "low":
        document.getElementById("data_in_b_one_3").style.backgroundColor=grey;
        break;
    case "high":
        document.getElementById("data_in_b_one_3").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_3_onmouseout() {
switch(data_in_b_3_state) {
    case "low":
        document.getElementById("data_in_b_one_3").style.backgroundColor=white;
        break;
    case "high":
        document.getElementById("data_in_b_one_3").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_3_onclick() {
switch(data_in_b_3_state) {
    case "low":
        data_in_b_3_state = "high";
        console.log("data_in_b_3_state = " + data_in_b_3_state);
        document.getElementById("data_in_b_one_3").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_zero_3").style.backgroundColor=white;
        document.getElementById("data_in_b_value_3").innerHTML="1";
        break;
}
}
function data_in_b_zero_3_onmouseover() {
switch(data_in_b_3_state) {
    case "low":
        document.getElementById("data_in_b_zero_3").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_3").style.backgroundColor=grey;
        break;
}
}
function data_in_b_zero_3_onmouseout() {
switch(data_in_b_3_state) {
    case "low":
        document.getElementById("data_in_b_zero_3").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_3").style.backgroundColor=white;
        break;
}
}
function data_in_b_zero_3_onclick() {
switch(data_in_b_3_state) {
    case "high":
        data_in_b_3_state = "low";
        console.log("data_in_b_3_state = " + data_in_b_3_state);
        document.getElementById("data_in_b_one_3").style.backgroundColor=white;
        document.getElementById("data_in_b_zero_3").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_value_3").innerHTML="0";
        break;
}
}
function data_in_b_one_2_onmouseover() {
switch(data_in_b_2_state) {
    case "low":
        document.getElementById("data_in_b_one_2").style.backgroundColor=grey;
        break;
    case "high":
        document.getElementById("data_in_b_one_2").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_2_onmouseout() {
switch(data_in_b_2_state) {
    case "low":
        document.getElementById("data_in_b_one_2").style.backgroundColor=white;
        break;
    case "high":
        document.getElementById("data_in_b_one_2").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_2_onclick() {
switch(data_in_b_2_state) {
    case "low":
        data_in_b_2_state = "high";
        console.log("data_in_b_2_state = " + data_in_b_2_state);
        document.getElementById("data_in_b_one_2").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_zero_2").style.backgroundColor=white;
        document.getElementById("data_in_b_value_2").innerHTML="1";
        break;
}
}
function data_in_b_zero_2_onmouseover() {
switch(data_in_b_2_state) {
    case "low":
        document.getElementById("data_in_b_zero_2").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_2").style.backgroundColor=grey;
        break;
}
}
function data_in_b_zero_2_onmouseout() {
switch(data_in_b_2_state) {
    case "low":
        document.getElementById("data_in_b_zero_2").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_2").style.backgroundColor=white;
        break;
}
}
function data_in_b_zero_2_onclick() {
switch(data_in_b_2_state) {
    case "high":
        data_in_b_2_state = "low";
        console.log("data_in_b_2_state = " + data_in_b_2_state);
        document.getElementById("data_in_b_one_2").style.backgroundColor=white;
        document.getElementById("data_in_b_zero_2").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_value_2").innerHTML="0";
        break;
}
}
function data_in_b_one_1_onmouseover() {
switch(data_in_b_1_state) {
    case "low":
        document.getElementById("data_in_b_one_1").style.backgroundColor=grey;
        break;
    case "high":
        document.getElementById("data_in_b_one_1").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_1_onmouseout() {
switch(data_in_b_1_state) {
    case "low":
        document.getElementById("data_in_b_one_1").style.backgroundColor=white;
        break;
    case "high":
        document.getElementById("data_in_b_one_1").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_1_onclick() {
switch(data_in_b_1_state) {
    case "low":
        data_in_b_1_state = "high";
        console.log("data_in_b_1_state = " + data_in_b_1_state);
        document.getElementById("data_in_b_one_1").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_zero_1").style.backgroundColor=white;
        document.getElementById("data_in_b_value_1").innerHTML="1";
        break;
}
}
function data_in_b_zero_1_onmouseover() {
switch(data_in_b_1_state) {
    case "low":
        document.getElementById("data_in_b_zero_1").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_1").style.backgroundColor=grey;
        break;
}
}
function data_in_b_zero_1_onmouseout() {
switch(data_in_b_1_state) {
    case "low":
        document.getElementById("data_in_b_zero_1").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_1").style.backgroundColor=white;
        break;
}
}
function data_in_b_zero_1_onclick() {
switch(data_in_b_1_state) {
    case "high":
        data_in_b_1_state = "low";
        console.log("data_in_b_1_state = " + data_in_b_1_state);
        document.getElementById("data_in_b_one_1").style.backgroundColor=white;
        document.getElementById("data_in_b_zero_1").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_value_1").innerHTML="0";
        break;
}
}
function data_in_b_one_0_onmouseover() {
switch(data_in_b_0_state) {
    case "low":
        document.getElementById("data_in_b_one_0").style.backgroundColor=grey;
        break;
    case "high":
        document.getElementById("data_in_b_one_0").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_0_onmouseout() {
switch(data_in_b_0_state) {
    case "low":
        document.getElementById("data_in_b_one_0").style.backgroundColor=white;
        break;
    case "high":
        document.getElementById("data_in_b_one_0").style.backgroundColor=lightgreen;
        break;
}
}
function data_in_b_one_0_onclick() {
switch(data_in_b_0_state) {
    case "low":
        data_in_b_0_state = "high";
        console.log("data_in_b_0_state = " + data_in_b_0_state);
        document.getElementById("data_in_b_one_0").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_zero_0").style.backgroundColor=white;
        document.getElementById("data_in_b_value_0").innerHTML="1";
        break;
}
}
function data_in_b_zero_0_onmouseover() {
switch(data_in_b_0_state) {
    case "low":
        document.getElementById("data_in_b_zero_0").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_0").style.backgroundColor=grey;
        break;
}
}
function data_in_b_zero_0_onmouseout() {
switch(data_in_b_0_state) {
    case "low":
        document.getElementById("data_in_b_zero_0").style.backgroundColor=lightgreen;
        break;
    case "high":
        document.getElementById("data_in_b_zero_0").style.backgroundColor=white;
        break;
}
}
function data_in_b_zero_0_onclick() {
switch(data_in_b_0_state) {
    case "high":
        data_in_b_0_state = "low";
        console.log("data_in_b_0_state = " + data_in_b_0_state);
        document.getElementById("data_in_b_one_0").style.backgroundColor=white;
        document.getElementById("data_in_b_zero_0").style.backgroundColor=lightgreen;
        document.getElementById("data_in_b_value_0").innerHTML="0";
        break;
}
}

// COMPUTE GO --------------------------------------------------------------------------------------------

function compute_go_button_onmouseover() {
    switch(compute_go_state) {
        case "ready":
            document.getElementById("compute_go_button_text").innerHTML="COMPUTE";
            document.getElementById("compute_go_button_push").style.backgroundColor=grey;
            break;
        case "sent":
            document.getElementById("compute_go_button_text").innerHTML="COMPUTE";
            document.getElementById("compute_go_button_push").style.backgroundColor=grey;
            break;
    }
}

function compute_go_button_onmouseout() {
    switch(compute_go_state) {
        case "ready":
            document.getElementById("compute_go_button_text").innerHTML="COMPUTE";
            document.getElementById("compute_go_button_push").style.backgroundColor=lightgreen;
            break;
        case "sent":
            document.getElementById("compute_go_button_text").innerHTML="COMPUTE";
            document.getElementById("compute_go_button_push").style.backgroundColor=lightgreen;
            break;
    }
}

function compute_go_button_onclick() {
    switch(compute_go_state) {
        case "ready":
            compute_go_state = "sent";
            console.log("compute_go_state = " + compute_go_state);
            compute();
            break;
    }
}

function compute() {
    
    console.log("STEP 4 - SEND OPCODE, DATA_IN_A, DATA_IN_B AND GO TO WEB SERVER");
    document.getElementById("data_out_7").innerHTML=" ";
    document.getElementById("data_out_6").innerHTML="W";
    document.getElementById("data_out_5").innerHTML="A";
    document.getElementById("data_out_4").innerHTML="I";
    document.getElementById("data_out_3").innerHTML="T";
    document.getElementById("data_out_2").innerHTML=".";
    document.getElementById("data_out_1").innerHTML=".";
    document.getElementById("data_out_0").innerHTML=".";
    document.getElementById("data_out").classList.add("pulse"); // PULSE DATA_OUT
    document.getElementById("html_interface_arrow_right").classList.add("pulse"); // PULSE ARROW RIGHT
    document.getElementById("grpc_interface_arrow_right").classList.add("pulse");
    document.getElementById("gpio_interface_arrow_right").classList.add("pulse");
    document.getElementById("pmod_interface_arrow_right").classList.add("pulse");
    document.getElementById("html_interface_arrow_left").classList.add("pulse"); // PULSE ARROW LEFT
    document.getElementById("grpc_interface_arrow_left").classList.add("pulse");
    document.getElementById("gpio_interface_arrow_left").classList.add("pulse");
    document.getElementById("pmod_interface_arrow_left").classList.add("pulse");

    // GET OPCODE
    opcode3 = document.getElementById('opcode_value_3').innerHTML;
    opcode2 = document.getElementById('opcode_value_2').innerHTML;
    opcode1 = document.getElementById('opcode_value_1').innerHTML;
    opcode0 = document.getElementById('opcode_value_0').innerHTML;
    opcode = opcode3 + opcode2 + opcode1 + opcode0;
    
    // GET DATA_IN_A 
    data_in_a7 = document.getElementById('data_in_a_value_7').innerHTML;
    data_in_a6 = document.getElementById('data_in_a_value_6').innerHTML;
    data_in_a5 = document.getElementById('data_in_a_value_5').innerHTML;
    data_in_a4 = document.getElementById('data_in_a_value_4').innerHTML;
    data_in_a3 = document.getElementById('data_in_a_value_3').innerHTML;
    data_in_a2 = document.getElementById('data_in_a_value_2').innerHTML;
    data_in_a1 = document.getElementById('data_in_a_value_1').innerHTML;
    data_in_a0 = document.getElementById('data_in_a_value_0').innerHTML;
    data_in_a = data_in_a7 + data_in_a6 + data_in_a5 + data_in_a4 + data_in_a3 + data_in_a2 + data_in_a1 + data_in_a0;

    // GET DATA_IN_B
    data_in_b7 = document.getElementById('data_in_b_value_7').innerHTML;
    data_in_b6 = document.getElementById('data_in_b_value_6').innerHTML;
    data_in_b5 = document.getElementById('data_in_b_value_5').innerHTML;
    data_in_b4 = document.getElementById('data_in_b_value_4').innerHTML;
    data_in_b3 = document.getElementById('data_in_b_value_3').innerHTML;
    data_in_b2 = document.getElementById('data_in_b_value_2').innerHTML;
    data_in_b1 = document.getElementById('data_in_b_value_1').innerHTML;
    data_in_b0 = document.getElementById('data_in_b_value_0').innerHTML;
    data_in_b = data_in_b7 + data_in_b6 + data_in_b5 + data_in_b4 + data_in_b3 + data_in_b2 + data_in_b1 + data_in_b0;
    
    // GET GO
    go = "1"

    // CONSOLE MESSAGE
    console.log("opcode = " + opcode);
    console.log("data_in_a = " + data_in_a);
    console.log("data_in_b = " + data_in_b);
    console.log("go = " + go);

    // SEND ATTRIBUTES TO SERVER
    // "POST"/SEND DATA TO SERVER - RUN PHP FILE ON SERVER - GET RESPONSE
    send_data_to_web_server(opcode, data_in_a, data_in_b, go);

}

// DATA_OUT FROM WEB SERVER -----------------------------------------------------------------------------------------

function show_data_out(data) {

    console.log("SHOW DATA_OUT FROM FPGA");
    console.log("data = " + data.data_out);
    document.getElementById("data_out").classList.remove("pulse"); // PULSE DATA_OUT OFF
    document.getElementById("html_interface_arrow_right").classList.remove("pulse"); // PULSE ARROW RIGHT OFF
    document.getElementById("grpc_interface_arrow_right").classList.remove("pulse");
    document.getElementById("gpio_interface_arrow_right").classList.remove("pulse");
    document.getElementById("pmod_interface_arrow_right").classList.remove("pulse");
    document.getElementById("html_interface_arrow_left").classList.remove("pulse"); // PULSE ARROW LEFT OFF
    document.getElementById("grpc_interface_arrow_left").classList.remove("pulse");
    document.getElementById("gpio_interface_arrow_left").classList.remove("pulse");
    document.getElementById("pmod_interface_arrow_left").classList.remove("pulse");

    // SHOW DATA (DO THIS IN REVERSE)
    document.getElementById("data_out_7").innerHTML=data.data_out[0];
    document.getElementById("data_out_6").innerHTML=data.data_out[1];
    document.getElementById("data_out_5").innerHTML=data.data_out[2];
    document.getElementById("data_out_4").innerHTML=data.data_out[3];
    document.getElementById("data_out_3").innerHTML=data.data_out[4];
    document.getElementById("data_out_2").innerHTML=data.data_out[5];
    document.getElementById("data_out_1").innerHTML=data.data_out[6];
    document.getElementById("data_out_0").innerHTML=data.data_out[7];
    document.getElementById("data_out_7").style.backgroundColor=white;
    document.getElementById("data_out_6").style.backgroundColor=white;
    document.getElementById("data_out_5").style.backgroundColor=white;
    document.getElementById("data_out_4").style.backgroundColor=white;
    document.getElementById("data_out_3").style.backgroundColor=white;
    document.getElementById("data_out_2").style.backgroundColor=white;
    document.getElementById("data_out_1").style.backgroundColor=white;
    document.getElementById("data_out_0").style.backgroundColor=white;

    // CHANGE BACK STATE
    compute_go_state = "ready";
    console.log("compute_go_state = " + compute_go_state);
    
}

// SERVER ERROR -------------------------------------------------------------------------------------------------------

function server_error() {

    console.log("SERVER ERROR");
    document.getElementById("data_out").classList.remove("pulse"); // PULSE DATA_OUT OFF
    document.getElementById("html_interface_arrow_right").classList.remove("pulse"); // PULSE ARROW RIGHT OFF
    document.getElementById("grpc_interface_arrow_right").classList.remove("pulse");
    document.getElementById("gpio_interface_arrow_right").classList.remove("pulse");
    document.getElementById("pmod_interface_arrow_right").classList.remove("pulse");
    document.getElementById("html_interface_arrow_left").classList.remove("pulse"); // PULSE ARROW LEFT OFF
    document.getElementById("grpc_interface_arrow_left").classList.remove("pulse");
    document.getElementById("gpio_interface_arrow_left").classList.remove("pulse");
    document.getElementById("pmod_interface_arrow_left").classList.remove("pulse");

    document.getElementById("data_out_7").innerHTML=" ";
    document.getElementById("data_out_6").innerHTML="E";
    document.getElementById("data_out_5").innerHTML="R";
    document.getElementById("data_out_4").innerHTML="R";
    document.getElementById("data_out_3").innerHTML="O";
    document.getElementById("data_out_2").innerHTML="R";
    document.getElementById("data_out_1").innerHTML=" ";
    document.getElementById("data_out_0").innerHTML=" ";
    document.getElementById("data_out_7").style.backgroundColor=red;
    document.getElementById("data_out_6").style.backgroundColor=red;
    document.getElementById("data_out_5").style.backgroundColor=red;
    document.getElementById("data_out_4").style.backgroundColor=red;
    document.getElementById("data_out_3").style.backgroundColor=red;
    document.getElementById("data_out_2").style.backgroundColor=red;
    document.getElementById("data_out_1").style.backgroundColor=red;
    document.getElementById("data_out_0").style.backgroundColor=red;
    document.getElementById("compute_go_button_push").style.color=black;

    // CHANGE BACK STATE
    compute_go_state = "ready";
    console.log("compute_go_state = " + compute_go_state);

}