document.querySelector("#date").innerHTML = new Date().toDateString();
document.querySelector("#date").style.textAlign = "center";
document.querySelector("#date").style.backgroundColor = "#3b674b";
document.querySelector("#date").style.color = "black";
document.querySelector("#date").style.padding = ".5em";

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


console.log(day);