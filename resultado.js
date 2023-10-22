
document.addEventListener("DOMContentLoaded", function() {
    let queryString=location.search
    queryString = queryString.substring(1)
    document.getElementById("Resultado").innerHTML=queryString
});

function toback(){
    window.location.href="index.html";
}