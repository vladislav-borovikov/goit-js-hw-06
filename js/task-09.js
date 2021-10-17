function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color')
const color = document.querySelector('.color')

changeBtn.addEventListener('click', foo)

function foo() {
  color.textContent = getRandomHexColor()
  document.body.style.background = getRandomHexColor()
}