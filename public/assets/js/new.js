let prevScrollpos = window.pageYOffset;

const first = document.querySelector(".loader-container");
const second = document.body;
window.onload = (e) => {
  document.getElementById("mainNextDiv").classList.add("d-none");
  setTimeout(() => {
    $(".loader-container").addClass("d-none");
    document.getElementById("mainNextDiv").classList.remove("d-none");

    $(".mainNextDiv").css({ transition: "all 0.5s ease-in-out" });
  }, 700);
};

// const images = document.getElementsByClassName('ukiyo');
// new Ukiyo(images);
