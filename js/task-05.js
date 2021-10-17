const userName = document.querySelector('#name-output')
const form = document.querySelector('#name-input')



const handleSubmit = () => {
    if (form.value === '') {
        return userName.textContent = 'Anonymous'
    }
    userName.textContent = form.value;

}

form.addEventListener("input", handleSubmit);
