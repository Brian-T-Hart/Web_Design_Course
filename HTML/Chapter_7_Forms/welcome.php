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
</style>
<body>
    <div id="content-container">

        <?php
            echo '<h1>Hello ' . htmlspecialchars($_GET["name"]) . '!</h1>';
        ?>

    </div>
</body>
</html>