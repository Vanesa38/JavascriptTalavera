let producto = prompt ("Ingresa el producto para saber su precio");
let precio =0;

function calcular(){

    while(producto!="fin"){
        switch(producto){
            case "Leche de Almendras y coco 1lt":
                precio=precio + "$" +500;
                console.log("la leche de almendras cuesta $500");
                console.log("El articulo se encuentra en stock");
                break;
            case "Jugo Arandanos 1.5lt c/stevia":
                precio=precio + "$" +150;
                console.log("El jugo de Arandanos cuesta $150");
                console.log("El articulo se encuentra en stock");
                break;
            case "Kefir 1lt Gaia Vegan":
                precio=precio + "$" +350
                console.log("Kefir cuesta $350");
                console.log("El articulo se encuentra en stock");
                break;
            case "Vita Biosa Probiota Sabor Natural 500ml":
                precio=precio + "$" +1180
                console.log("Vita Biosa cuesta $1180");
                console.log("El articulo se encuentra en stock");
                break;
            case "Arrope de Mistol 430g":
                precio=precio + "$" +360
                console.log("El arrope de mistol cuesta $360");
                console.log("El articulo se encuentra en stock");
                break;
            case "Pasta De Maní Natural 380g Hardy":
                precio=precio + "$" +460
                console.log("La pasta de mani cuesta $460");
                console.log("El articulo se encuentra en stock");
                break;
            case "Queso Camembert Caju Augusta 150g":
                console.log("El articulo no se encuentra en stock");
                break;
            case "Cerveza de Mijo Rubia en Lata 473ml Gauther":
                precio=precio + "$" +350
                console.log("La cerveza de mijo cuesta $350");
                console.log("El articulo se encuentra en stock");
                break;
            case "Fernet Yuyo 750 ml":
                precio=precio + "$" +800
                console.log("El fernet cuesta $800");
                console.log("El articulo se encuentra en stock");
                break;
            default:
                console.log("Este articulo no se encuentra disponible");
                break;
        }
        producto=prompt("Ingresa el producto para saber su precio (fin para ver el total).");
    }

    console.log("Total a pagar $"+precio);
}

    calcular();

// Incorporando arrays //

for(let i=0;i<5;i++){
    console.log(productos[i]);
}

class productos {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaiva() {
        this.precio = this.precio * 1.21;
    }
}

const productos=[
    {
        producto: "Aceite Chía 150ml Nutrasem",
        precio: "770"
    },
    {
        producto: "Aceite Lino Gourmet 250 ml Nutrasem",
        precio: "740"
    },
    {
        producto: "Aceite Sésamo 250ml Nutrasem",
        precio: "1000"
    }
];
for (const productos of productos){
     console.log(productos.precio);

}

productos.push("Jalapeño Ahumado 180ml");
console.log(productos);

