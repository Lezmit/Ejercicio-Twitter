window.addEventListener("load",function(){
	var boton = document.getElementById("twittear");
	var anclaTexto = document.getElementById("msg");
	var contadorTexto=document.getElementById("contador-caracteres");
	var caracter=contadorTexto.innerHTML=140;
		
	boton.addEventListener("click",function(e){
		e.preventDefault();
		textTwuiter=anclaTexto.value;
		var nuevoAncla = document.createElement("div");
		nuevoAncla.innerHTML=textTwuiter;
		var resultado= document.getElementById("resultado");
		resultado.insertBefore(nuevoAncla,resultado.childNodes[0]);
		boton.disabled=true;
		anclaTexto.value="";
	});

	anclaTexto.addEventListener("keyup",function(){
		boton.disabled=false;  
		var longitudCaracteres = anclaTexto.value.length;
		if(longitudCaracteres<=caracter){
			contadorTexto.innerHTML=caracter-longitudCaracteres;
		}
		else{
			contadorTexto.innerHTML=caracter-longitudCaracteres;
		}
	});
		
});