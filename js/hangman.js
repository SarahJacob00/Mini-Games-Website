
var programming_languages = [  "python", "javascript",  "mongodb",  "json",  "java",  "html",  "css",  "c",  "csharp",  "golang",  "kotlin",
"php",  "sql",  "ruby" ]
var colors=["blue","yellow" , "orange" , "green" , "purple" , "magenta" , "red" , "aqua"]

let answer = '';

let maxWrong = 6;

var stopTimer = false;

var count=60;

var answers=[];

var score=0;

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
    score=score+1;
    document.getElementById("keyboard").style.color = "green";
   document.getElementById('keyboard').innerHTML = 'Correct!';

 }

}

function checkIfGameLost() {

 if (mistakes === maxWrong) {

   document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
   document.getElementById("keyboard").style.color = "red";
   document.getElementById('keyboard').innerHTML = 'Wrong!';

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
        document.getElementById("score").innerHTML = "Score: "+score;
        count--;
        if (count <= -1 && stopTimer === false)
        {
          document.getElementById('fscore').value = score;
          document.getElementById("sctimer").style.display = "none";
          document.getElementById("hangmanPic").style.display = "none";
          document.getElementById("guess").style.display = "none";
          document.getElementById("keyboard").style.display = "none";
          document.getElementById("btn1").style.display = "none";
          document.getElementById("wordSpotlight").innerHTML = " Total Score: "+document.getElementById('fscore').value;
        // window.location.replace("http://localhost/GameWebProj/Hang.php"); 
        }
     }
}
}

document.getElementById("timer").style.color = "black";

document.getElementById("score").innerHTML = "Score: "+score;
timer();
document.getElementById('maxWrong').innerHTML = maxWrong;
  
randomWord();
  
generateButtons();
  
guessedWord();