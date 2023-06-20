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
                    SECTION IV
                </div>
                <div id ="browser_device" class="section_device">
                    BROWSER
                </div>
                <div id="browser_body" class="section_body">

                    <div id="opcode" class="binary_4_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="opcode_one_3" class="binary_one_switch"></div>
                            <div id="opcode_one_2" class="binary_one_switch"></div>
                            <div id="opcode_one_1" class="binary_one_switch"></div>
                            <div id="opcode_one_0" class="binary_one_switch"></div>
                        </div>
                        <div class="binary_values_container">
                            <div id="opcode_value_3" class="binary_value">1</div>
                            <div id="opcode_value_2" class="binary_value">0</div>
                            <div id="opcode_value_1" class="binary_value">1</div>
                            <div id="opcode_value_0" class="binary_value">1</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="opcode_zero_3" class="binary_zero_switch"></div>
                            <div id="opcode_zero_2" class="binary_zero_switch"></div>
                            <div id="opcode_zero_1" class="binary_zero_switch"></div>
                            <div id="opcode_zero_0" class="binary_zero_switch"></div>
                        </div>
                    </div>

                    <div id="data_in_a" class="binary_8_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="data_in_a_one_7" class="binary_one_switch"></div>
                            <div id="data_in_a_one_6" class="binary_one_switch"></div>
                            <div id="data_in_a_one_5" class="binary_one_switch"></div>
                            <div id="data_in_a_one_4" class="binary_one_switch"></div>
                            <div id="data_in_a_one_3" class="binary_one_switch"></div>
                            <div id="data_in_a_one_2" class="binary_one_switch"></div>
                            <div id="data_in_a_one_1" class="binary_one_switch"></div>
                            <div id="data_in_a_one_0" class="binary_one_switch"></div>
                        </div>
                        <div class="binary_values_container">
                            <div id="data_in_a_value_7" class="binary_value">0</div>
                            <div id="data_in_a_value_6" class="binary_value">0</div>
                            <div id="data_in_a_value_5" class="binary_value">0</div>
                            <div id="data_in_a_value_4" class="binary_value">0</div>
                            <div id="data_in_a_value_3" class="binary_value">1</div>
                            <div id="data_in_a_value_2" class="binary_value">0</div>
                            <div id="data_in_a_value_1" class="binary_value">1</div>
                            <div id="data_in_a_value_0" class="binary_value">1</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="data_in_a_zero_7" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_6" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_5" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_4" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_3" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_2" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_1" class="binary_zero_switch"></div>
                            <div id="data_in_a_zero_0" class="binary_zero_switch"></div>
                        </div>
                    </div>

                    <div id="data_in_b" class="binary_8_bit_switch">
                        <div class="binary_one_switches_container">
                            <div id="data_in_b_one_7" class="binary_one_switch"></div>
                            <div id="data_in_b_one_6" class="binary_one_switch"></div>
                            <div id="data_in_b_one_5" class="binary_one_switch"></div>
                            <div id="data_in_b_one_4" class="binary_one_switch"></div>
                            <div id="data_in_b_one_3" class="binary_one_switch"></div>
                            <div id="data_in_b_one_2" class="binary_one_switch"></div>
                            <div id="data_in_b_one_1" class="binary_one_switch"></div>
                            <div id="data_in_b_one_0" class="binary_one_switch"></div>
                        </div>
                        <div class="binary_values_container">
                            <div id="data_in_b_value_7" class="binary_value">0</div>
                            <div id="data_in_b_value_6" class="binary_value">0</div>
                            <div id="data_in_b_value_5" class="binary_value">1</div>
                            <div id="data_in_b_value_4" class="binary_value">1</div>
                            <div id="data_in_b_value_3" class="binary_value">1</div>
                            <div id="data_in_b_value_2" class="binary_value">0</div>
                            <div id="data_in_b_value_1" class="binary_value">1</div>
                            <div id="data_in_b_value_0" class="binary_value">1</div>
                        </div>
                        <div class="binary_zero_switches_container">
                            <div id="data_in_b_zero_7" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_6" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_5" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_4" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_3" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_2" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_1" class="binary_zero_switch"></div>
                            <div id="data_in_b_zero_0" class="binary_zero_switch"></div>
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
                <div class="interface_arrow_right">
                    <div id="html_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="html_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div class="interface_arrow_left">
                    <div id="html_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="html_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- WEB SERVER ***********************************************************************************- -->
            <div id ="web_server_item" class = "section_item box_item">
                <div class="section_section">
                    SECTION III
                </div>
                <div class="section_device">
                    WEB SERVER
                    <br />
                    (Bluehost)                    
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
                <div class="interface_arrow_right">
                    <div id="grpc_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="grpc_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div class="interface_arrow_left">
                    <div id="grpc_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="grpc_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- BACKEND SERVER *******************************************************************************- -->
            <div id ="backend_server_item" class = "section_item box_item">
                <div class="section_section">
                    SECTION II
                </div>
                <div class="section_device">
                    BACKEND SERVER
                    <br />
                    (Raspberry Pi 4B)       
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
                <div class="interface_arrow_right">
                    <div id="gpio_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="gpio_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div class="interface_arrow_left">
                    <div id="gpio_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="gpio_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- BREADBOARD ***********************************************************************************- -->
            <div id ="breadboard_item" class = "section_item box_item">
                <div class="section_section">
                    SECTION II
                </div>
                <div class="section_device">
                    BREADBOARD            
                    <br />
                    (Interconnections)    
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
                <div class="interface_arrow_right">
                    <div id="pmod_interface_arrow_right_line" class="interface_arrow_right_line"></div>
                    <div id="pmod_interface_arrow_right_point" class="interface_arrow_right_point"></div>
                </div>
                <div class="interface_arrow_left">
                    <div id="pmod_interface_arrow_left_line" class="interface_arrow_left_line"></div>
                    <div id="pmod_interface_arrow_left_point" class="interface_arrow_left_point"></div>
                </div>
            </div>

            <!-- FPGA DEV BOARD *******************************************************************************- -->
            <div id ="fpga_dev_board_item" class = "section_item box_item">
                <div class="section_section">
                    SECTION I
                </div>
                <div class="section_device">
                    FPGA DEV BOARD
                    <br />
                    (Arty S7-50)
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

