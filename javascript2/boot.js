// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
var fitbitAccessToken;
let responseGlobal = '';

if (!window.location.hash) {
  window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DFML&redirect_uri=https%3A%2F%2Fwww.dslusser.com%2FEIT.html&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight');
} else {
  //honestly no clue what this function is up to, I just copied this part from someone
  var fragmentQueryParameters = {};
  window.location.hash.slice(1).replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) {
      fragmentQueryParameters[$1] = $3;
    }
  );

  fitbitAccessToken = fragmentQueryParameters.access_token;
}

let respArray = [];
async function fetchBMI(strDate) {
  var url = 'https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json';
  var bearer = 'Bearer ' + fitbitAccessToken;
  const response = fetch(url, {
      method: 'GET',
      'Access-Control-Allow-Credentials': true,
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      let stepCount = json;
      console.log(stepCount);
      
    });
}

function updateBMIHeader(strDate) {
  $("#bmi-header").append("<th>" + strDate.substr(5) + "</th>");
}

function updateBMIData(numDaysAgo, arr) {
  console.log(`<td>${arr[numDaysAgo]}</td>`);
  $("#bmi").append(`<td>${arr[numDaysAgo]}</td>`)
}

function daysAgo(num) {
  return ((function() {
    this.setDate(this.getDate() - num);
    return this
  }).call(new Date)).toISOString().split('T')[0];
}

for (var i = 6; i >= 0; i--) {
  fetchBMI(daysAgo(i), i);
  updateBMIHeader(daysAgo(i));
  //updateBMIData(i);
}

console.log(responseGlobal);