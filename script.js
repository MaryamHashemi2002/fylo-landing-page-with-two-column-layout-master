var demo = document.getElementById("demo");
var input = document.getElementById("input");
function showError() {
  if (input.value == "example@fylo.com") {
    demo.innerHTML = "succeed!";
    demo.style.color = "green";
    input.style.border = "1px solid blue";
  } else {
    demo.innerHTML = "Please check your Email!";
    demo.style.color = "red";
    input.style.border = "1px solid red";
  }
  return 0;
}

// var gallery = document.getElementById("gallery");
// var slider = document.getElementById("slider");

// var pos = 0;

// function move() {
//   if (pos > -300) {
//     pos = pos - 100;
//     gallery.style.left = pos + "%";
//   } else if (pos == -300) {
//     pos = 0;
//     gallery.style.left = pos + "%";
//   } else if (pos <= 0) {
//     pos = pos + 100;
//     gallery.style.right = pos + "%";
//   }

//   return 0;
// }
