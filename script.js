// Get all the accordion elements
var accordions = document.getElementsByClassName("section-three-text");

// Add click event listeners to each accordion
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.querySelector(".content");
    var image = this.querySelector(".i img");
    if (content.style.display === "block") {
      content.style.display = "none";
      image.src = "Icon-down.svg"; // Change the image source to the down arrow
    } else {
      content.style.display = "block";
      image.src = "Icon-up.svg"; // Change the image source to the up arrow
    }
  });
}







