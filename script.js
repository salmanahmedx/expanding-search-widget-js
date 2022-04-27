const icon = document.querySelector(".icon")
const input = document.querySelector(".input")

let expand = false;

icon.addEventListener('click', e => {
    if (!expand) {
        input.style.width = "20vw";
        expand = true;
    } else {
        input.style.width = "0vw"
        expand = false;
    }
})
