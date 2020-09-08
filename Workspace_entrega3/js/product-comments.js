var commentsArray = [];

function showCommentsList(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];
        contador=0;

        htmlContentToAppend += `<p class="font-weight-bold">` + comment.user + `<p>`
        
        for (let e = 0; e < comment.score; e++) {
            htmlContentToAppend += `<span class="fa fa-star checked"></span>`
            contador++;
        }
        for (contador; contador < 5; contador++) {
            htmlContentToAppend += `<span class="fa fa-star"></span>`
        }
        htmlContentToAppend += `<p class="font-italic">`+ comment.description + `</p>`
        htmlContentToAppend += `<p>` + comment.dateTime + `</p>`

        htmlContentToAppend += `<br>`        

        document.getElementById("comments-list").innerHTML = htmlContentToAppend;

    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            comment = resultObj.data;
            showCommentsList(resultObj.data);
        }
    });

    let userName = localStorage.getItem("usuario");
document.getElementById("userName").innerHTML=userName;

});