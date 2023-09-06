function cambiaNombre() {
    if (document.getElementById('nombre').style.color != "cornflowerblue") {
        document.getElementById('nombre').style.color = "cornflowerblue";
        document.getElementById('nombre').className = "";
        document.getElementById('btnConoceme').className = "btn btn-primary btn-sm"
    } else {
        document.getElementById('nombre').style.color = "darkblue";
        document.getElementById('nombre').className = "display-3";
        document.getElementById('btnConoceme').className = "btn btn-primary"
    }
}