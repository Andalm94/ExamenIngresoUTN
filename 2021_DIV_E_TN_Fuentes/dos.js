/*
Almeida Andres, DIV - E

Punto - 2

Realizar el algoritmo que permita ingresar los datos de las ventas
on-line de un sitio de compra-venta, los datos solicitados son:
-usuario
-Sexo ( femenino , masculino , no binario)
-edad (validar)
-Tipo producto("tv";"pc";"celular")
-precio(mas de cero y menos de 100000)
-cantidad vendida (entre 0 y 10)
Se pueden ingresar ventas hasta que el usuario desee.
Por document.write, se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El promedio de cantidad de productos de tipo "tv" vendidas
b) El nombre del mas joven de los usuarios
c) El promedio de precio por sexo
d) La edad y nombre del usuario que vendió mas celulares
*/

function mostrar()
{
    let usuarioIngresado;
    let sexoIngresado;
    let edadIngresada;
    let productoIngresado;
    let precioIngresado;
    let cantidadIngresada;

    let contadorVentasTv = 0;
    let ventasTvTotales = 0;
    let promedioVentasTv = 0;

    let flag = true;
    let edadMasJoven = 0;
    let usuarioMasJoven;

    let contadorVentasFemeninas = 0;
    let contadorVentasMasculinas = 0;
    let contadorVentasNoBinario = 0;
    let acumuladorVentasFemeninas = 0;
    let acumuladorVentasMasculinas = 0;
    let acumuladorVentasNoBinario = 0;
    let promedioVentasFemeninas = 0;
    let promedioVentasMasculinas = 0;
    let promedioVentasNoBinario = 0;

    let respuesta = "si";

    let flagCelulares = true;
    let ventasMaxCelulares = 0;
    let nombreMaxCelulares;
    let edadMaxCelulares;

    while (respuesta == "si"){

        usuarioIngresado = prompt("Ingrese el usuario:");

        do{
            sexoIngresado = prompt("Ingrese el sexo (femenino/masculino/no binario):");
        }while(sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "no binario");

        do{
            edadIngresada = parseInt(prompt("Ingrese su edad"));
        }while(edadIngresada < 18 || edadIngresada > 120);

        do{
            productoIngresado = prompt("Ingrese el producto:");
        }while(productoIngresado != "tv" && productoIngresado != "pc" && productoIngresado != "celular");
        
        do{
            precioIngresado = parseFloat(prompt("Ingrese el precio"));
        }while(precioIngresado <= 0 || precioIngresado > 100000);

        do{
            cantidadIngresada = parseInt(prompt("Ingrese la cantidad"));
        }while(cantidadIngresada < 1 || cantidadIngresada > 10);


        if (productoIngresado == "tv"){
            contadorVentasTv ++;
            ventasTvTotales += cantidadIngresada;
        }

        if (flag == true || edadIngresada < edadMasJoven){
            edadMasJoven = edadIngresada;
            usuarioMasJoven = usuarioIngresado;
        }

        switch (sexoIngresado) {
            case "femenino":
                contadorVentasFemeninas ++;
                acumuladorVentasFemeninas += cantidadIngresada;
                break;
            case "masculino":
                contadorVentasMasculinas ++;
                acumuladorVentasMasculinas += cantidadIngresada;
                break;
            default:
                contadorVentasNoBinario ++;
                acumuladorVentasNoBinario += cantidadIngresada;
                break;
        }
 
        if (productoIngresado == "celular"){
            if (flagCelulares == true || cantidadIngresada > ventasMaxCelulares){
                ventasMaxCelulares = cantidadIngresada;
                nombreMaxCelulares = usuarioIngresado;
                edadMaxCelulares = edadIngresada;
            }
        }
        
        respuesta = prompt("¿Desea seguir cargando productos? (si/no)")
    }

    promedioVentasTv = ventasTvTotales/contadorVentasTv;

    promedioVentasFemeninas = acumuladorVentasFemeninas/contadorVentasFemeninas;
    promedioVentasMasculinas = acumuladorVentasMasculinas/contadorVentasMasculinas;
    promedioVentasNoBinario = acumuladorVentasNoBinario/contadorVentasNoBinario;

    document.write("El promedio de TV vendidas es de " + promedioVentasTv + ".<br>"); //A
    document.write("El usuario mas joven es " + usuarioMasJoven + ".<br>"); //B

    document.write("El promedio de ventas del sexo femenino es de " + promedioVentasFemeninas + ".<br>"); //C
    document.write("El promedio de ventas del sexo masculino es de " + promedioVentasMasculinas + ".<br>"); //C
    document.write("El promedio de ventas del sexo no binario es de " + promedioVentasNoBinario + ".<br>"); //C

    document.write("El nombre del usuario que vendio mas celulares es " + nombreMaxCelulares + " y tiene " + edadMaxCelulares + " años.<br>"); //D


}

