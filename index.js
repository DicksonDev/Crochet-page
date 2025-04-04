//////Declarando variables ///////////

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");


///// Ejecutando funciones /////

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

////// funcion para mostrar el buscador //////

function mostrar_buscador(){
    bars_search.style.top= "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}


//// Funcion para ocultar el buscador /////

function ocultar_buscador(){
    bars_search.style.top = "-86px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}

//// Creando filtrado de busqueda /////

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);


function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    /// Recorriendo elementos a filtrar mediante los "li" /////
    
    for (i = 0; i < li.length; i++) {
        
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText; 

        if(textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none"
        }
    }
}