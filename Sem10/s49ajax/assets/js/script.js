// Consumo de API con JQuery

// Obtener urls con id aleatorio
function generateUrl(){
    let id = Math.round(Math.random()*500);
    return `https://picsum.photos/id/${id}/info`;

  }

// Funcion para consumir API
function getPicture() {
    $.ajax({
        type: "GET",
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function(data){
            renderPicture(data);
        },
    });
}
// Renderizar la imagen
function renderPicture(data) {
//Muestro algunos datos    
    console.log(data);
    console.log(data["author"]);
//Creo una card con html desde js con JQuery 
// Creo un div  
    let div = $("<div></div>").addClass("card");

//Creo una imagen y agrego su src
    let img = $("<img />").attr("src", data.download_url).addClass("card-img");
//Añado el img al div con append
    div.append(img);
//Creo el autor 
    let autor = $(`<h3>${data.author}</h3>`).addClass("card-title");
    div.append(autor);
//Agrego el contenido a pictures container
    $("#pictures-container").append(div);
}

$(document).ready(function (){
    for (let i = 0; i <10; i++){
        getPicture();

    }
});