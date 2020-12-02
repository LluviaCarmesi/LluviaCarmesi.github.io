function easterEggs() {
  var input = document.getElementById("input").value
  switch(input) {
    case "0":
      window.location.replace("resume.html");
      break;
    case "1":
      window.location.replace("index.html");
      break;
  }
}
  function easterEggsEnter(input) {
    if(event.key == 'Enter') {
      switch(input.value) {
        case "0":
          window.location.replace("resume.html");
          break;
        case "1":
          window.location.replace("index.html");
          break;
    }
  }
}
