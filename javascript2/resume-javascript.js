function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollshow() {
  await sleep(1300);
  $("body").css("overflow-y", "scroll");
}

function funcStart() {
  scrollshow();
}
