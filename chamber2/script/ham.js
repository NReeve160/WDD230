const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const day = new Date().getDay();

if (day == 1) {
    document.querySelector(".announcement").style.display = "block";
}
else if (day == 2) {
    document.querySelector(".announcement").style.display = "block";
}