<!-- try-it -->

<link rel="stylesheet" type="text/css" href="css/try-it.css">
<link rel="stylesheet" type="text/css" href="css/browser_body.css">
<script type="text/javascript" src="js/opcode.js"></script>
<script type="text/javascript" src="js/ajax_xhr_call_post.js"></script>

<div id="try_it_wrapper">

    <!-- ------------------------------------------------------------------------------------------------------- -->
    <div id="try_it_container"  class = "box_container">
        <div class = "box_items_container">
            
            <!-- LABELS ***************************************************************************************- -->
            <div id ="label_item" class = "box_item">
                <div id="label_opcode_choices" class="label_name">
                    ADD 0011 <br />
                    SUBTRACT 0011 <br />
                    DIVIDE 0110 <br />     
                    MULTIPLY 1100
                </div>
                <div id="label_opcode_name" class="label_name">
                    OPCODE
                </div>
                <div id="label_data_in_a_name" class="label_name">
                    DATA_IN_A
                </div>
                <div div id="label_data_in_b_name" class="label_name">
                    DATA_IN_B
                </div>
                <div div id="label_data_out_name" class="label_name">
                    DATA_OUT
                </div> 
            </div>

            <!-- BROWSER **************************************************************************************- -->
            <div id ="browser_item" class = "section_item box_item">
                <div class="section_section">
                    BROWSER
                </div>
                <div id ="browser_device" class="section_device">
                    CHROME
                </div>
                <div id="browser_body" class="section_body">

                    <div id="opcode" class="binary_4_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="opcode_one_3" class="binary_one_switch" onmouseover="opcode_one_3_onmouseover()" onmouseout="opcode_one_3_onmouseout()" onclick="opcode_one_3_onclick()"> </div>
                            <div id="opcode_one_2" class="binary_one_switch" onmouseover="opcode_one_2_onmouseover()" onmouseout="opcode_one_2_onmouseout()" onclick="opcode_one_2_onclick()"> </div>
                            <div id="opcode_one_1" class="binary_one_switch" onmouseover="opcode_one_1_onmouseover()" onmouseout="opcode_one_1_onmouseout()" onclick="opcode_one_1_onclick()"> </div>
                            <div id="opcode_one_0" class="binary_one_switch" onmouseover="opcode_one_0_onmouseover()" onmouseout="opcode_one_0_onmouseout()" onclick="opcode_one_0_onclick()"> </div>
                        </div>
                        <div class="binary_values_container">
                            <div id="opcode_value_3" class="binary_value">0</div>
                            <div id="opcode_value_2" class="binary_value">0</div>
                            <div id="opcode_value_1" class="binary_value">1</div>
                            <div id="opcode_value_0" class="binary_value">1</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="opcode_zero_3" class="binary_zero_switch" onmouseover="opcode_zero_3_onmouseover()" onmouseout="opcode_zero_3_onmouseout()" onclick="opcode_zero_3_onclick()"> </div>
                            <div id="opcode_zero_2" class="binary_zero_switch" onmouseover="opcode_zero_2_onmouseover()" onmouseout="opcode_zero_2_onmouseout()" onclick="opcode_zero_2_onclick()"> </div>
                            <div id="opcode_zero_1" class="binary_zero_switch" onmouseover="opcode_zero_1_onmouseover()" onmouseout="opcode_zero_1_onmouseout()" onclick="opcode_zero_1_onclick()"> </div>
                            <div id="opcode_zero_0" class="binary_zero_switch" onmouseover="opcode_zero_0_onmouseover()" onmouseout="opcode_zero_0_onmouseout()" onclick="opcode_zero_0_onclick()"> </div>
                        </div>
                    </div>

                    <div id="data_in_a" class="binary_8_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="data_in_a_one_7" class="binary_one_switch" onmouseover="data_in_a_one_7_onmouseover()" onmouseout="data_in_a_one_7_onmouseout()" onclick="data_in_a_one_7_onclick()"> </div>
                            <div id="data_in_a_one_6" class="binary_one_switch" onmouseover="data_in_a_one_6_onmouseover()" onmouseout="data_in_a_one_6_onmouseout()" onclick="data_in_a_one_6_onclick()"> </div>
                            <div id="data_in_a_one_5" class="binary_one_switch" onmouseover="data_in_a_one_5_onmouseover()" onmouseout="data_in_a_one_5_onmouseout()" onclick="data_in_a_one_5_onclick()"> </div>
                            <div id="data_in_a_one_4" class="binary_one_switch" onmouseover="data_in_a_one_4_onmouseover()" onmouseout="data_in_a_one_4_onmouseout()" onclick="data_in_a_one_4_onclick()"> </div>
                            <div id="data_in_a_one_3" class="binary_one_switch" onmouseover="data_in_a_one_3_onmouseover()" onmouseout="data_in_a_one_3_onmouseout()" onclick="data_in_a_one_3_onclick()"> </div>
                            <div id="data_in_a_one_2" class="binary_one_switch" onmouseover="data_in_a_one_2_onmouseover()" onmouseout="data_in_a_one_2_onmouseout()" onclick="data_in_a_one_2_onclick()"> </div>
                            <div id="data_in_a_one_1" class="binary_one_switch" onmouseover="data_in_a_one_1_onmouseover()" onmouseout="data_in_a_one_1_onmouseout()" onclick="data_in_a_one_1_onclick()"> </div>
                            <div id="data_in_a_one_0" class="binary_one_switch" onmouseover="data_in_a_one_0_onmouseover()" onmouseout="data_in_a_one_0_onmouseout()" onclick="data_in_a_one_0_onclick()"> </div>
                        </div>
                        <div class="binary_values_container">
                            <div id="data_in_a_value_7" class="binary_value">1</div>
                            <div id="data_in_a_value_6" class="binary_value">0</div>
                            <div id="data_in_a_value_5" class="binary_value">0</div>
                            <div id="data_in_a_value_4" class="binary_value">0</div>
                            <div id="data_in_a_value_3" class="binary_value">0</div>
                            <div id="data_in_a_value_2" class="binary_value">0</div>
                            <div id="data_in_a_value_1" class="binary_value">1</div>
                            <div id="data_in_a_value_0" class="binary_value">1</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="data_in_a_zero_7" class="binary_zero_switch" onmouseover="data_in_a_zero_7_onmouseover()" onmouseout="data_in_a_zero_7_onmouseout()" onclick="data_in_a_zero_7_onclick()"> </div>
                            <div id="data_in_a_zero_6" class="binary_zero_switch" onmouseover="data_in_a_zero_6_onmouseover()" onmouseout="data_in_a_zero_6_onmouseout()" onclick="data_in_a_zero_6_onclick()"> </div>
                            <div id="data_in_a_zero_5" class="binary_zero_switch" onmouseover="data_in_a_zero_5_onmouseover()" onmouseout="data_in_a_zero_5_onmouseout()" onclick="data_in_a_zero_5_onclick()"> </div>
                            <div id="data_in_a_zero_4" class="binary_zero_switch" onmouseover="data_in_a_zero_4_onmouseover()" onmouseout="data_in_a_zero_4_onmouseout()" onclick="data_in_a_zero_4_onclick()"> </div>
                            <div id="data_in_a_zero_3" class="binary_zero_switch" onmouseover="data_in_a_zero_3_onmouseover()" onmouseout="data_in_a_zero_3_onmouseout()" onclick="data_in_a_zero_3_onclick()"> </div>
                            <div id="data_in_a_zero_2" class="binary_zero_switch" onmouseover="data_in_a_zero_2_onmouseover()" onmouseout="data_in_a_zero_2_onmouseout()" onclick="data_in_a_zero_2_onclick()"> </div>
                            <div id="data_in_a_zero_1" class="binary_zero_switch" onmouseover="data_in_a_zero_1_onmouseover()" onmouseout="data_in_a_zero_1_onmouseout()" onclick="data_in_a_zero_1_onclick()"> </div>
                            <div id="data_in_a_zero_0" class="binary_zero_switch" onmouseover="data_in_a_zero_0_onmouseover()" onmouseout="data_in_a_zero_0_onmouseout()" onclick="data_in_a_zero_0_onclick()"> </div>
                        </div>
                    </div>

                    <div id="data_in_b" class="binary_8_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="data_in_b_one_7" class="binary_one_switch" onmouseover="data_in_b_one_7_onmouseover()" onmouseout="data_in_b_one_7_onmouseout()" onclick="data_in_b_one_7_onclick()"> </div>
                            <div id="data_in_b_one_6" class="binary_one_switch" onmouseover="data_in_b_one_6_onmouseover()" onmouseout="data_in_b_one_6_onmouseout()" onclick="data_in_b_one_6_onclick()"> </div>
                            <div id="data_in_b_one_5" class="binary_one_switch" onmouseover="data_in_b_one_5_onmouseover()" onmouseout="data_in_b_one_5_onmouseout()" onclick="data_in_b_one_5_onclick()"> </div>
                            <div id="data_in_b_one_4" class="binary_one_switch" onmouseover="data_in_b_one_4_onmouseover()" onmouseout="data_in_b_one_4_onmouseout()" onclick="data_in_b_one_4_onclick()"> </div>
                            <div id="data_in_b_one_3" class="binary_one_switch" onmouseover="data_in_b_one_3_onmouseover()" onmouseout="data_in_b_one_3_onmouseout()" onclick="data_in_b_one_3_onclick()"> </div>
                            <div id="data_in_b_one_2" class="binary_one_switch" onmouseover="data_in_b_one_2_onmouseover()" onmouseout="data_in_b_one_2_onmouseout()" onclick="data_in_b_one_2_onclick()"> </div>
                            <div id="data_in_b_one_1" class="binary_one_switch" onmouseover="data_in_b_one_1_onmouseover()" onmouseout="data_in_b_one_1_onmouseout()" onclick="data_in_b_one_1_onclick()"> </div>
                            <div id="data_in_b_one_0" class="binary_one_switch" onmouseover="data_in_b_one_0_onmouseover()" onmouseout="data_in_b_one_0_onmouseout()" onclick="data_in_b_one_0_onclick()"> </div>
                        </div>
                        <div class="binary_values_container">
                            <div id="data_in_b_value_7" class="binary_value">0</div>
                            <div id="data_in_b_value_6" class="binary_value">0</div>
                            <div id="data_in_b_value_5" class="binary_value">1</div>
                            <div id="data_in_b_value_4" class="binary_value">0</div>
                            <div id="data_in_b_value_3" class="binary_value">1</div>
                            <div id="data_in_b_value_2" class="binary_value">0</div>
                            <div id="data_in_b_value_1" class="binary_value">0</div>
                            <div id="data_in_b_value_0" class="binary_value">0</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="data_in_b_zero_7" class="binary_zero_switch" onmouseover="data_in_b_zero_7_onmouseover()" onmouseout="data_in_b_zero_7_onmouseout()" onclick="data_in_b_zero_7_onclick()"> </div>
                            <div id="data_in_b_zero_6" class="binary_zero_switch" onmouseover="data_in_b_zero_6_onmouseover()" onmouseout="data_in_b_zero_6_onmouseout()" onclick="data_in_b_zero_6_onclick()"> </div>
                            <div id="data_in_b_zero_5" class="binary_zero_switch" onmouseover="data_in_b_zero_5_onmouseover()" onmouseout="data_in_b_zero_5_onmouseout()" onclick="data_in_b_zero_5_onclick()"> </div>
                            <div id="data_in_b_zero_4" class="binary_zero_switch" onmouseover="data_in_b_zero_4_onmouseover()" onmouseout="data_in_b_zero_4_onmouseout()" onclick="data_in_b_zero_4_onclick()"> </div>
                            <div id="data_in_b_zero_3" class="binary_zero_switch" onmouseover="data_in_b_zero_3_onmouseover()" onmouseout="data_in_b_zero_3_onmouseout()" onclick="data_in_b_zero_3_onclick()"> </div>
                            <div id="data_in_b_zero_2" class="binary_zero_switch" onmouseover="data_in_b_zero_2_onmouseover()" onmouseout="data_in_b_zero_2_onmouseout()" onclick="data_in_b_zero_2_onclick()"> </div>
                            <div id="data_in_b_zero_1" class="binary_zero_switch" onmouseover="data_in_b_zero_1_onmouseover()" onmouseout="data_in_b_zero_1_onmouseout()" onclick="data_in_b_zero_1_onclick()"> </div>
                            <div id="data_in_b_zero_0" class="binary_zero_switch" onmouseover="data_in_b_zero_0_onmouseover()" onmouseout="data_in_b_zero_0_onmouseout()" onclick="data_in_b_zero_0_onclick()"> </div>
                        </div>
                    </div>

                    <div id="compute_go_button_item" class="button_item box_item">
                        <div id="compute_go_button_push" class="button_push"
                            onmouseover="compute_go_button_onmouseover()"
                            onmouseout="compute_go_button_onmouseout()"
                            onclick="compute_go_button_onclick()">
                            <div id="compute_go_button_text" class="button_push_text">
                                COMPUTE
                            </div>
                        </div> 
                    </div>

                    <div id="data_out" class="binary_8_bit_display">
                        <div class="binary_display_container">
                            <div id="data_out_7" class="binary_display"></div>
                            <div id="data_out_6" class="binary_display"></div>
                            <div id="data_out_5" class="binary_display"></div>
                            <div id="data_out_4" class="binary_display"></div>
                            <div id="data_out_3" class="binary_display"></div>
                            <div id="data_out_2" class="binary_display"></div>
                            <div id="data_out_1" class="binary_display"></div>
                            <div id="data_out_0" class="binary_display"></div>
                        </div>
                    </div>

                </div>
                <div class="section_footer">
                    HTML/CSS/JS
                </div>
            </div>

            <!-- HTML INTERFACE *******************************************************************************- -->
            <div id="html_interface_item" class = "interface_item box_item">
                <div class="interface_title">
                    HTML
                </div>
                <div id="html_interface_arrow_right" class="interface_arrow_right">
                    <div id="html_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="html_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div id="html_interface_arrow_left" class="interface_arrow_left">
                    <div id="html_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="html_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- WEB SERVER ***********************************************************************************- -->
            <div id ="web_server_item" class = "section_item box_item">
                <div class="section_section">
                    WEB SERVER
                </div>
                <div class="section_device">
                    BLUEHOST      
                </div>
                <div id="web_server_body" class="section_body">
                    <div id="web_server_picture">
                        <img src="images/bluehost.png" alt="bluehost"/>
                    </div>
                </div>
                <div class="section_footer">
                    PHP/CSS/JS
                </div>
            </div>

            <!-- gRPC INTERFACE *******************************************************************************- -->
            <div id="grpc_interface_item" class = "interface_item box_item">
                <div class="interface_title">
                    gRPC
                </div>
                <div id="grpc_interface_arrow_right" class="interface_arrow_right">
                    <div id="grpc_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="grpc_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div id="grpc_interface_arrow_left" class="interface_arrow_left">
                    <div id="grpc_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="grpc_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- BACKEND SERVER *******************************************************************************- -->
            <div id ="backend_server_item" class = "section_item box_item">
                <div class="section_section">
                    BACKEND SERVER
                </div>
                <div class="section_device">
                    RASPBERRY PI 4B
                </div>
                <div id="backend_server_body" class="section_body">
                    <div id="backend_server_picture">
                        <img src="images/Raspberry_Pi_4_Model_B_-_Top.png" alt="Raspberry_Pi_4_Model_B_-_Top"/>
                    </div>
                </div>
                <div class="section_footer">
                    GO
                </div>
            </div>

            <!-- GPIO INTERFACE *******************************************************************************- -->
            <div id="gpio_interface_item" class = "interface_item box_item">
                <div class="interface_title">
                    GPIO
                </div>
                <div id="gpio_interface_arrow_right" class="interface_arrow_right">
                    <div id="gpio_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="gpio_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div id="gpio_interface_arrow_left" class="interface_arrow_left">
                    <div id="gpio_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="gpio_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- BREADBOARD ***********************************************************************************- -->
            <div id ="breadboard_item" class = "section_item box_item">
                <div class="section_section">
                    BREADBOARD
                </div>
                <div class="section_device">
                    INTERCONNECTIONS
                </div>
                <div id="breadboard_body" class="section_body">
                    <div id="breadboard_picture">
                        <img src="images/breadboard.png" alt="breadboard"/>
                    </div>
                </div>
                <div class="section_footer">
                    WIRES/RESISTORS
                </div>
            </div>

            <!-- PMOD INTERFACE *******************************************************************************- -->
            <div id="pmod_interface_item" class = "interface_item box_item">
                <div class="interface_title">
                    PMOD
                </div>
                <div id="pmod_interface_arrow_right" class="interface_arrow_right">
                    <div id="pmod_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="pmod_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div id="pmod_interface_arrow_left" class="interface_arrow_left">
                    <div id="pmod_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="pmod_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- FPGA DEV BOARD *******************************************************************************- -->
            <div id ="fpga_dev_board_item" class = "section_item box_item">
                <div class="section_section">
                    FPGA DEV BOARD
                </div>
                <div class="section_device">
                    ARTY S7-50
                    <br />
                    (SPARTAN FPGA)
                </div>
                <div id="fpga_dev_board_body" class="section_body">
                    <div id="fpga_dev_board_picture">
                        <img src="images/arty-s7-1.png" alt="arty-s7-1"/>
                    </div>
                </div>
                <div class="section_footer">
                    VERILOG
                </div>
            </div>

        </div>
    </div>

    <!-- ------------------------------------------------------------------------------------------------------- -->
    <div class="comment_container">

        <h3> THIS IS WHAT YOU ARE CONTROLLING </h3>

    </div>

    <!-- ------------------------------------------------------------------------------------------------------- -->
    <div class="picture_container_2">

        <img src="images/arty-s7-breadboard-and-raspberry-pi.jpg" alt="arty-s7-breadboard-and-raspberry-pi"/>

    </div>

</div>

