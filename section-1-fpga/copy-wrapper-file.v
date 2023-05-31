`include "\\wsl$\Ubuntu-20.04\home\jeff\verilog\my-verilog-examples\systems\microprocessors\programable_8_bit_microprocessor\programable_8_bit_microprocessor.vh"

module PROGRAMABLE_8_BIT_MICROPROCESSOR_WRAPPER(
    input           CLK100MHZ,          //
    input  [3:0]    OPCODE,             //
    input  [7:0]    DATA_IN_A,          // 
    input  [7:0]    DATA_IN_B,          // 
    input           GO,                 // 
    input           RESET,              // 
    input           JAM,                // 
    input           SYSTEM_CLK,         //
    output [7:0]    DATA_OUT);          // 

    // DATA TYPES - DECLARE REGISTERS AND WIRES (PROBES)
    wire  [23:0]    MW;
    wire  [7:0]     MICROADDRESS;
    wire            GO_BAR;
    
    assign GO_BAR = ~GO;

    //PROCESSOR
    programable_8_bit_microprocessor PROCESSOR (
        .OPCODE(OPCODE),
        .DATA_IN_A(DATA_IN_A),
        .DATA_IN_B(DATA_IN_B),
        .GO_BAR(GO_BAR),
        .RESET(RESET),
        .JAM(JAM),
        .SYSTEM_CLK(CLK100MHZ),
        .MW(MW),
        .MICROADDRESS(MICROADDRESS),
        .DATA_OUT(DATA_OUT)
    );

    // CONTROL_STORE
    control_store CONTROL_STORE (
        .microaddress(MICROADDRESS),
        .microword(MW)
    );
    
endmodule