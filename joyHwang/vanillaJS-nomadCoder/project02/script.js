const windowWidthWide = 900;
const windowWidthSmall = 600;
const body = document.querySelector("body");

function changeBackgroundColor() {
  const windowWidth = window.innerWidth;

  if (window.innerWidth > windowWidthWide) {
    body.classList.add("bg-yellow");
    body.classList.remove("bg-purple");
  } else if (
    window.innerWidth < windowWidthWide &&
    windowWidth > windowWidthSmall
  ) {
    body.classList.remove("bg-yellow", "bg-blue");
    body.classList.add("bg-purple");
  } else {
    body.classList.remove("bg-purple");
    body.classList.add("bg-blue");
  }
}

changeBackgroundColor();
window.addEventListener("resize", changeBackgroundColor);
