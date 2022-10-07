const Info = [
  "Starbucks electronic recipt event",
  "Change the operting hour at Christmas day",
  "2022 Starbucks Planner recipt event",
  "Starbucks siren order application version update",
  "Starbucks electronic recipt event",
  "Change the operting hour at Christmas day",
  "2022 Starbucks Planner recipt event",
];

let initalValue = 0;
function slider() {
  if (initalValue < 6) {
    sliderShow(initalValue);
    initalValue += 1;
  } else {
    sliderShow(initalValue);
    initalValue = 0;
  }
}

function sliderShow(infoNumber) {
  setTimeout(function () {
    document.getElementById("silder-show-detail").innerHTML = Info[infoNumber];
    slider();
  }, 2000);
}

slider();

// image slide

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  awardShowSlides(awardslideIndex+=n);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  awardShowSlides((awardslideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.order = i + 1;
    slides[i].style.opacity = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides.length - slideIndex === 1) {
    slides[slideIndex - 1].style.order = 1;
    slides[slideIndex].style.order = 2;
    slides[0].style.order = 3;

    slides[slideIndex - 1].style.opacity = 0.5;
    slides[0].style.opacity = 0.5;

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[0].style.display = "block";
  } else if (slides.length - slideIndex === 0) {
    slides[slideIndex - 1].style.order = 1;
    slides[0].style.order = 2;
    slides[1].style.order = 3;

    slides[slideIndex - 1].style.opacity = 0.5;
    slides[1].style.opacity = 0.5;
    slides[slideIndex - 1].style.display = "block";
    slides[0].style.display = "block";
    slides[1].style.display = "block";
  } else {
    slides[slideIndex - 1].style.opacity = 0.5;
    slides[slideIndex + 1].style.opacity = 0.5;
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
  }
  dots[slideIndex - 1].className += " active";
}



let awardslideIndex = 1;
awardShowSlides(awardslideIndex);

function awardShowSlides(n) {
  
  let i;
  let slides = document.getElementsByClassName("awardSlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      awardslideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  awardslideIndex++;

  slides[awardslideIndex - 1].style.display = "block";
  slides[awardslideIndex].style.display = "block";
  slides[awardslideIndex + 1].style.display = "block";
  slides[awardslideIndex + 2].style.display = "block";
  slides[awardslideIndex + 3].style.display = "block";
  slides[awardslideIndex + 4].style.display = "block";
  
  
  setTimeout(awardShowSlides, 2000); // Change image every 2 seconds
}
