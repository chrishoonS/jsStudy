const windowWidthWide = 700;
const windowWidthSmall = 500;
const body = document.body;

function changeBackgroundColor() {
  const windowWidth = window.innerWidth;

  if (window.innerWidth > windowWidthWide) {
    body.classList.remove("bg-purple");
    body.classList.add("bg-yellow");
  } else if (
    window.innerWidth <= windowWidthWide &&
    windowWidth >= windowWidthSmall
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
