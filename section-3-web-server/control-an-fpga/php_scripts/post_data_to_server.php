<?php

    // post_data_to_server.php

    // From the user sending data to this server
    // Response will be in json format
    // The javascript reads this every few seconds.

    // OPEN FILE TO WRITE TO - FOR TESTING
    $myfile = fopen("testfile.txt", "w")
    or die("Unable to open file!");

    // GET THE JSON DATA FROM THE USER
    header("Content-Type: application/json");
    $attributesJSON = json_decode(file_get_contents("php://input"));

    // UN PARSE IT
    $opcode = $attributesJSON->opcode;
    $data_in_a = $attributesJSON->data_in_a;
    $data_in_b = $attributesJSON->data_in_b;
    $go = $attributesJSON->go;

    // WRITE TO A FILE
    $txt = "opcode: " . $opcode . "\n";
    fwrite($myfile, $txt);
    $txt = "data_in_a: " . $data_in_a . "\n";
    fwrite($myfile, $txt);
    $txt = "data_in_b: " . $data_in_b . "\n";
    fwrite($myfile, $txt);
    $txt = "go: " . $go . "\n";
    fwrite($myfile, $txt);
    
    // DO SOMETHING - THIS IS WHERE YOU WOULD SEND DATA TO THE FPGA
    $data_out = $data_in_b;
    sleep(5);

    // BUILD ARRAY
    $array = [
      'data_out'=>$data_out,
    ];

    // SEND RESPONSE BACK TO THE BROWSER
    echo json_encode($array);

    // CLOSE FILE
    fclose($myfile);

?>
