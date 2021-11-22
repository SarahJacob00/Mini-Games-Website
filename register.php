<?php 

    include 'connection.php';

    $error = '';


    if(isset($_POST["submit"]))
    {

       //echo $_POST["sc"];
        // validate username empty
        if(isset($_POST['name']) && empty($_POST['name']))
        {
            $error="Entry invalid";
        }
        /*
        else
        {
            // validate
            if(!preg_match("/^[a-zA-Z ]*$/", $_POST['name']))
            {
                echo "Name Valid";
            }
        }
        */
        // validate password empty
        else if(isset($_POST['password']) && empty($_POST['password']))
        {
            $error="Entry invalid";
        }
        /*
        else
        {
            // validate
            if(!preg_match("/^[a-zA-Z ]*$/", $_POST['password']))
            {
                echo "Password valid";
            }
        }
        */
        $username=$_POST["name"]; //names given in the html input tags
        $password=$_POST["password"];

        if(trim($username)!="" and trim($password)!="")
        {
            //sanitizes everything that enters....idk why we need it but ya
            $username=stripslashes($username);
            $passowrd=stripslashes($password);
            $username=strip_tags($_POST["name"]);
            $password=strip_tags($_POST["password"]);
            $username=mysqli_real_escape_string($conn,$username);
            $password=mysqli_real_escape_string($conn,$password);

            $query=mysqli_query($conn,"SELECT * FROM login WHERE username='$username' AND password='$password'");
            $numrows=mysqli_num_rows($query);
            if($numrows>0)
            {
                session_start();
                $_SESSION["username"]=$username;
                //echo "Login Successful";
                //echo $_POST["test"];
                header("location:home.php");
            }
            else{
                $error="Username/Password Invalid";
                
            }

        }
    }

?>