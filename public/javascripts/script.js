let colorpicker = document.querySelector("#colorpicker");
let colorpreview = document.querySelector("#colorpreview");


function updateColor(event) {
      colorpreview.style.backgroundColor = event.target.value;
  }

colorpicker.addEventListener("input", updateColor);
