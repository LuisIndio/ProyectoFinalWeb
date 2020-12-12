fetch('http://localhost:3000/api/series')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(data => { obtenerDatos(data)});

function obtenerDatos(data){
    console.log(data);
    let html = "";
    let lista = data.series;
    for (let index = 0; index < lista.length; index++) {
        const item = lista[index];
        html += "<div class='pelicula1'><a title='"+item.nombreserie+"' href='detalle.html?serieId="+item.serieid+"'><img src='"+item.urlimagen+"' alt='accion1' width='200px'/></a></div>";
    }
    $("#lasSeries").html(html);
}
