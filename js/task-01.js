const items = document.querySelectorAll('.item')

console.log('Number of categories:  ', items.length)


const itemEl = categories.querySelectorAll('ul')
itemEl.forEach(item => {
    const text = item.previousElementSibling
    console.log('Category: ', text.textContent)
    const abc = item.querySelectorAll('li')
    console.log('Elements: ', abc.length)
})
