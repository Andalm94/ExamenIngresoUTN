/*
Bienvenidos.
Debemos ingresar los votos de las urnas en las escuelas para las elecciones:
Numero de urna (Validos para esta seccion electoral 3000 - 3100)
Localidad de la urna ("Avell", "Lanus", "Quilmes")
Cantidad de personas que votaron urna (Maximo de votantes 300)
Cantidad de votos partido "A"
Cantidad de votos partido "B"
Cantidad de votos "Blanco"
Cantidad de votos "Impugnados"

Informes:
-Informar urna con mayor cantidad de votos en Blanco e Impugnados
-Informar partido con mayor cantidad de votos en total
-Informar Localidad con mayor número de personas que acudieron a la elección
*/
function mostrar()
{
    let numeroUrnaIngresada;
    let localidadIngresada;
    let cantidadVotantes;
    let votosPartidoA;
    let votosPartidoB;
    let votosPartidoC;
    let votosEnBlanco;
    let votosImpugnados;

    let flagVotosEnBlanco = true;
    let flagVotosImpugnados = true;
    let votosBlancoMax = 0;
    let votosImpugnadosMax = 0;
    let urnaVotosBlancoMax;
    let urnaVotosImpugnadosMax;

    let acumuladorVotosA = 0;
    let acumuladorVotosB = 0;
    let acumuladorVotosC = 0;
    let acumuladorVotosBlanco = 0;
    let acumuladorVotosImpugnados = 0;

    let votantesAvell = 0;
    let votantesLanus = 0;
    let votantesQuilmes = 0;




    let respuesta = "si";
    
    while (respuesta == "si"){

        do{
            numeroUrnaIngresada = parseInt(prompt("¿Cuál es el número de urna ingresado?"));
        } while (numeroUrnaIngresada < 3000 || numeroUrnaIngresada > 3100);
    
        do{
            localidadIngresada = prompt("Ingrese la localidad:");
        }while (localidadIngresada != "Avell" && localidadIngresada != "Lanus" && localidadIngresada != "Quilmes");

        do{
            cantidadVotantes = parseInt(prompt("Ingrese el numero de votantes de la urna:"));
        }while (cantidadVotantes > 300);

        votosPartidoA = parseInt(prompt("Ingrese los votos del partido A:"));
        acumuladorVotosA += votosPartidoA;

        votosPartidoB = parseInt(prompt("Ingrese los votos del partido B:"));
        acumuladorVotosB += votosPartidoB;

        votosPartidoC = parseInt(prompt("Ingrese los votos del partido C:"));
        acumuladorVotos += votosPartidoC;

        votosEnBlanco = parseInt(prompt("Ingrese los votos en blanco:"));
        acumuladorVotosBlanco += votosEnBlanco;

        votosImpugnados = parseInt(prompt("Ingrese los votos impugnados:"));
        acumuladorVotosImpugnados += votosImpugnados;


        if (flagVotosEnBlanco == true || votosEnBlanco > votosBlancoMax){
           votosBlancoMax = votosEnBlanco;
           urnaVotosBlancoMax = numeroUrnaIngresada;
           flagVotosEnBlanco = false;
        }

        if (flagVotosImpugnados == true || votosImpugnados > votosImpugnadosMax){
            votosImpugnadosMax = votosImpugnados;
            urnaVotosImpugnadosMax = numeroUrnaIngresada;
            flagVotosImpugnados = false;
        }

        switch (localidadIngresada){
            case "Avell":
                votantesAvell += cantidadVotantes;
                break;
            case "Lanus":
                votantesQuilmes += cantidadVotantes;
                break;
            default:
                votantesLanus += cantidadVotantes;
                break;

        }
               
    }

    document.write("La urna con mayor cantidad de votos en blanco es la numero " + urnaVotosBlancoMax + " .<br>"); //A
    document.write("La urna con mayor cantidad de votos impugnados es la numero " + urnaVotosImpugnadosMax + " .<br>"); //A


}  // fin funcion

