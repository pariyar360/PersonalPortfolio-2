let isModalOpen = false;
let isDarkTheme = false;
let scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    // to get the x and y coordinates of the mouse
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleTheme() {
    if (!isDarkTheme) {
        isDarkTheme = true
        return document.body.classList += " dark-theme"
    }
    isDarkTheme = false
    document.body.classList.remove("dark-theme")
}

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
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}