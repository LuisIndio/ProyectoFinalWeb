var user =  JSON.parse(localStorage.getItem("usuario"));
if(!user) {
    window.location.href="login.html";
}
