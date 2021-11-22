
<html>
<head>
    <title>Welcome</title>
    <link rel="stylesheet" type="text/css" href="home_style.css"/>
</head>

<body align="center">
    <div class="header" id="header">
        <div class="header-left">
            Welcome <?php session_start(); echo $_SESSION["username"]?>  
        </div>
        <div class="header-right">
            <a class="active" href="index.php">Logout</a>
        </div>
    </div>

    
    <div class="middle" id ="middle">
        <br><br><br>
        <h2>This is the Game Website</h2>
        <div class='test'>
        <a class="btn" href="#tic">Tic Tac Toe</a>
        <a class="btn" href="#math">Math Quiz</a>
        <a class="btn" href="#snake">Snake Game</a>
        <a class="btn" href="#hang">Hangman</a><br><br>
        </div>
    </div>
    

    <div id="tic" class="tic">
            <br>
            <div class="box1" >
                    <p style="text-align: left">
                        <B style="font-size: 30px;">TIC TAC TOE</B><br>
                        The game is played on a grid that's 3 squares by 3 squares.<br>
				You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.<br>
				The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.<br>
				When all 9 squares are full, the game is over.	
                    </p><br><br>
                    <a class="btn1" href="Tic.php">Start!</a> 
            </div>
        
    </div>
    

    <div id="math" class="math">
            <br><br>
            <div class="box1" >
                    <p style="text-align: left">
                        <B style="font-size: 30px;">MATH QUIZ</B><br>
                       The game tests the quick metal math abilities of the player<br>
                       There are three levels the player can choose from - Easy, Intermediate and Difficult<br>
                       According to the level selected, the player gets a series of question with the correspoding <br>
                       toughness of questions and need to solve as many as they can before the timer runs out.<br>
                       The final score is judged by the number of questions they solve correctly<br>
                    </p><br><br>
                    <a class="btn1" href="Math.php">Start!</a>
            </div>
        
    </div>
   

    <div id="snake" class="snake">
            <br><br>
            <div class="box1" >
                    <p style="text-align: left">
                        <B style="font-size: 30px;">SNAKE GAME</B><br>
                        This is a classical snake and its food game. In the game, the player directs the snake towards the food<br>
                        with the help of the arrow keys present on the keyboard. As the snake eats more food, it's body grows.<br>
                        The aim of this game is to eat as much as it possibly can and to not run into the walls or eat its own tail.<br>
                    </p><br><br>
                    <a class="btn1" href="Snake.php">Start!</a>  
            </div>
       
    </div>
   

    <div  id="hang" class="hang">
            <br>
            <div class="box1" >
                    <p style="text-align: left">
                        <B style="font-size: 30px;">HANGMAN</B><br>
                        Play individually or in groups.<br> 
                        Have the student select a letter of the alphabet.<br>
                        If the letter is contained in the word/phrase, the group or individual takes another turn guessing a letter.  <br>
                        To reveal a letter, either:<br>
                            Click on the square with appropriate letter in it to reveal the letter within the word/phrase.<br>
                            Click on the letter in the alphabet area which will then trigger the letter to be revealed if it is <br>
                            contained in the word/phrase or change the color of the Try Again button indicating that the letter is <br>
                            not contained in the word/phrase.<br>
                            If the letter is not contained in the word/phrase,a portion of the hangman is added. <br>
                        The game continues until:<br>
                            The word/phrase is guessed (all letters are revealed) – WINNER or,<br>
                            All the parts of the hangman are displayed – LOSER
                    </p><br><br>
                    <a class="btn1" href="Hang.php">Start!</a>  
            </div>
        

</div>

    
    <div class="footer" >
        <a href="#header">Back to top</a>
    </div>
</body>

</html>