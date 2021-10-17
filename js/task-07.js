const controlEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

controlEl.addEventListener('input', changSize)

function changSize() {
    text.style = `font-size:${controlEl.value}px`

}