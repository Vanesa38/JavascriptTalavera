class listado {
    constructor (nombre,precio,){
    this.nombre = nombre;
    this.precio= parseFloat(precio);
}
}

const listapromociones = [
       {
        nombre: "promo refrigerados1",
        precio: "$1680",
       },
       {
        nombre: "promo refrigerados2",
        precio: "$1550",
       },
       {
        nombre: "promo refrigerados3",
        precio: "$1860",
       },
       {
        nombre: "promo refrigerados laberinto",
        precio: "$1740",
       },
       {
        nombre: "promo gulera",
        precio: "$740",
       },
    
];

let cartas=document.getElementById("promociones");
for(const imagen of listapromociones){
    let card=document.createElement("div");
    card.className="card col-3 text-align-center";
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src= ${imagen.fuente} class="card-img-top" alt="...">
            <h5 class="card-title">${imagen.nombre}</h5>
            <p class="card-text">${imagen.precio}</p>
            <a href="#" id = "Boton" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    card.append(cartas);
}
let boton = document.getElementsByClassName("btn")

// Incorporando arrays //

for(let i=0;i<5;i++){
    console.log(productos[i]);
}

class productosiva {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaiva() {
        this.precio = this.precio * 1.21;
    }
}

const listaproductos=[
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

//producto agregado al stock//

productos.push("Jalapeño Ahumado 180ml");
console.log(productos);

//productos de oferta//

const oferta = productos.filter(producto => producto.precio < 1000)
console.log(oferta)



