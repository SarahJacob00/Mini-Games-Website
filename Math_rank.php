
<html>
    <head>
    <title>Math Quiz</title>
         <link rel="stylesheet" href="math_home.css">
    </head>
    <body align='center'>
    <?php 
        include 'connection.php';

    
        session_start(); 
        //echo $_SESSION["username"];
        $sc=$_POST["fscore"];
       //echo "SCORE = ".$sc;
       $user=$_SESSION["username"];
       
       $sql = "INSERT INTO math_rank (user, score) VALUES ('$user', '$sc')";
       if ($conn->query($sql) === TRUE) {
        
        
       // echo "New Score record created successfully";
    } 
    else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

           
    ?>
    <h1>SCOREBOARD</h1>
        <h3>Your Score: <?php echo $sc?>    </h3>
        
    <?php 
             $a=[];$s=[];
            
             
 
             $sql = "SELECT * FROM math_rank ORDER BY score DESC; ";
             $result = $conn->query($sql);
 
             
             if($result->num_rows> 0)
             {
                    $i=1;
                     // output data of each row and fetches a result row as an associative array
                    
                     echo "<center> TOP 3 PLAYERS </center>";
                     echo "<table align='center' border='2'>";
                     echo "<tr>";
                     echo "<th>RANK</th><th>PLAYER NAME</th><th>SCORE</th></tr>";
                     while($row = $result->fetch_assoc() )
                     {
                         if($i>3)
                            break;
                         echo "<tr>";
                         echo "<td>". $i."</td>";
                         echo "<td>". $row["user"]."</td>";
                         echo "<td>". $row["score"]."</td>";
                         $i=$i+1;
                        
                     }
             
                     echo "</table>";
                     echo "<br>";
                    
             }
             else
                 echo "Table is Empty";
             $conn->close();    
    ?>
    <form action="home.php" method="post" >
    <input type="submit" name="signup" value="Home">
    </form>
    <form action="Snake.php" method="post">
    <input type="submit" name="signup" value="Play Again">
    </form>

    </body>
</html>