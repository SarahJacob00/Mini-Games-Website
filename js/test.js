var s = 0;
var TotalScore=0;
var a = 0;
var b = 0;
var level = 0;
var count = 10;
var timed = false;
var stopTimer = false;


function toMenu() {
    stopTimer = false; 
    count = 10;
    s = 0;
    TotalScore=0;
    var start = document.getElementById("start");
    var restart = document.getElementById("restart");
    var menu = document.getElementById("menu");
    document.getElementById("victory").style.display = "none";
    start.style.display = "none";
    restart.style.display = "none";
    menu.style.display = "inline"; 
}

function quiz(n) {
        level = n;
        
        if (timed == false)
        {
          //count = 10;
              if(level===0)
                count=30;
              else if(level===1)
                count=60;
              else
                count=120;
        
          
          timed = true;
          timer();
      }
    
        document.getElementById("timer").style.color = "black";
        document.getElementById("input").focus();
        document.getElementById("input").select();
        if (level === 0) { 
        a = Math.floor(Math.random() * 15);
        b = Math.floor(Math.random() * 15);
        } 
        if (level == 1) {
        a = Math.floor(Math.random() * (40 - 15) + 15);
        b = Math.floor(Math.random() * (40 - 15) + 15);
        }
        if (level == 2) {
        a = Math.floor(Math.random() * (100 - 40) + 40);
        b = Math.floor(Math.random() * (100 - 40) + 40);
        }
        var score = document.getElementById("score");
        var menu = document.getElementById("menu");
        var op = document.getElementById("op");
        var question = document.getElementById("question");
        var answer = document.getElementById("answer");
        var input = document.getElementById("input");
        var counter = document.getElementById("timer");
        menu.style.display = "none";
        score.style.display = "inline";
        score.innerHTML = "Score: " + TotalScore; //s
        question.style.display = "inline";
        op.innerHTML = a + " x " + b; 
        answer.style.display = "inline";
        input.style.display = "inline"; 
        counter.style.display = "block"; 
}

function check() {
    document.getElementById("output").style.display = "inline-block";
    if (document.getElementById("input").value == a*b) 
    {
        s = s + 1;
        TotalScore=TotalScore+1;
        document.getElementById("output").innerHTML = "Correct!";
        document.getElementById("output").style.color = "green";
    }

    else
    {
      if (s > 0) {
        s = s - 1;
      }
      document.getElementById("output").innerHTML = "Wrong!";
      document.getElementById("output").style.color = "red";
    }

    document.getElementById("input").value = "";

    if (s < 10) 
    {
      quiz(level);
    } 

    else 
    { 
      stopTimer = true;
      document.getElementById("score").style.display = "none";
      document.getElementById("answer").style.display = "none";
      document.getElementById("input").style.display = "none";
      document.getElementById("question").style.display = "none";
      document.getElementById("output").style.display = "none";
      document.getElementById("timer").style.display = "none";
      document.getElementById("victory").style.display = "inline-block";
      document.getElementById("victory").innerHTML = "Congratulation! You won!";
      document.getElementById("restart").style.display = "inline-block";
  } 
}

function timer() {
      if (stopTimer === true)
      {
        return;
      }
      else 
      {
          var interval = setInterval(timer, 1000);
          function timer()
          {
              document.getElementById('timer').innerHTML= "Timer: " + count;
              count--;
              if (count <= -1 && stopTimer === false)
              {
                  document.getElementById('output').style.color = "orange";
                  document.getElementById('output').style.display="inline";
                  document.getElementById('output').innerHTML="Timeout!";
                  document.getElementById('timer').innerHTML="Timeout!";
                  if (s > 0) 
                  {
                    s = s - 1; 
                  } 
                  clearInterval(interval);
                  timed = false;
                  if (stopTimer === false) 
                  {
                    //quiz(level); 
                  }
              }
           }
      }
}

//I had this problem and solved in Chrome by just disabling Cache: - Click F12; - Go at Network tab; - Click on "Disable Cache".
//hjgfjhgjh

var s = 0;
var TotalScore=0;
var a = 0;
var b = 0;
var level = 0;
var counts = [10,60,90];
var timed = false;
var stopTimer = false;
var i=0;

function toMenu() {
    stopTimer = false; 
    var counts = [30,60,90];
    s = 0;
    TotalScore=0;
    timer();
    var start = document.getElementById("start");
    var restart = document.getElementById("restart");
    var menu = document.getElementById("menu");
    document.getElementById("victory").style.display = "none";
    start.style.display = "none";
    restart.style.display = "none";
    menu.style.display = "inline"; 


}

function quiz(n) {
        level = n;
        if (i==0)
         {
            i=1;
            count = counts[n];
         }
        document.getElementById("timer").style.color = "black";
        document.getElementById("input").focus();
        document.getElementById("input").select();
        if (level === 0) { 
        a = Math.floor(Math.random() * 15);
        b = Math.floor(Math.random() * 15);
        } 
        if (level == 1) {
        a = Math.floor(Math.random() * (40 - 15) + 15);
        b = Math.floor(Math.random() * (40 - 15) + 15);
        }
        if (level == 2) {
        a = Math.floor(Math.random() * (100 - 40) + 40);
        b = Math.floor(Math.random() * (100 - 40) + 40);
        }
        var score = document.getElementById("score");
        var menu = document.getElementById("menu");
        var op = document.getElementById("op");
        var question = document.getElementById("question");
        var answer = document.getElementById("answer");
        var input = document.getElementById("input");
       // var counter = document.getElementById("timer");
        menu.style.display = "none";
        score.style.display = "inline";
        score.innerHTML = "Score: " + TotalScore; //s
        question.style.display = "inline";
        op.innerHTML = a + " x " + b; 
        answer.style.display = "inline";
        input.style.display = "inline"; 
        counter.style.display = "block"; 
}

function check() {
    document.getElementById("output").style.display = "inline-block";
    if (document.getElementById("input").value == a*b) 
    {
        s = s + 1;
        TotalScore=TotalScore+1;
        document.getElementById("output").innerHTML = "Correct!";
        document.getElementById("output").style.color = "green";
    }

    else
    {
      if (s > 0) {
        s = s - 1;
      }
      document.getElementById("output").innerHTML = "Wrong!";
      document.getElementById("output").style.color = "red";
    }

    document.getElementById("input").value = "";

    
    quiz(level);
    

   
}

function timer() {
      if (stopTimer === true)
      {
        return;
      }
      else 
      {
          var interval = setInterval(timer, 1000);
          function timer()
          {
              document.getElementById('timer').innerHTML= "Timer: " + count;
              count--;
              if (count <= -1 && stopTimer === false)
              {
                stopTimer = true;
                document.getElementById("score").style.display = TotalScore;
                document.getElementById("answer").style.display = "none";
                document.getElementById("input").style.display = "none";
                document.getElementById("question").style.display = "none";
                document.getElementById("output").style.display = "none";
                document.getElementById("timer").style.display = "none";
                document.getElementById("victory").style.display = "inline-block";
                document.getElementById("victory").innerHTML = "Congratulation! You won!";
                document.getElementById("restart").style.display = "inline-block";
                count = 0;
              }
           }
      }
}

//HANG.PHP

/*<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Bootstrap 4 CDN -->

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

  <title>Hangman</title>

</head>

<body>

<div class="container">

  <h1 class="text-center">Hangman</h1>

  <div class="float-right">Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span>
  

  </div>

  <div class="text-center">

    <img id='hangmanPic' src="./images/0.jpg" alt="">

    <p id="guess">Guess the :</p>

    <p id="wordSpotlight">The word to be guessed goes here</p>

    <div id="keyboard"></div>

    <button class="btn btn-info" onClick="reset()">Reset</button>

  </div>

</div>

<script src='hangman.js'></script>

<form action="home.php" method="post" >
    <input type="submit" name="signup" value="Home" >
    </form>

</body>

</html>







HANG JAVASCRIPT

var programming_languages = [  "python", "javascript",  "mongodb",  "json",  "java",  "html",  "css",  "c",  "csharp",  "golang",  "kotlin",
  "php",  "sql",  "ruby" ]
var colors=["blue","yellow" , "orange" , "green" , "purple" , "magenta" , "red" , "aqua"]
 
 let answer = '';
 
 let maxWrong = 6;

 var answers=[];
 
 let mistakes = 0;
 
 let guessed = [];
 
 let wordStatus = null;
 
 function randomWord() {
  //document.getElementById('guess').innerHTML = 'Guess the color';

  categories=["Programming Languages","Colours"];

  answers[0] = programming_languages[Math.floor(Math.random() * programming_languages.length)];
  answers[1] = colors[Math.floor(Math.random() * colors.length)];
  //answer=colors[Math.floor(Math.random() * colors.length)];
  no=Math.floor(Math.random() * 2);

  //document.getElementById('guess').innerHTML = 'Guess the color' + no;

  document.getElementById('guess').innerHTML = 'Guess the ' + categories[no];
  answer=answers[no];
 
 }
 
 function generateButtons() {
 
   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
 
     `
 
       <button
 
         class="btn btn-lg btn-primary m-2"
 
         id='` + letter + `'
 
         onClick="handleGuess('` + letter + `')"
 
       >
 
         ` + letter + `
 
       </button>
 
     `).join('');
 
   document.getElementById('keyboard').innerHTML = buttonsHTML;
 
 }
 function handleGuess(chosenLetter) {
 
   guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
 
   document.getElementById(chosenLetter).setAttribute('disabled', true);
 
   if (answer.indexOf(chosenLetter) >= 0) {
 
     guessedWord();
 
     checkIfGameWon();
 
   } else if (answer.indexOf(chosenLetter) === -1) {
 
     mistakes++;
 
     updateMistakes();
 
     checkIfGameLost();
 
     updateHangmanPicture();
 
   }
 
 }
 
 function updateHangmanPicture() {
 
   document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
 
 }
 
 function checkIfGameWon() {
 
   if (wordStatus === answer) {
 
     document.getElementById('keyboard').innerHTML = 'You Won!!!';
 
   }
 
 }
 
 function checkIfGameLost() {
 
   if (mistakes === maxWrong) {
 
     document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
 
     document.getElementById('keyboard').innerHTML = 'You Lost!!!';
 
   }
 
 }
 
 function guessedWord() {
 
   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
 
   document.getElementById('wordSpotlight').innerHTML = wordStatus;
 
 }
 
 function updateMistakes() {
 
   document.getElementById('mistakes').innerHTML = mistakes;
 
 }
 
 function reset() {
 
   mistakes = 0;
 
   guessed = [];
 
   document.getElementById('hangmanPic').src = './images/0.jpg';
 
   randomWord();
 
   guessedWord();
 
   updateMistakes();
 
   generateButtons();
 
 }
 
 document.getElementById('maxWrong').innerHTML = maxWrong;
 
 randomWord();
 
 generateButtons();
 
 guessedWord();
 
 


 ORDER BY score DESC


<html>
    <body align='center'>
    <?php 
        include 'connection.php';

    
        session_start(); 
        //echo $_SESSION["username"];
        $sc=$_POST["score"];
      // echo "SCORE=".$sc;
       $user=$_SESSION["username"];
       //$sql = "INSERT INTO login (username, password, email_id) VALUES ('$username',' $password','$email')";
       $sql = "INSERT INTO snake_rank (user, score) VALUES ('$user', '$sc')";
       if ($conn->query($sql) === TRUE) {
        
        
        //echo "New Score record created successfully";
    } 
    else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

           
    ?>
    
        <h1>Snake Game</h1>
        <h2>Your Score: <?php echo $sc?>    </h2>
        <form action="home.php" method="post" >
    <input type="submit" name="signup" value="Home">
    </form>
    <form action="Snake.php" method="post">
    <input type="submit" name="signup" value="Play Again">
    </form>
    <?php 
             $a=[];$s=[];
            
             
 
             $sql = "SELECT * FROM snake_rank ; ";
             $result = $conn->query($sql);
 
             
             if($result->num_rows> 0)
             {
                     // output data of each row and fetches a result row as an associative array
                     echo "<br>";
                     echo "<center> BEFORE SORTING
                     </center>"; echo "<table border='2'>";
                     echo "<tr>";
                     echo "<th>USER</th><th>NAME</th><th>Score</th></tr>";
                     while($row = $result->fetch_assoc())
                     {
                         echo "<tr>";
                         echo "<td>". $row["sno"]."</td>";
                         echo "<td>". $row["user"]."</td>";
                         echo "<td>". $row["score"]."</td>";
                         
                         array_push($a,$row["score"]);
                         array_push($s,$row["sno"]);
                     }
             
                     echo "</table>";
                     echo "<br>";
                     echo "<center> AFTER SORTING
                     </center>"; echo "<table border='2'>";
                     echo "<tr>";     
                     echo "<th>USER</th><th>NAME</th><th>Score</th></tr>";
                     
                     $n=count($a);
                     //echo $n;
                     $b=$a;
                     for ($i = 0; $i < $n - 1; $i++)  
                     {  
                         $index = $i;  
                         for ($j = $i + 1; $j < $n; $j++){  
                             if ($a[$j] > $a[$index]){  
                                 $index = $j;//searching for lowest index  
                             }  
                         }  
                         $smallerNumber = $a[$index];   
                         $a[$index] = $a[$i];  
                         $a[$i] = $smallerNumber;  

                         $smallerNumber = $s[$index];   
                         $s[$index] = $s[$i];  
                         $s[$i] = $smallerNumber;  
                     }
                     for ( $i = 0 ; $i< ($n) ; $i++ )
                     {
                         
                         $sno=$s[$i];
                         $sql = "SELECT * FROM snake_rank WHERE sno='$sno'";
                         $result = $conn->query($sql);
                         while($row = $result->fetch_assoc())
                         {
                            echo "<tr>";
                            echo "<td>". $row["sno"]."</td>";
                            echo "<td>". $row["user"]."</td>";
                            echo "<td>". $row["score"]."</td>";
                             
                         }
                     }
                     echo "</table>";
             }
             else
                 echo "Table is Empty";
             $conn->close();    
    ?>
    </body>
</html>

*/