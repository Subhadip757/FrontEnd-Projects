let index = 0;

function showImage(i) {
  index += i;

  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active";
}

function autoSlide() {
  showImage(1); // Auto slide to the next image
}

window.addEventListener("load", function() {
  showImage(index); // Show the initial image
  setInterval(autoSlide, 1500); // Change images every 2 seconds (adjust the interval as needed)
});
