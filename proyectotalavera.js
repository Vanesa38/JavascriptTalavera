let carrito=[];

let cards=document.getElementById("productos"); 
    for (const imagen of listaproductos) {
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.style= "width: 18rem;";
        card.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src= ${imagen.foto} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${imagen.nombre}</h5>
        <p class="card-text">${imagen.precio}</p>
        <button id="btn" class="btn btn-primary" onclick="AddToCart(${imagen.id})">COMPRAR</button>
</div>
`;                                              //Linea 14. Llamo a la funcion y le envio el id del producto por parametro
cards.append(card);

}

//Agregar productos al carrito//
function AddToCart(selectedId) //recibo el id
{
    //metodo find me retorna un objeto que coincida con la condicion
    let selectedProduct = listaproductos.find(element => element.id == selectedId)
    if(selectedProduct != null) //valido que no sea null, osea, que encontro algo
    {
        carrito.push(selectedProduct) //lo agrgeo
    }
    console.log(selectedProduct); //lo muestro por consola para corroborar
}



//finalizar compra
let botonFinalizarCompra = document.getElementById("fin")
let precioFinal = 0
let checkOut = 0
botonFinalizarCompra.addEventListener ("click", (e) => {
    e.preventDefault ();
    precioFinal = productos.map (productos => productos.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.table(productos);
    const oferta = productos.filter (producto => producto.precio < 1000)
    console.log ("Los siguientes productos estan en oferta")
    console.log (oferta)

    console.log ("El total a pagar es $" + checkOut)


})


