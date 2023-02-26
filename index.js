
const FRASE = alert("Bienvenido a la Libreria Escolar: Mundo Papel")

function comprar() {
    let elegirProducto = parseInt(
        prompt("¿Que producto desea llevar?: \n 1.Cartuchera \n 2.Lapices de colores \n 3.Pegamento adhesivo \n 4.Cuaderno \n 5.Repuesto de hojas Nº3 \n 6.Mochila \n 7.Marcadores \n 8.Birome")
    );

    switch (elegirProducto) {
        case 1:
            alert("Usted seleccionó una Cartuchera");
            break

        case 2:
            alert("Usted seleccionó unos Lapices de colores");
            break

        case 3:
            alert("Usted seleccionó un Pegamento adhesivo");
            break

        case 4:
            alert("Usted seleccionó un Cuaderno");
            break

        case 5:
            alert("Usted seleccionó un Repuesto de hojas Nº3");
            break

        case 6:
            alert("Usted seleccionó una Mochila");
            break

        case 7:
            alert("Usted seleccionó unos Marcadores");
            break

        case 8:
            alert("Usted seleccionó una Birome");
            break


        default:
            alert("No eligió nada");
            break
    }

    do{
        elegirProducto = prompt("¿Desea elegir otro producto?")
    
        if(elegirProducto == "si"){
            comprar()
        }        
    }while(alert("¡Muchas gracias por su compra!"))    
}

comprar()



