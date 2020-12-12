var url = 'http://localhost:3000/api/usuario';
function login() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("contraseña").value;
    let objUsuario = {
        usuario: username,
        password: password
    }
    fetch(url+ "/login", {
    method: 'POST',
    body: JSON.stringify(objUsuario),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        verificar(response);
    });

}
function verificar(response){
    console.log(response);
    if(!response.status){
        alert(response.error); return;
    }
    if(!response.usuario) {
        alert("usuario no registrado!!");
        return;
    }
    localStorage.setItem("usuario", JSON.stringify(response.usuario));
    window.location.href ="catalogo.html";
}

function registro() {
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("contraseñaR").value;
    let objUsuario = {
        nombreCompleto: nombreCompleto,
        usuario: username,
        password: password
    }
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(objUsuario),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        alert("Registro Exitoso");  
        localStorage.setItem("usuario", JSON.stringify(response.usuario));
        window.location.href ="catalogo.html";
    });

}
var user =  JSON.parse(localStorage.getItem("usuario"));
if(user) {
    window.location.href="catalogo.html";
}