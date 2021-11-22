<html>
<head>
<title>Math Quiz</title>
    <link rel="stylesheet" href="math_home.css">
    <script type="text/javascript" src="mathquiz.js"></script>
</head>
<body>
    <div class="Container">
        <div class="mathquiz" align="center"> 
            <h1>&emsp;Math Quiz</h1>
        </div>
        <div align="center">
            <button class="btn" id="start" onclick="toMenu()">Play</button>	 <br><br>
        </div>

        <div id="menu" class="box1" align="center">
            <div>
              <button class="btn2" onclick="quiz(0)">Easy</button><br><br>
            </div>
            <div>
                <button class="btn2" onclick="quiz(1)">Normal</button><br><br>
            </div>
            <div>
                <button class="btn2" onclick="quiz(2)">Hard</button>
            </div>
        </div>
        <div class="sums" align="center">
              <p id="score"></p>

              <p id="timer"></p>
              <p id="output"></p><br>
              

              <div id="question">
                  <span id="op"></span>
              </div>

              <input type="text" id="input" value="" autocomplete = "off" autofocus><br>

              
              
              
              <button class="btn2" id="answer" onclick="check()" align="center">Answer</button><br>
        </div>


        <div class="scorebox">
            <p id="victory"><p>
            <p id="score_display"></p>  
        </div>


        <div id="rank" align="center">

          <form action="Math_rank.php" method="post" >
            <input type="hidden" id="fscore" name="fscore" value="0" />
            <input type="submit" class="btn" name="signup" value="Rank Page" >
          </form>
        </div>

        <div id="again" align="center">
          
        <button class="btn" id="restart" onclick="toMenu()">Play Again</button>	
          
        </div>
        <div class="quit" align="center">
          <form action="home.php" method="post" >
            <input type="submit" class="btn" name="signup" value="Quit">
          </form>
        </div>
        
        
    </div>
</body>
</html>




