document.querySelectorAll("img.eliminable").forEach(function(imagen){
    imagen.addEventListener("click", function(){
        this.remove();
    });
})

var boton = document.querySelector("#miBoton");

boton.addEventListener("mouseover", function(){
    this.style.backgroundColor = "red";
})

boton.addEventListener("mouseout", function(){
    this.style.backgroundColor = "blue";
})