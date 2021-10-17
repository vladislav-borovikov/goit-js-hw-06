const formEl = document.querySelector('.login-form')

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Fill in all the fields");
    }
    let data = {
        email: email.value,
        Password: password.value
    }
    console.log(data)
    event.currentTarget.reset();
}