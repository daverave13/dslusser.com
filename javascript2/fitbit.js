// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
var fitbitAccessToken;

if (!window.location.hash) {
  window.location.replace('https://www.fitbit.com/oauth4/authorize?response_type=token&client_id=22DFML&redirect_uri=https%3A%2F%2Fwww.dslusser.com%2FEIT.html&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight');
} else {
  var fragmentQueryParameters = {};
  window.location.hash.slice(1).replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) {
      fragmentQueryParameters[$1] = $3;
    }
  );
  fitbitAccessToken = fragmentQueryParameters.access_token;
}

async function fetchSteps() {
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
      let stepLog = json['activities-steps'];
      let stepArr = [];
      let dateArr = [];
      for (let i = 30; i >= 24; i--) {
        stepArr.push(stepLog[i].value);
        dateArr.push(stepLog[i].dateTime);
      }
        
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: [...dateArr].reverse(),
              datasets: [{
                  label: '# of steps',
                  data: [...stepArr].reverse(),
                  backgroundColor: [
                    'lightred',
                    'lightorange',
                    'lightyellow',
                    'lightgreen',
                    'lightblue',
                    'lightpurple'
                  ],
                  borderColor: [
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'blue',
                    'purple'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
              }
            }
        });
    });
}

fetchSteps();