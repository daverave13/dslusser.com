const arr = ['1','2','3'];

function populateLinks (arr) {
  for (x in arr) {
    console.log(`<h1>${arr[x]}</h1><br>`);
  }
}
