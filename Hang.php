<!DOCTYPE html>
 
<html lang="en">
 
<head>
 
  <meta charset="UTF-8">
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="hang_style.css">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <title>Hangman</title>
 
 
</head>
 
<body class="neon">
 
<div class="container">
 <p class="neon">
  <h1 class="text-center">Hangman</h1>
 </p>
  <div class="float-right" id="sctimer">Wrong Guesses: <span id='mistakes'>0</span> of <span id='maxWrong'></span>
    <br>
    <p class="neon" id="timer" ></p>
      <p class="neon" id="score"></p>
    
  </div>
  <div class="text-center">
 
    <img id='hangmanPic' src="./images/0.jpg" alt="">
 
    <p id="guess" class="neon">Guess the :</p>
 
    <p id="wordSpotlight" class="neon">The word to be guessed goes here</p>
 
    <div id="keyboard"></div>
  
    <button class="button glow-button" onClick="reset()" id="btn1">Next</button>
     
     <form action="Hang.php" method="post">
     <input type="submit" name="signup" id="again" value="Play Again" class="button glow-button">
    </form>
 
  </div>
 
</div>
  
<form action="home.php" method="post" >
    <input type="submit" name="signup" value="Home" class="home" >
</form>

<form action="Hang_rank.php" method="post" >
    <input type="hidden" id="fscore" name="fscore" value="0"  />
    <input type="submit" name="signup" value="Rank Page" class="rank">
</form>
 
<script src="hangman.js"></script>
  
</body>
 
</html>
