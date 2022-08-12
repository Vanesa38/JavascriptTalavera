let carrito=[];

let cards=document.getElementById("productos"); 
    for (const imagen of listaproductos) {
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src= ${imagen.foto} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${imagen.nombre}</h5>
        <p class="card-text">${imagen.precio}</p>
        <button id="btn${imagen.nombre}" class="btn btn-primary">COMPRAR</button>
</div>
`;
cards.append(card);

}
//Agregar productos al carrito//
let miboton = document.getElementById(`btn${imagen.nombre}`);
miBoton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Agregaste" + " " + producto.nombre + " " +"al carrito");
    productos.push(producto);
})
//fin de compra//
let botonFinalizarCompra = document.getElementById("fin")
let precioFinal = 0
let checkOut = 0
botonFinDeCompra.addEventListener ("click", (e) => {
    e.preventDefault ();
    precioFinal = productos.map (productos => productos.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.table(productos);
    const oferta = productos.filter (producto => producto.precio < 1000)
    console.log ("Los siguientes productos estan en oferta")
    console.log (oferta)

    console.log ("El total a pagar es $" + checkOut)


})


