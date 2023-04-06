

// Nav Bar Toggle Theme Setting (light/dark mode)


// Desktop View
document.querySelector('#toggleTheme').addEventListener("click",themeSwitch);
document.querySelector('#toggleThemeMobile').addEventListener("click",themeSwitchMobile);


const htmlTheme = document.getElementById('webpage')


function themeSwitch(){
    
    let themeRet = htmlTheme.getAttribute('data-theme')

    console.log(themeRet)

    if(themeRet === 'dark'){
        
        htmlTheme.setAttribute('data-theme','emerald')
    }else{
        htmlTheme.setAttribute('data-theme','dark')
    }
    
}

function themeSwitchMobile(){
    
    let themeRet = htmlTheme.getAttribute('data-theme')

    console.log(themeRet)

    if(themeRet === 'dark'){
        
        htmlTheme.setAttribute('data-theme','emerald')
    }else{
        htmlTheme.setAttribute('data-theme','dark')
    }
    
}