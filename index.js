// send the contact message to me
function contact(event) {
    // stop auto refreshing because form auto refreshes
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs.sendForm (
        "service_x02yxw8",
        "template_petywfe",
        event.target,
        "EJB9nqNs1cdnkGghz"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly. Here is my email address: pariyar360@gmail.com"
        )
    })
}

// Toggle modal when clicked
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}