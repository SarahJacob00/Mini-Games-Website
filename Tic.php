<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <br>
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="tictac.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
    <section>
        <h1 class="game--title">Tic Tac Toe</h1>
        <div class="game--container">
            <div data-cell-index="0" class="cell"></div>
            <div data-cell-index="1" class="cell"></div>
            <div data-cell-index="2" class="cell"></div>
            <div data-cell-index="3" class="cell"></div>
            <div data-cell-index="4" class="cell"></div>
            <div data-cell-index="5" class="cell"></div>
            <div data-cell-index="6" class="cell"></div>
            <div data-cell-index="7" class="cell"></div>
            <div data-cell-index="8" class="cell"></div>
        </div>
        <h2 class="game--status"></h2>
  <!--      <button class="game--restart">Restart Game</button><br><br> -->
        <div>
             <button class="btn-1" onclick="document.location='Tic.php'"><i class="fa fa-undo"></i> Restart Game</button><br>
        </div>
          <button class='home' onclick="document.location='home.php'"><i class="fa fa-home"></i> HOME</button>
    </section>
<script src="tic.js"></script>
</body>
</html>
