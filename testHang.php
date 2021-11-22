<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

  <title>Hangman</title>

</head>

<body>

<div class="container">

  <h1 class="text-center">Hangman</h1>

  <div class="float-right" id="sctimer">Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span>
    <br>
    <p id="timer"></p>
    <p id="score"></p>
  </div>

  <div class="text-center">

    <img id='hangmanPic' src="./images/0.jpg" alt="">

    <p id="guess">Guess the :</p>

    <p id="wordSpotlight">The word to be guessed goes here</p>

    <div id="keyboard"></div>

    <button class="btn btn-info" onClick="reset()" id="btn1">Next</button>

  </div>

</div>



<form action="home.php" method="post" >
    <input type="submit" name="signup" value="Home" >
</form>
<form action="Hang_rank.php" method="post" >
    <input type="hidden" id="fscore" name="fscore" value="0" />
    <input type="submit" value="Rank Page" >
</form>
<form action="Hang.php" method="post">
    <input type="submit" id="again" value="Play Again">
</form>



<script src="hangman.js"></script>
  
</body>

</html>

