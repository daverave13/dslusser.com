// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
var fitbitAccessToken;
const chart = require('chart.js');



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
      for (let i = 30; i >= 24; i--) {
        if (stepLog[i].value > 0) $('#steps-list').append(`<li class='green'><h4>${stepLog[i].dateTime} | ${stepLog[i].value}</h4></li>`);
        if (stepLog[i].value == 0) $('#steps-list').append(`<li class='red'><h4>${stepLog[i].dateTime} | ${stepLog[i].value}</h4></li>`);

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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
      }
    });
}

fetchSteps();