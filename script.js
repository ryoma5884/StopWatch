  //Button
  var startButton;  //start
  var stopButton;   //stop
  var resetButton;  //reset
  
  //Timer
  var showTime;
  var timer;
  var startTime;
  var elapsedTime = 0;
  var holdTime = 0;

  window.onload = function(){
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
  }

  function start(){
    startTime =  Date.now();
    measureTime();
    
    //ボタンの有効無効
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
  }
  function stop(){
    clearInterval(timer);
    holdTime += Date.now() - startTime;
    
    //ボタンの有効無効
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
  }
  function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00.000";

    //ボタンの有効無効
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
  }
  
  //計測
  function measureTime(){
    timer = setTimeout(function(){
      //時間を計算
      elapsedTime = Date.now() - startTime + holdTime;
      showTime.textContent = new Date(elapsedTime).toISOString().slice(14,23);
      //計測
      measureTime();
    },10);
  }
 