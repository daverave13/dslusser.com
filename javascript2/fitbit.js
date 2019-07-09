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

      let stepAvg = stepArr.reduce((x,y) => x+y)/stepArr.length;
      if (stepAvg < 5000) {
        $('#step-readout').html(`Average steps/day: ${Math.floor(stepAvg)}. Get moving!`);
      } else if (stepAvg < 6500) {
        $('#step-readout').html(`Average steps/day: ${Math.floor(stepAvg)}. Not bad!`);
      } else if (stepAvg < 10000) {
        $('#step-readout').html(`Average steps/day: ${Math.floor(stepAvg)}. You're so close!`);
      } else if (stepAvg < 15000) {
        $('#step-readout').html(`Average steps/day: ${Math.floor(stepAvg)}! You're killing it!`);
      } else {
        $('#step-readout').html(`Holy shit man, ${Math.floor(stepAvg)} steps per day! This is... beyond science.`);
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
                    'rgb(235, 47, 47)',
                    'rgb(235, 144, 47)',
                    'rgb(226, 235, 47)',
                    'rgb(48, 235, 45)',
                    'rgb(45, 64, 235)',
                    'rgb(196, 37, 167)',
                    'rgb(255, 97, 113)'
                  ],
                  borderColor: [
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'blue',
                    'purple',
                    'rgb(135, 51, 60)'
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