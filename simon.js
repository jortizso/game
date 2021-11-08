var intentos = 1;
function colorear () {
	var azarcero = (Math.random()*3).toFixed(0);
	switch (azarcero){
		case "0":
			document.getElementById("cero").style.backgroundColor="#ec1c7e";
			document.getElementById("cero").innerHTML = "&#9827;";

		break;
		case "1":
			document.getElementById("cero").style.backgroundColor="#08b9df";
			document.getElementById("cero").innerHTML = "&#9829;";
		break;
		case "2":
			document.getElementById("cero").style.backgroundColor="#ff4400";
			document.getElementById("cero").innerHTML = "&#9824;";
		break;
		case "3":
			document.getElementById("cero").style.backgroundColor="#00ff00";
			document.getElementById("cero").innerHTML = "&#9830;";
		break;
	}///
	var azaruno = (Math.random()*3).toFixed(0);
	switch (azaruno){
		case "0":
			document.getElementById("uno").style.backgroundColor="#ec1c7e";
			document.getElementById("uno").innerHTML = "&#9827;";
		break;
		case "1":
			document.getElementById("uno").style.backgroundColor="#08b9df";
			document.getElementById("uno").innerHTML = "&#9829;";
		break;
		case "2":
			document.getElementById("uno").style.backgroundColor="#ff4400";
			document.getElementById("uno").innerHTML = "&#9824;";
		break;
		case "3":
			document.getElementById("uno").style.backgroundColor="#00ff00";
			document.getElementById("uno").innerHTML = "&#9830;";
		break;
	}///
	var azardos = (Math.random()*3).toFixed(0);
	switch (azardos){
		case "0":
			document.getElementById("dos").style.backgroundColor="#ec1c7e";
			document.getElementById("dos").innerHTML = "&#9827;";
		break;
		case "1":
			document.getElementById("dos").style.backgroundColor="#08b9df";
			document.getElementById("dos").innerHTML = "&#9829;";
		break;
		case "2":
			document.getElementById("dos").style.backgroundColor="#ff4400";
			document.getElementById("dos").innerHTML = "&#9824;";
		break;
		case "3":
			document.getElementById("dos").style.backgroundColor="#00ff00";
			document.getElementById("dos").innerHTML = "&#9830;";
		break;
	}///

	if ((azarcero==azaruno)&&(azarcero==azardos)) {
		document.getElementById("texto").value="Ganaste! en "+intentos+" intentos";
		intentos = 1;
		alert("Ganaste!");
	} else {
		document.getElementById("texto").value="Intentalo Otra Vez";
		intentos++;
	}
}
function salir () {
	if (confirm("Desea salir?") == true) {
		alert("Regresa Pronto");
		window.close();
	}
}