let slider = document.getElementById("myRange");
let output = document.getElementById("ammount");
let bookmark = document.querySelector(".bookmarkIcon");

output.textContent = slider.value
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}


let bookmarked = () => {
  //check if bookmarked class has already been added
  if (bookmark.classList.contains('bookmarked')) {
    //remove bookmarked class
    bookmark.classList.remove('bookmarked');
  } else {
    //otherwise add bookmarked class
    bookmark.classList.add('bookmarked');
  }
}
//if button is clicked trigger event
bookmark.addEventListener('click', bookmarked);
