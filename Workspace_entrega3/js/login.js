//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function guardar(usuario){
    localStorage.setItem('usuario',usuario);
}
function comprobar(){
    let dato = document.getElementById("usuario");
    if ((dato != "") && (document.getElementById("password") !="")){
        guardar(dato.value);
        document.forms.submit();
    }
    else{
        alert("Ingrese algo");
    }
}

document.addEventListener("DOMContentLoaded", function(e){
});



