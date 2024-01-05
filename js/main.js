const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".toggle__circle");

toggle.addEventListener("click", () => {
  if (circle.style.transform === "translateX(0px)") {
    circle.style.transform = "translateX(26px)";
    toggle.style.backgroundColor = "#66bb6a";
  } else {
    circle.style.transform = "translateX(0px)";
    toggle.style.backgroundColor = "#ccd";
  }
});
