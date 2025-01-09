// COUNTER FOR THE DATA COME ON LOAD

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 5, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 6, duration: 3000 });
$("#number3").jQuerySimpleCounter({ end: 100, duration: 2000 });
$("#number4").jQuerySimpleCounter({ end: 8, duration: 2500 });
$("#number5").jQuerySimpleCounter({ end: 50, duration: 3000 });
$("#number6").jQuerySimpleCounter({ end: 150, duration: 3500 });
$("#number7").jQuerySimpleCounter({ end: 15, duration: 4000 });
$("#number8").jQuerySimpleCounter({ end: 3, duration: 4500 });
$("#number9").jQuerySimpleCounter({ end: 150, duration: 5000 });

// Header's Navbar hide on scroll

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let navbarElement = document.getElementById("navbar");

  // console.log("first", prevScrollpos, currentScrollPos);
  if (currentScrollPos === 0) {
    if (navbarElement) {
      navbarElement.style.width = "100%";
      navbarElement.style.background = "#000000";
      navbarElement.style.transition = "all 0.5s ease-in";
      // navbarElement.className = navbarElement.className.replace(
      //   " expanded",
      //   ""
      // );
      // document.getElementById("headerNav").classList.remove("d-none");
      // document.getElementById("headerTogglebtn").classList.add("hideMenu");
    }
  } else {
    if (navbarElement) {
      navbarElement.style.width = "100%";
      navbarElement.style.background = "#000000";
      navbarElement.style.transition = "all 0.5s ease-in";
      // if (navbarElement.className.indexOf("expanded") === -1) {
      //   navbarElement.className += " expanded";
      // }
      // document.getElementById("headerNav").classList.add("d-none");
      // document.getElementById("headerTogglebtn").classList.remove("hideMenu");
    }
  }

  // prevScrollpos = currentScrollPos;
};
// new Ukiyo("images");
// const scrollContainer = document.querySelector("main");

// const scroll = new LocomotiveScroll({
//   el: scrollContainer,
//   smooth: true,
//   lerp: 0.03,
// });

// scroll.on("scroll", (e) => {
//   scrollContainer.style.backgroundColor =
//     "hsl(" + 100 + e.scroll.y / 5 + ",40%,30%)";
// });

// =======================================
// global - capability - centre slider js
// =======================================

// $(".img-screen").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true,
//   useTransform: true,
//   asNavFor: ".img-nav",
//   dots: false,
//   arrows: false,
// });

// $(".img-nav").slick({
//   asNavFor: ".img-screen",
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   dots: false,
//   arrows: false,
//   focusOnSelect: true,
//   vertical: true,
// });

// $(".client-words").slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1.4,
//   // centerMode: true,
//   slidesToScroll: 1,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });


