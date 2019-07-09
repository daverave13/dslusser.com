function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

function daysUntil(month, day, year, goal) {
  today=new Date();
  var day=new Date(year, month, day);
  var one_day=1000*60*60*24;
  var daysLeft = Math.ceil((day.getTime()-today.getTime())/(one_day));
  if (daysLeft > 0) {
    $("#days-until").append("<br>" + daysLeft + " days left until " + goal + "!");
  }
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
      if (bg1r > 222) {
        flagBg1r = 1;
      }
    }
    else {
      bg1r--;
      if (bg1r < 180) {
        flagBg1r = 0;
      }
    }

    if (flagBg1g == 0) {
      bg1g++;
      if (bg1g > 222) {
        flagBg1g = 1;
      }
    }
    else {
      bg1g--;
      if (bg1g < 180) {
        flagBg1g = 0;
      }
    }

    if (flagBg1b == 0) {
      bg1b++;
      if (bg1b > 222) {
        flagBg1b = 1;
      }
    }
    else {
      bg1b--;
      if (bg1b < 180) {
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
      if (bg2r < 150) {
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
      if (bg2g < 150) {
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
      if (bg2b < 150) {
        flagBg2b = 0;
      }
    }

    bg1= "rgb("+bg1r+","+bg1g+","+bg1b+")";
    bg2= "rgb("+bg2r+","+bg2g+","+bg2b+")";

    $("body").css("background", "linear-gradient(" + bg1 + ", " + bg2);
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-attachment", "fixed");
    //console.log(bg1 + " | " + bg2);
    await sleep(150);
  }
}

// function funcStart() {
//   daysUntil(03, 16, 2019, 'Europe');
//   daysUntil(00, 01, 2022, 'Student Loans Paid Off');
//   colorChange();
// }
