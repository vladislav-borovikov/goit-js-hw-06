const inputMassage = document.querySelector('#validation-input')
console.log(inputMassage)
const massageLangth = inputMassage.getAttribute('data-length')
console.log(massageLangth)

inputMassage.addEventListener('blur', foo)

function foo() {
    const abc = inputMassage.value.length;
    console.log(abc)
    if (abc === +massageLangth) {
        inputMassage.classList.add('valid') &&
            inputMassage.classList.remove('invalid');


    } else inputMassage.classList.add('invalid') &&
        inputMassage.classList.remove('valid');

}