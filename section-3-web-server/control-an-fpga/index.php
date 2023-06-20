<?php
    session_start();
?>

<!DOCTYPE html>

<html>

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    /<!-- THE PAGE TITLE -->
    <title> CONTAINERS - Jeff DeCola </title>
    <meta name='Description' content='CONTAINERS - Jeff DeCola' />
           
    <!-- TAGS FOR GOOGLE, YAHOO, BING, AND ALEXA, IN THAT ORDER -->
    <!-- <meta name="y_key" content="????" > -->
    <!-- <meta name="msvalidate.01" content="????" > -->
    <!-- <meta name="alexaVerifyID" content="??" > -->
    <!-- <meta name="google-site-verification" content="??" > -->

    <!-- THE PAGE ICON -->
    <link rel="icon" type="image/ico" href="images/page_icon/favicon.ico"/>

    <!-- LINK TO THE STYLE SHEETS - FORCE UPDATE WITH DATE-->
    <link rel="stylesheet" type="text/css" href="../css/reset.css?v=<?php echo date('his'); ?>"/>
    <link rel="stylesheet" type="text/css" href="../css/template.css?v=<?php echo date('his'); ?>"/>
    <link rel="stylesheet" type="text/css" href="../css/wrappers.css?v=<?php echo date('his'); ?>"/>
    <link rel="stylesheet" type="text/css" href="../css/containers.css?v=<?php echo date('his'); ?>"/>
    <link rel="stylesheet" type="text/css" href="css/containers.css?v=<?php echo date('his'); ?>"/>

    <!-- GOOGLE FONT -->
    <!-- Make sure to update Body tag in template.css with the font name -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Domine"/>

    <!-- JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="../jqs/custom.js"></script>
    <script type="text/javascript" src="../jqs/js.cookie.js"></script>
    
    <!-- GOOGLE ANALYTICS -->

</head>

<body>

<noscript>
    <div style="margin-top: 10px; color: #f01; font-size: 11px; width:100%; text-align:center">
        You may not get the full functionality of this webpage because JavaScript is either disabled or not supported by your browser. <br />
    </div>
</noscript>

<!-- START OF entire_wrapper -->
<div id="entire_wrapper">

    <div id="header_wrapper">

        <header>

            <h2 class="hidden"> HEADER </h2>

            <h1> <a href="http://www.jeffdecola.com/">
                JEFFRY A. DECOLA  </a> </h1>

            <h2> <a href="https://jeffdecola.com/control-an-fpga/index.php">
                CONTROL AN FPGA VIA A RASPI AND WEB SERVER </a> </h2>
            
            <a href="https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver">
                GITHUB REPO </a>

            <!-- <div id="header_container">
                <p> tbd </p>
            </div> -->

        </header>

    </div>
    <!-- END OF header_wrapper -->

    <div id="section_wrapper">

        <section>

            <h2 class="hidden"> SECTION </h2>

            <div class="title_container">

                <h2> CONTROL MY 8-BIT MICROPROCESSOR </h2>
                <p> I burned to an FPGA.  </p>
                <p> 
                    <a href="https://github.com/JeffDeCola/control-fpga-via-raspi-and-webserver"> Code </a>
                    written in php, js, go and verilog
                </p>                            

            </div>
            <!-- END OF container_header -->

            <div id="page_wrapper">

                <div id="article_wrapper">

                    <article>

                        <h2 class="hidden"> ARTICLE - HOME PAGE </h2>

                        <?php include("try-it/try-it.php"); ?>

                    </article>

                </div>

            </div>
            <!-- END OF page_wrapper -->

        </section>

    </div>
    <!-- END OF section_wrapper -->

    <div id="footer_wrapper">

        <footer>

            <h2 class="hidden"> FOOTER </h2>

            <div id="footer_copyright_container">
                <p>
                    Copyright &copy; 2020
                    <a href="http://www.jeffdecola.com"> HOME, </a>
                    <a href="http://www.jeffdecola.com/index.php?page=my_website_links"> MY LINKS, </a>
                    <!-- <a href="http://www.jeffdecola.com/aw-stats"> AW, </a> -->
                    <a href="http://www.jeffdecola.com/phpinfo.php"> PHP, </a>
                    <a href="http://www.jeffdecola.com/index.php?page=stop_counting_me"> GA </a>
                    <!---<script type="text/javascript">
                        // Check if Google Analytics Master Tracking Cookie is set
                        if (document.cookie.indexOf('jeff_master_disable_google_analytics=') != -1) {
                            document.write("BLOCKING ON");
                        }
                    </script> -->
                </p>
            </div>

        </footer>

    </div>
    <!-- END OF footer_wrapper -->

</div>
<!-- END OF entire_wrapper -->

</body>
</html>
