function changeTheme(){
    let style = document.querySelector('#style');
    if (style.href.search('dark.css')){
        style.href = '/assets/css/light.css';
    } else {
        style.href = '/assets/css/dark.css';
    }
}

function setCookie(){
    document.cookie =  "cookies=true";
}

function verifyCookie(){
    let cookies = document.cookie.split(';');
    for (i = 0; i < cookies.length; i++){
        if (cookies[i] == "cookies=true"){
            document.querySelector(".cookies").style.display = "none";
        }
    }
}  