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
			if(longitudCaracteres<120){
				document.getElementById("contador-caracteres").style.color="#bdbdbd";
			}
			else if(longitudCaracteres>=120 && longitudCaracteres<130 ){
				document.getElementById("contador-caracteres").style.color="black";
			}
			else if(longitudCaracteres>=130 && longitudCaracteres<140){
				document.getElementById("contador-caracteres").style.color="#ff6e40";
			}
		}
		else{
			contadorTexto.innerHTML=caracter-longitudCaracteres;
			
			if(longitudCaracteres >140){
				boton.disabled=true;
				document.getElementById("contador-caracteres").style.color="red";
			}

		}
	});
});