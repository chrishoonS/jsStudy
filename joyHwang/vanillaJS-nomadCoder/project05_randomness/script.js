const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.body;
const button = document.querySelector("#button");

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(body, color1, color2) {
    body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
}


button.addEventListener("click", function() {
    const chosenColor1 = getRandomColor();
    const chosenColor2 = getRandomColor();

    console.log("First color:", chosenColor1)
    console.log("Second color:", chosenColor2)

    changeColor(body, chosenColor1, chosenColor2);
});