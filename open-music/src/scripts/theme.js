const buttonTheme = document.querySelector('.button-style');
const sunIcon = document.querySelector('.sun-icon');
let moonIcon = document.querySelector('.moon-icon');
let root = document.documentElement;
let darkMode = false;

function themeChange () {
    darkMode = !darkMode;
    moonIcon.classList.toggle('moon-icon-none');
    sunIcon.classList.toggle('sun-icon-on');
    root.classList.toggle('dark-mode');
    localStorage.setItem('theme', JSON.stringify(darkMode));
   
    
}

buttonTheme.addEventListener('click', themeChange);

export function themeAnalasys() {
    darkMode = JSON.parse(localStorage.getItem('theme'));
    if(darkMode) {
        root.classList.add('dark-mode');
        moonIcon.classList.add('moon-icon-none');
        sunIcon.classList.add('sun-icon-on');                   
    }
    console.log(darkMode)
}

