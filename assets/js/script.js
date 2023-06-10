let showMenu = false; // Declaro variable

function showHiddenMenu(){ // Funcion para ocultar y mostrar menu
    if (showMenu) {
        document.getElementById("hidden-nav").classList = ""; // Crea la clase "" 
        showMenu = false;
    } else {
        document.getElementById("hidden-nav").classList = "show-nav"; // Crea la clase "show-menu" 
        showMenu = true; 
    }
}

function selection(){ // Funcion oculta menu al seleccionar una opcion
    document.getElementById("hidden.nav").classList = "";
    showMenu = false;
}