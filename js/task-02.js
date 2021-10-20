const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const ingriirent = []

ingredients.forEach(ingredient => {
  const liElement = document.createElement('li')
  liElement.textContent = ingredient
  liElement.classList.add('item')
  ingriirent.push(liElement)
})

list.append(...ingriirent)
console.log(list)
