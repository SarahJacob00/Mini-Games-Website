<?php

require 'register.php';

?>


<html>
<head>
    <title>User Login</title>
    <link rel="stylesheet" type="text/css" href="index_css.css"/>
</head>

    <body align="center">
        <div class="container">
                <form action="index.php" method="post">
                    <h1>USER LOGIN</h1>
                    <h3><?= $error; ?></h3>
                
                    Username:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="name"><br><br>
                    Password:&nbsp;&nbsp;&nbsp;&nbsp;<input type="Password" name="password"><br><br><br>
            <div class="button">
                    <input type="submit" name="submit" value="Login"><br><br>
                </form>
                <form action="signup_entry.php" method="post" >
                    <input type="submit" name="signup" value="Sign Up">
                </form>
            </div>
    </div>
    </body>

</html>