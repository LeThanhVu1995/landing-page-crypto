$(".team-gallery").slick({
  dots: false,
  slidesToShow: 1,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  arrows: false,
  initialSlide: 3,
  centerPadding: "200px",
  asNavFor: ".team-description-list",
});

$(".team-description-list").slick({
  dots: true,
  slidesToShow: 1,
  infinite: true,
  arrows: true,
  initialSlide: 3,
  focusOnSelect: true,
  asNavFor: ".team-gallery",
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/right.svg "/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/left.svg "/></button>`,
});
$(document).ready(function () {
  $("#btn_menu_open").on("click", () => {
    $(".mb-navigation").show();
  });

  $("#btn_menu_close").on("click", () => {
    $(".mb-navigation").hide();
  });

  const scrollTimeline = document.querySelector(".timeline-scroll");

  scrollTimeline.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollTimeline.scrollLeft += evt.deltaY;
  });
});

const swiper = new Swiper(".feature-list", {
  grabCursor: false,
  slidesPerView: 1,
  nextButton: ".nav-pre",
  prevButton: ".nav-next",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-pre",
  },
  breakpoints: {
    800: {
      width: 357,
      spaceBetween: 32,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
