const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const faSolid = document.querySelector('.fa-solid');

hamburger.addEventListener("click", () => {
    menu.classList.toggle ('hidden');
    faSolid.classList.toggle('fa-xmark')
})