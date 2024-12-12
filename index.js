const login = function(){
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value

    if(name == "Gustavo" && password == "Bravin00"){
        window.location.href = "home.html";
    }

}
