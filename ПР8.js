const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexColor;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  // Випадковий вибір кольору з масиву colors
  // const randomColor = getRandomColor();

  // Випадковий вибір кольору з hex-кодів
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
});
