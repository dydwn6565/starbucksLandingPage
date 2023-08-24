const Info = [
  "Yong Cafe electronic receipt event",
  "Change the operting hour at Christmas day",
  "2023 Yong Cafe Planner receipt event",
  "Yong Cafe siren order application version update",
  "Yong Cafe electronic receipt event",
  "Change the operting hour at Christmas day",
  "2022 Yong Cafe Planner receipt event",
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
  awardShowSlides((awardslideIndex += n));
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
  console.log(slideIndex);
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
let counter = 1;
awardShowSlides(awardslideIndex);

function awardShowSlides() {
  let i;
  let slides = document.getElementsByClassName("awardSlides");
  if (awardslideIndex + 5 > slides.length) {
    awardslideIndex = 1;
  }
  if (counter < 1) {
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

  setTimeout(awardShowSlides, 2000); // Change image every 2 seconds
}

// scroll observer

const images = document.querySelectorAll(".img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          `${entry.target.className.split(" ")[0]}-show`
        );

        // console.log(entry);
      } else {
        entry.target.classList.remove(
          `${entry.target.className.split(" ")[0]}-show`
        );
      }
    });
  },
  {
    threshold: 0.1,
  }
);

images.forEach((image) => {
  observer.observe(image);
});

let animationTriggered = false;
let animationTriggeredSeasonalCoffee = false;
let animationTriggeredReserveCoffee = false;
let animationTriggeredFavorite = false;
let animationTriggeredFind = false;
function animateBox() {
  if (!animationTriggered) {
    document
      .getElementById("visual-spoon-image")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 6000,
      });
    document
      .getElementById("carabel-crumble-image")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 5000,
      });
    document
      .getElementById("oatmeal-latte-image")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 4000,
      });

    animationTriggered = true;
  }
}

function animateBoxiceCoffee() {
  // console.log(document.documentElement.scrollTop);
  if (
    1400 <= document.documentElement.scrollTop &&
    !animationTriggeredSeasonalCoffee
  ) {
    document
      .getElementById("season-product-img")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2500,
        }
      );
    document
      .getElementById("season-product-img-top")
      .animate(
        [
          { opacity: 0 },
          { opacity: 0, marginRight: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2500,
        }
      );
    document
      .getElementById("season-product-img-bottom")
      .animate(
        [
          { opacity: 0 },
          { opacity: 0, marginRight: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 3000,
        }
      );
    animationTriggeredSeasonalCoffee = true;
  }
  if (
    1700 <= document.documentElement.scrollTop &&
    !animationTriggeredReserveCoffee
  ) {
    document
      .getElementById("reserve-coffee-logo")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2500,
        }
      );
    document
      .getElementById("reserve-coffee-reserve-coffee")
      .animate(
        [
          { opacity: 0 },
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2500,
        }
      );
    document
      .getElementById("reserve-cofee-description")
      .animate(
        [
          { opacity: 0 },
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 3000,
        }
      );
    animationTriggeredReserveCoffee = true;
  }
  if (
    1950 <= document.documentElement.scrollTop &&
    !animationTriggeredFavorite
  ) {
    document
      .getElementById("favorite-title")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 2000,
      });
    document
      .getElementById("favorite-second")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 2000,
      });
    document
      .getElementById("favorite-third")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 3000,
      });
    document
      .getElementById("favorite-forth")
      .animate([{ opacity: 0 }, { opacity: 0 }, { opacity: 1 }], {
        duration: 3100,
      });
    animationTriggeredFavorite = true;
  }

  if (3400 <= document.documentElement.scrollTop && !animationTriggeredFind) {
    document
      .getElementById("find-store-first-image")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2000,
        }
      );
    document
      .getElementById("find-store-second-image")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginRight: "0px" },
        ],
        {
          duration: 2000,
        }
      );
    document
      .getElementById("find-store-description-first")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2000,
        }
      );
    document
      .getElementById("find-store-description-second")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2000,
        }
      );
    document
      .getElementById("find-store-description-second-container")
      .animate(
        [
          { opacity: 0, marginLeft: "-200px" },
          { opacity: 1 },
          { marginLeft: "0px" },
        ],
        {
          duration: 2000,
        }
      );


    animationTriggeredFind = true;
  }
}
animateBox();

document.addEventListener("scroll", animateBoxiceCoffee);
