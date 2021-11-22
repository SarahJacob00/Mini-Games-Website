<?php 
      include 'connection.php';
      include 'signup_entry.php';

      $error = '';
    if(isset($_POST["signup"]))
    {
        //echo $_POST["H1"];
        // validate username empty
        if(isset($_POST['name']) && empty($_POST['name']))
        {
            //echo "Name invalid";
            $error .= "<div class='alert alert-danger text-center' role='alert'>
            Name is invalid, please try again.</div>";
        }
        // validate password empty
        if(isset($_POST['password']) && empty($_POST['password']))
        {
            echo "Password Invalid";
        }
        //validate email
        if(isset($_POST['email']) && empty($_POST['email']))
        {
            echo "Email ID Invalid";
        }

        $username=$_POST['name']; //names given in the html input tags
        $password=$_POST["password"];
        $email=$_POST["email"];
        if(trim($username)!="" and trim($password)!="" and trim($email)!="")
        {      
            $sql = "INSERT INTO login (username, password, email_id) VALUES ('$username',' $password','$email')";

            if ($conn->query($sql) === TRUE) {
                session_start();
                //$_SESSION["msg"]='New record created successfully';
                //echo "Login Successful";
                session_start();
                $_SESSION["username"]=$username;
                header("location:home.php");
                echo "New record created successfully";
            } 
            else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }
            
          
            

        }
    }

?>

