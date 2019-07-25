function changeTheme(){
    
    verifyTheme();
    let cookies = document.cookie.split(';');
    
    for (i = 0; i < cookies.length; i++){
        
        if (cookies[i] == "style=dark") {
            style.href = '/assets/css/light.css';
            document.cookie = "style=light";
            console.log("Mudando para Light");
        }
        if (cookies[i] == " style=dark") {
            style.href = '/assets/css/light.css';
            document.cookie = "style=light";
            console.log("Mudando para Light");
        }
        if (cookies[i] == "style=ligth"){
            style.href = '/assets/css/dark.css';
            document.cookie = "style=dark";
            console.log("Mudando para Dark");
        }
        if (cookies[i] == " style=ligth"){
            style.href = '/assets/css/dark.css';
            document.cookie = "style=dark";
            console.log("Mudando para Dark");
        }
    }
}

// OK
function verifyTheme(){
    
    let cookies = document.cookie.split(';');
    let count = 0;
    for (i = 0; i < cookies.length; i++){
        if (cookies[i] == "style=ligth" || cookies[i] == " style=light" || cookies[i] == "style=dark" || cookies[i] == " style=dark"){
            count++;
        } 
    }
    if (count == 0) document.cookie = "style=dark";
    console.log(count);
}

function setCookie(){
    document.cookie = "cookies=true";
    verifyCookie();
}

function verifyCookie(){
    let cookies = document.cookie.split(';');
    for (i = 0; i < cookies.length; i++){
        if (cookies[i] == "cookies=true"){
            document.querySelector(".cookies").style.display = "none";
        }
    }
}  