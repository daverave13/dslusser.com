
function assignPlantVar() {
  $(".plant-btn").click(function(evt) {
    //let plant = plant name here
    console.log("success");
    // let plant = $("#ABQ").html();
    let plant = evt.target.id;
    console.log(plant);
  });
}

function funcStart() {
  assignPlantVar();
}
