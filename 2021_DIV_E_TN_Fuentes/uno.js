/*
Andres Almeida, DIV- E

Debemos realizar la carga de 5(cinco) participantes de una competencia de Enduro
de cada uno se deben cargar los siguientes datos:
-el nombre del participante,
-la categoría (validar "MX1", "MX2" o "MX3"),
-el tiempo (validar entre 10 y 30),
-la cantidad de vueltas (no puede ser 0 o negativo y no debe superar las 20 vueltas),
-el tipo de cilindrada("250", "500" o "750" ),
-y la Marca.
Se debe Informar al usuario lo siguiente:
	a) El promedio de cantidad de vueltas por categoría
	b) El tipo de cilindrada con más cantidad de vueltas en el total de la carrera
	c) Cuántas motos de categoría "MX1" con menos de 15 vueltas (inclusive) hubo al final de la carrera
	d) La marca y nombre del participante con menor tiempo.
*/
function mostrar()
{
	let nombreIngresado;
	let categoriaIngresada;
	let tiempoIngresado;
	let vueltasIngresadas;
	let cilindradaIngresada;
	let marcaIngresada;

	let contadorMX1 = 0;
	let contadorMX2 = 0;
	let contadorMX3 = 0;
	let acumuladorDeVueltasMX1 = 0;
	let acumuladorDeVueltasMX2 = 0;
	let acumuladorDeVueltasMX3 = 0;
	let promedioVueltasMX1 = 0;
	let promedioVueltasMX2 = 0;
	let promedioVueltasMX3 = 0;

	let vueltasMax = 0
	let cilindradaConMasVueltas;

	let motosMX1conPocasVueltas = 0;

	let flag = true;
	let mejorTiempo = 0;
	let marcaMejorTiempo;
	let nombreMejorTiempo;




	for(let i=0; i < 5; i++){
		
		nombreIngresado = prompt("Ingrese el nombre del participante:");
		
		do{
			categoriaIngresada = prompt("Ingrese la categoria:");
		}while(categoriaIngresada != "MX1" && categoriaIngresada != "MX2" && categoriaIngresada != "MX3");
		
		do{
			tiempoIngresado = parseInt(prompt("Ingrese el tiempo:"));
		} while(tiempoIngresado < 10 || tiempoIngresado > 30);

		do{
			vueltasIngresadas = parseInt(prompt("Ingrese la cantidad de vueltas:"))
		}while(vueltasIngresadas < 1 || vueltasIngresadas > 20);

		do{
			cilindradaIngresada = prompt("Ingrese el tipo de cilindrada:");
		}while(cilindradaIngresada != "250" && cilindradaIngresada != "500" && cilindradaIngresada != "750");
	
		marcaIngresada = prompt("Ingrese la marca:")
	
	
		switch (categoriaIngresada){ 
			case "MX1":
				if (vueltasIngresadas <= 15){
					motosMX1conPocasVueltas ++; 
				}
				contadorMX1 ++;
				acumuladorDeVueltasMX1 += vueltasIngresadas;
				break;
			case "MX2":
				contadorMX2 ++;
				acumuladorDeVueltasMX2 += vueltasIngresadas;
				break;
			default:
				contadorMX3 ++;
				acumuladorDeVueltasMX3 += vueltasIngresadas;
				break;
		}
	
		if (vueltasIngresadas > vueltasMax){
			cilindradaConMasVueltas = cilindradaIngresada;
		}
		
		if (flag == true || tiempoIngresado < mejorTiempo){
			flag = false;
			mejorTiempo = tiempoIngresado;
			marcaMejorTiempo = marcaIngresada;
			nombreMejorTiempo = nombreIngresado;
		}
	}

	promedioVueltasMX1 = acumuladorDeVueltasMX1/contadorMX1; 
	promedioVueltasMX2 = acumuladorDeVueltasMX2/contadorMX2;
	promedioVueltasMX3 = acumuladorDeVueltasMX3/contadorMX3;


	document.write("La categoria MX1 ha dado un promedio de " + promedioVueltasMX1 + " cantidad de vueltas.<br>"); //A
	document.write("La categoria MX2 ha dado un promedio de " + promedioVueltasMX2 + " cantidad de vueltas.<br>"); //A
	document.write("La categoria MX3 ha dado un promedio de " + promedioVueltasMX3 + " cantidad de vueltas.<br>"); //A

	document.write("El tipo de cilindrada con mas vueltas es " + cilindradaConMasVueltas + ".<br>"); //B

	document.write("De la categoría MX1, " + motosMX1conPocasVueltas + " motos dieron menos de 15 vueltas.<br>"); //C

	document.write("El participante con menor tiempo ha sido " + nombreMejorTiempo + " y su marca es " + marcaMejorTiempo + ".<br>"); //D

}