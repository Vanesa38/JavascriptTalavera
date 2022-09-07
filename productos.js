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
    foto: src="./imagenes/Creameralmendra.PNG",
    nombre: "CREAMER ALMENDRA 300ML GREEN FOOD",
    precio:  600
},
{
    id: 2,
    foto: src="./imagenes/vitabiosanaranja.PNG",
    nombre: "VITA BIOSA PROBIOTA VARIEDADES 500ML",
    precio:  1200 
},
{
    id: 3,
    foto: src="./imagenes/untabledecaju.PNG",
    nombre: "UNTABLE DE CAJU VARIEDADES AUGUSTA 180G",
    precio:  750 
},
{
    id: 4,
    foto: src="./imagenes/quesocamembert.PNG",
    nombre: "QUESO CAMEMBERT CAJU AUGUSTA 150G",
    precio:  1000
},
{
    id: 5,
    foto: src="./imagenes/tofuartesanal.PNG",
    nombre: "TOFU ARTESANAL GREEN FOOD VEGAN POR PIEZA",
    precio: 500
},
{
    id: 6,
    foto: src="./imagenes/untableremolacha.PNG",
    nombre: "UNTABLE REMOLACHA 170G VEGETANESA",
    precio: 550
},
]
