<?php 

$conn = mysqli_connect("localhost","root","","testdb");

if ($conn->connect_error>0)
{
    die("Unable to connect to the database[".$conn->connect_error."]");
}
/*
else
{
    echo "Successful ";
}
*/
?>
