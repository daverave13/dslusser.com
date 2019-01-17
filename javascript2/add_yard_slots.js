
function assignPlantVar() {
  $(".plant-btn").click(function(evt) {
    let plant = evt.target.id;
    console.log(plant);
  });
}

function funcStart() {
  assignPlantVar();
}
