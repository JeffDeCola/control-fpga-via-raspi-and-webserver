// ajax_xhr_calls_post.js
// SEND POST REQUEST USING XMLHttpRequest (XHR)
// There are other methods to use ajax, we are using XHR Calls

var url = 'php_scripts/post_data_to_server.php';

console.log("STARTING ajax_xhr_calls_post.js JAVASCRIPT");

// -----------------------------------------------------------------------------------------------------------------------
// SEND DATA TO WEB SERVER
function send_data_to_web_server(opcode, data_in_a, data_in_b, go) {

    // CREATE A NEW REQUEST
    postRequest = new XMLHttpRequest();
        if (!postRequest) {
        console.warn("Giving up :( Cannot create an XMLHTTP instance");
    }
    
    // CONVERT JSON TO STRING
    var attributesJSONString = JSON.stringify({
        "opcode": opcode,
        "data_in_a": data_in_a,
        "data_in_a": data_in_b,
        "go": go
    });

    // OPEN CONNECTION - CREATE POST REQUEST
    // true means DON'T BLOCK
    postRequest.open('POST', url, true);

    // SEND JSON FORMAT
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(attributesJSONString);


    // LISTEN AND KICK OFF FUNCTION WHEN READY
    postRequest.onreadystatechange = function() {

        // CHECK IF IT'S DONE
        try {
            if (postRequest.readyState === XMLHttpRequest.DONE) {

                if (postRequest.status === 200) {

                    // THE MAGIC HAPPENS HERE *******************************************
                    // RECEIVE JSON FORMAT
                    data_out_from_web_server = JSON.parse(postRequest.responseText);
                    show_data_out(data_out_from_web_server);

                } else {
                    console.warn("There was an issue getting data to the server");
                    server_error();
                }
            }
        }
        // WHEN THE SERVER IS DOWN
        catch( e ) {
            console.warn("There was an issue getting data to the server: Caught Server Exception:" + e.description);
            server_error();
        }

    }
}
