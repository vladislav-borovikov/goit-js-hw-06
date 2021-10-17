

const btnDecrease = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const btnIncrease = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const increaseFoo = () => {
    counterValue -= 1;
    return (valueEl.textContent = counterValue);
};
const decreaseFoo = () => {
    counterValue += 1;
    return (valueEl.textContent = counterValue);
};
btnDecrease.addEventListener("click", increaseFoo);
btnIncrease.addEventListener("click", decreaseFoo);