function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

function updateGreeting() {
  var d = new Date();
  var h = d.getHours();
  var wd = d.getDay(); //weekday ie 1-7
  var md = d.getDate(); //month day ie 1-31
  var month = d.getMonth() + 1;

  //console.log("h | " + h + "\nwd | " + wd + "\nmd | " + md + "\nmonth | " + month);

  if (h<5) {
    var greeting = "Why are you even awake?";
  }
  else if (h>=6 && h<12) {
    var greeting = "Good morning, get to work.";
  }
  else if (h>=12 && h<14) {
    var greeting = "Lunch time tho.";
  }
  else if (h>=14 && h<17 && (wd!=6 && wd!=7)) {
    var greeting = "Drink some water.";

  }
  else if (h>=17 && h<19 && (wd!=6 && wd!=7)) {
    var greeting = "Go home and walk your dogs!";
  }
  else {
    var greeting="Have you called your mother lately?";
  }

  if (month ==  12) {
    if (md <= 25) {
      var holiday = "There's no place like ~ for the holidays.";
    } else {
      var holiday = "Happy New Beeeeeeeers!";
    }
  }
  else if (month == 9 && md == 11) {
    var holiday = "Never Forget.";
  }
  else if (month == 5 && md == 24) {
    var holiday = "Happy Birthday Tanya!";
  }
  else if (month == 3 && md == 14) {
    var greeting = "Looking good QT3.14 ;)";
  }
  else if (month == 2 && md == 14) {
    var holiday = "Happy&nbsp;<strike>Consumerism</strike>&nbsp;Valentine's Day!";
  }
  else if (month == 1 && md <= 7 ) {
    var holiday = "New Year's Resolution: 4096x2160";
  }
  else {
    var holiday = "";
  }
  $("#greeting").html('An imperfect plan violently executed is better than a perfect plan never started.');
  $("#holiday").html(holiday);
}

function toggleManh() {
  $(document).ready(function(){
    $("#manh-control").click(function(){
      $(".manh").fadeToggle();
      $("#qod-flex-container").fadeToggle();
    });
  });
}

function toggleManhDev() {
  $(document).ready(function(){
    $("#manh-dev-control").click(function(){
      $(".manh-dev").fadeToggle();
      $("#qod-flex-container").fadeToggle();
    });
  });
}

function toggleManhUat() {
  $(document).ready(function(){
    $("#manh-uat-control").click(function(){
      $(".manh-uat").fadeToggle();
      $("#qod-flex-container").fadeToggle();
    });
  });
}

function easterEgg() {
  $("html").click(function() {
    let bgColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    $("body").css("background-color",bgColor);
  });
  $(window).bind('mousewheel DOMMouseScroll', function(event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      let bgImgSize = ($("body").css("background-size"));
      let bgImgVal = Number(bgImgSize.substring(0,bgImgSize.length-1));
      if (bgImgVal === 5) { //loop around
        bgImgVal = 100;
        bgImgSize = bgImgVal + '%';
        $("body").css("background-size", bgImgSize);
        //$("body").css("background-repeat", "no-repeat");
        }
      else {
        bgImgSize = String(bgImgVal - 5) + "%";
        //$("body").css("background-repeat", "repeat");
        $("body").css("background-size", bgImgSize);
      }
    }
    else {
      let bgImgSize = ($("body").css("background-size"));
      let bgImgVal = Number(bgImgSize.substring(0,bgImgSize.length-1));
      if (bgImgVal === 100) { //loop around
        bgImgVal = 5;
        bgImgSize = bgImgVal + '%';
        $("body").css("background-size", bgImgSize);
        //$("body").css("background-repeat", "no-repeat");
        }
      else {
        bgImgSize = String(bgImgVal + 5) + "%";
        //$("body").css("background-repeat", "repeat");
        $("body").css("background-size", bgImgSize);
      }
    }
  });
  $("html").dblclick(function() {
    if ($("body").css("background-repeat") == "no-repeat") {$("body").css("background-repeat", "repeat");}
    else {$("body").css("background-repeat", "no-repeat");}
  });
}

let loadLink = () => {
  console.log('loadLink Running');
  
  let linkString = '';
  let linkArr =  [
  {
    link: "https://old.reddit.com",
    imgSrc: "img/Reddit_logo.png",
    alt: "Reddit",
    title: "Reddit"
  },
  {
    link: "https://www.youtube.com/",
    imgSrc: "img/youtube-logo.png",
    alt: "YouTube",
    title: "YouTube"
  },
  {
    link: "https://amazon.com",
    imgSrc: "img/amazon-logo.png",
    alt: "Amazon",
    title: "Amazon"
  },
  {
    link: "https://netflix.com",
    imgSrc: "img/netflix-logo.png",
    alt: "Netflix",
    title: "Netflix"
  },
  {
    link: "https://www.evernote.com/client/web?login=true",
    imgSrc: "img/evernote-logo.png",
    alt: "Evernote",
    title: "Evernote"
  },
  {
    link: "https://udemy.com",
    imgSrc: "img/udemy-logo.png",
    alt: "Udemy",
    title: "Udemy"
  },
  {
    link: "https://codecademy.com",
    imgSrc: "img/codecademy-logo.png",
    alt: "Codecademy",
    title: "Codecademy"
  }  ,
  {
    link: "https://messages.google.com/web/conversations",
    imgSrc: "img/messages-logo.png",
    alt: "Google Messages",
    title: "Messages"
  }     
]

linkArr.sort((a, b) => (a.title > b.title) ? 1 : -1)

for (let i = 0; i <= linkArr.length-1; i++) {
  linkString += `
  <li class="thumbnail-item">
    <a class="link-style" href="${linkArr[i].link}">
      <img class="thumbnail-image" src="${linkArr[i].imgSrc}" alt="${linkArr[i].alt}">
      <span class="thumbnail-title">${linkArr[i].title}</span>
    </a>
  </li>`
}

  let target = document.getElementById("columnOne");
  target.innerHTML = linkString;
}

function funcStart() {
  easterEgg();
  updateGreeting();
  toggleManh();
  toggleManhDev();
  toggleManhUat();
  loadLink();
}

//Old code that I don't want to throw away goes below this line
/* async function colorChange() {
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

    $("body").css("background", "linear-gradient(" + bg1 + ", " + bg2);
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-attachment", "fixed");
    //console.log(bg1 + " | " + bg2);
    await sleep(35);
  }
}
 */
