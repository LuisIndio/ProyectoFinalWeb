var user =  JSON.parse(localStorage.getItem("usuario"));
if(!user) {
    window.location.href="login.html";
}
var serieId = getParameterByName("serieId");
fetch('http://localhost:3000/api/serie/' + serieId)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => { obtenerDatos(data.serie)});
function obtenerDatos(data) {
        console.log(data);
        let html = "";
        html += "<h2>"+data.nombreserie+"</h2><img src='"+data.urlimagen+"' width='300px' alt='imgSerie'><p>"+data.descripcion+"</p>";
        $("#contenedor").html(html);
}
    
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
