
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

async function colorChange() {
  //set flags to false
  let flagBg1r = 0;
  let flagBg1g = 0;
  let flagBg1b = 0;

  let flagBg2r = 0;
  let flagBg2g = 0;
  let flagBg2b = 0;

  //randomize initial color channel values
  var bg1r= Math.floor(Math.random()*255)%255;
  var bg1g= Math.floor(Math.random()*255)%255;
  var bg1b= Math.floor(Math.random()*255)%255;
  var bg1= "rgb("+bg1r+","+bg1g+","+bg1b+")";

  var bg2r= Math.floor(Math.random()*255)%255;
  var bg2g= Math.floor(Math.random()*255)%255;
  var bg2b= Math.floor(Math.random()*255)%255;
  var bg2 = "rgb("+bg2r+","+bg2g+","+bg2b+")";

  //loop as long as the page is opened while
  //mutate colors one shade at time at 20hz
  while (true) {

    if (flagBg1r == 0) {
      bg1r++;
      if (bg1r > 220) {
        flagBg1r = 1;
      }
    }
    else {
      bg1r--;
      if (bg1r < 5) {
        flagBg1r = 0;
      }
    }

    if (flagBg1g == 0) {
      bg1g++;
      if (bg1g > 220) {
        flagBg1g = 1;
      }
    }
    else {
      bg1g--;
      if (bg1g < 5) {
        flagBg1g = 0;
      }
    }

    if (flagBg1b == 0) {
      bg1b++;
      if (bg1b > 220) {
        flagBg1b = 1;
      }
    }
    else {
      bg1b--;
      if (bg1b < 5) {
        flagBg1b = 0;
      }
    }


    if (flagBg2r == 0) {
      bg2r++;
      if (bg2r > 220) {
        flagBg2r = 1;
      }
    }
    else {
      bg2r--;
      if (bg2r < 5) {
        flagBg2r = 0;
      }
    }

    if (flagBg2g == 0) {
      bg2g++;
      if (bg2g > 220) {
        flagBg2g = 1;
      }
    }
    else {
      bg2g--;
      if (bg2g < 5) {
        flagBg2g = 0;
      }
    }

    if (flagBg2b == 0) {
      bg2b++;
      if (bg2b > 220) {
        flagBg2b = 1;
      }
    }
    else {
      bg2b--;
      if (bg2b < 5) {
        flagBg2b = 0;
      }
    }

    bg1= "rgb("+bg1r+","+bg1g+","+bg1b+")";
    bg2= "rgb("+bg2r+","+bg2g+","+bg2b+")";

    $("html").css("background", "linear-gradient(" + bg1 + ", " + bg2);
    $("html").css("height", "115%");
    // $("html").css("background-size", "cover");
    // $("html").css("background-position", "center");
    // $("html").css("background-repeat", "no-repeat");


    //console.log(bg1 + " | " + bg2);
    await sleep(40);
    }
  }

function updateGreeting() {
  var d = new Date();
  var h = d.getHours();
  var wd = d.getDay(); //weekday ie 1-7
  var md = d.getDate(); //month day ie 1-31
  var month = d.getMonth() + 1;

  //console.log("h | " + h + "\nwd | " + wd + "\nmd | " + md + "\nmonth | " + month);

  if (h<6) {
    var greeting = "Why are you even awake?";
  }
  else if (h>=6 && h<12) {
    var greeting = "Good morning, get to work.";
  }
  else if (h>=12 && h<14) {
    var greeting = "Lunch time tho.";
  }
  else if (h>=14 && h<17 && (wd!=6 && wd!=7)) {
    var greeting = "Hang in there, buddy, it's almost quittin' time.";
  }
  else if (h>=17 && h<19 && (wd!=6 && wd!=7)) {
    var greeting = "Go home and walk your dog!";
  }
  else if (h>=14 && h<17) {
    var greeting="Have you called your mother lately?";
  }
  else {
    var greeting="You should NEVER be doing homework. Enjoy your life.";
  }

  if (month ==  12) {
    if (md <= 25) {
      var holiday = "Merry Christmas ya filthy animal!!";
    } else {
      var holiday = "Happy New Beeeeeeeers!";
      var bg = "https://static01.nyt.com/images/2017/07/03/well/mfrl_fireworks2/mfrl_fireworks-superJumbo.gif";
      $("body").css("background-size", "100% 105%");
    }
  }
  else if (month == 11 && md >= 21 && wd == 4) {
    var holiday = "Leave those poor turkeys alone!";
  }
  else if (month == 10 && md >= 13) {
    var holiday = "Shopping List: razor blades, poison, candy.";
  }
  else if (month == 9 && md == 11) {
    var holiday = "Never Forget.";
  }
  else if (month == 7 && md <= 4) {
    var holiday = "Red Neck, White Trash, Blue Collar";
  }
  else if (month == 5 && md == 24) {
    var holiday = "Happy Birthday Tanya!";
  }
  else if (month == 2 && md == 14) {
    var holiday = "Happy&nbsp;<strike>Consumerism</strike>&nbsp;Valentine's Day!";
  }
  else if (month == 1 && md <= 7 ) {
    var holiday = "New Year's Resolution: 16K!!!";
  }
  else {
    var holiday = "";
  }
  $("#greeting").html(greeting);
  $("#holiday").html(holiday);

  };

async function updateBTC() {


  while (true) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.coinbase.com/v2/prices/spot?currency=USD", false);
    xhr.send();

    var obj = JSON.parse(xhr.response);

    var btc = obj.data['amount'];
    var yourBTC = btc * .1403;
    btc = Number(btc).toLocaleString();
    yourBTC = Number(yourBTC).toFixed(2);
    yourBTC = Number(yourBTC).toLocaleString();
    
		 $("#btc").html("<h2>1 BTC = $" + btc + "<br>.1403 BTC =  $" + yourBTC + "</h2>");
    if (!btcOld) {
      //first time in this loop
      var btcOld = btc;
    }
    else {
      //not the first time in this loop
      if (btc > btcOld) {
        //price has gone up
		 			$("#btc").html("<h2>1 BTC = $" + btc + "<br>.1403 BTC =  $" + yourBTC + "</h2>");
        var dif = Number(btc) - Number(btcOld);
        console.log("PRICE RAISE | $" + btc);
        $("#btc h2").css("color", "#42f48c");
        btcOld = btc;
      }
      else if (btc > btcOld) {
        //price has gone down
        $("#btc").html("<h2>1 BTC = $" + btc + "<br>.1403 BTC =  $" + yourBTC + "</h2>");
        var dif = Number(btc) - Number(btcOld);
        console.log("PRICE DROP | $" + btc)
        $("#btc h2").css("color", "#f44141");
        btcOld = btc;
      }
      else {
        //console.log("NO PRICE CHANGE | $" + btc);
        await sleep(1000)
        btcOld = btc;
      }
    }
    await sleep(2000);
  }
}

function funcStart() {
  updateGreeting();
  colorChange();
  updateBTC();
}