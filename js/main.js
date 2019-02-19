function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "myNav") {
      x.className += " responsive";
    } else {
      x.className = "myNav";
    }
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myNav").style.top = "0";
  } else {
    document.getElementById("myNav").style.top = "-70px";
  }
}  