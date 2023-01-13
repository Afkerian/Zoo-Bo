var element = document.getElementById("demo-aside");
var className = getRandomClass();
element.className += " " + className;

function getRandomClass() {
    var randomNumber = Math.random();
    var className;
    
    switch (true) {
      case (randomNumber < 0.25):
        className = "offcanvas-start";
        break;
      case (randomNumber < 0.5):
        className = "offcanvas-end";
        break;
      case (randomNumber < 0.75):
        className = "offcanvas-top";
        break;
      default:
        className = "offcanvas-start";
    }
    
    return className;
  }