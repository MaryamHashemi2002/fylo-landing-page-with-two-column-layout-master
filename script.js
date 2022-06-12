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
