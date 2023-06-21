<?php

    // post_data_to_server.php

    // From the user sending data to this server
    // Response will be in json format
    // The javascript reads this every few seconds.

    // GET THE JSON DATA FROM THE USER
    header("Content-Type: application/json");
    $attributesJSON = json_decode(file_get_contents("php://input"));

    // UN PARSE IT
    $opcode = $attributesJSON->opcode;
    $data_in_a = $attributesJSON->data_in_a;
    $data_in_b = $attributesJSON->data_in_b;
    $go = $attributesJSON->go;

    // DO SOMETHING
    $data_out = "10101011";
    sleep(5);

    // BUILD ARRAY
    $array = [
      'data_out'=>$data_out,
    ];

    // SEND IT TO THE BROWSER
    echo json_encode($array);

?>
