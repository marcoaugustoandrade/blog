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
    let ck = document.cookie.split(';');
    ck.find();
}  