// const searchBtn = document.querySelector(".search");

// function show (){

// }

// searchBtn.addEventlistener(click, show);

let slider = document.getElementById("myRange");
let output = document.getElementById("ammount");
output.textContent = slider.value
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
