<!DOCTYPE html>

<html>
<head>
    <title>Welcome</title>
</head>
<style>
        body {
            padding: 100px;
            text-align: center;
        }
        
        #content-container {
            height: 200px;
            margin: auto;
            width: 400px;
        }

        #home-link {
            position: fixed;
            top: 20px;
        }
</style>
<body>
    <a id="home-link" href="../../index.html">Home</a>
    <div id="content-container">

        <?php
            $userName = test_input($_POST["name"]);

            echo "<h1>Hello {$userName}</h1>";

            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>

    </div>
</body>
</html>