class listado {
    constructor (id, nombre,precio,foto){
    this.id = id;
    this.nombre = nombre;
    this.precio= parseFloat(precio);
    this.foto= foto;
}
}

class ProdDelCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const producto = []


const listaproductos = [
{
    id: 1,
    foto: src="./imagenes/promo2.png",
    nombre: "PROMO NATURAL",
    precio: 1550
},
{
    id: 2,
    foto: src="./imagenes/promo3.png",
    nombre: "PROMO HABITO",
    precio:  1860 
},
{
    id: 3,
    foto: src="./imagenes/promo6.png",
    nombre: "PROMO GULERA",
    precio:  740 
},
{
    id: 4,
    foto: src="./imagenes/promo5.png",
    nombre: "PROMO GOURMET",
    precio:  1740
},
{
    id: 5,
    foto: src="./imagenes/promorefri.PNG",
    nombre: "PROMO DELICE",
    precio: 1550
},
]
