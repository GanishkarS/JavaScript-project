const changeTextElement = document.getElementById("changeText");
const colorButton = document.getElementById("colorButton");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeTextColor() {
  const randomColor = getRandomColor();
  changeTextElement.style.color = randomColor;
}

colorButton.addEventListener('click', changeTextColor);
