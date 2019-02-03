const arr = ['1','2','3'];

function populateLinks (arr) {
  for (x in arr) {
    $("#links-target").append(`<h1>${arr[x]}</h1><br>`)
  }
}
