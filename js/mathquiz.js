var s = 0;
var TotalScore=0;
var a = 0;
var b = 0;
var level = 0;
var count = 10;
var timed = false;
var stopTimer = false;
document.getElementById("rank").style.display = "none";
document.getElementById("again").style.display = "none";

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
    document.getElementById("rank").style.display = "none";
    document.getElementById("again").style.display = "none";
    document.getElementById("score_display").style.display = "none";
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
    
        //document.getElementById("timer").style.color = "black";
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
                    document.getElementById("timer").style.display = "none";
                    document.getElementById("question").style.display = "none";
                    document.getElementById("input").style.display = "none";
                    document.getElementById("output").style.display = "none";
                    document.getElementById("score").style.display = "none";
                    document.getElementById("answer").style.display = "none";
                    document.getElementById("rank").style.display = "inline";
                    document.getElementById("again").style.display = "inline";
                    document.getElementById('fscore').value = TotalScore;
                    document.getElementById("victory").style.display = "inline-block";
                    document.getElementById("victory").innerHTML = "Congratulation!";
                    
                    document.getElementById('score_display').innerHTML = "THE SCORE IS "+TotalScore;
                    document.getElementById("score_display").style.display = "inline";
                  }
              }
           }
      }
}
