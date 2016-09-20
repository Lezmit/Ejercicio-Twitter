window.addEventListener("load",function(){
	var boton = document.getElementById("twittear");
	boton.addEventListener("click",function(e){
		e.preventDefault();
		var anclaTexto = document.getElementById("msg").value;
		var nuevoAncla = document.createElement("div");
		nuevoAncla.innerHTML=anclaTexto;
		var resultado= document.getElementById("resultado");
		resultado.insertBefore(nuevoAncla,resultado.childNodes[0]);
	});
	
});