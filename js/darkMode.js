let darkMode = true
if(localStorage.getItem("darkTheme") == "dark"){
    document.body.classList.remove('light');
}
else if(localStorage.getItem("darkTheme") == "light"){
    document.body.classList.add('light');
}

function setDarkMode(){
    if (localStorage.getItem('darkTheme') == null) {
        localStorage.setItem("darkTheme", "dark")
    }

    if(localStorage.getItem("darkTheme") == "dark"){
        document.body.classList.add('light');
        localStorage.setItem("darkTheme", "light");
    }
    else if (localStorage.getItem("darkTheme") == "light"){
        document.body.classList.remove('light');
        localStorage.setItem("darkTheme", "dark");
    }
}