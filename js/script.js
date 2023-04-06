

// Nav Bar Toggle Theme Setting (light/dark mode)


// Desktop View
document.querySelector('#toggleTheme').addEventListener('toggle',themeToggle);

function themeToggle(){
    document.querySelector('#sunOrMoon').innerHTML = '<i class="fa-solid fa-sun-bright"></i>'
}