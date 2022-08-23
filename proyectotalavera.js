let carrito=[];

//operador logico or//
carrito = JSON.parse(localStorage.getItem("carrito")) || []

let compra=document.getElementsByClassName("productos");
console.log(compra.innerHTML);

let cards=document.getElementById("productos"); 
    for (const compra of listaproductos) {
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.style= "width: 18rem;";
        card.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src= ${compra.foto} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${compra.nombre}</h5>
        <p class="card-text">${compra.precio}</p>
        <button id="btn" class="btn btn-primary" onclick="AddToCart(${compra.id})">COMPRAR</button>
</div>
`;                                              //Linea 14. Llamo a la funcion y le envio el id del producto por parametro
cards.append(card);

}

function crearCarrito() {
    let precioFinal = 0;
    contenedorcarritocompra.innerHTML = "";

    micarrito.forEach(
        (compra) => {
            let renglonescarrito= document.createElement("tr");
            
            renglonescarrito.innerHTML = `
                <td>${compra.producto.nombre}</td>
                <td><input id="cantidad-producto-${compra.producto.nombre}" type="number" value="${compra.cantidad}" min="1" max="50" step="1" style="width: 50px;"/></td>
                <td>$ ${compra.producto.precio}</td>
                <td>$ ${compra.producto.precio*compra.cantidad}</td>
            `;

        contenedorcarritocompra.append("renglonescarrito");
        let Productos = document.getElementById(`cantidad-producto-${compra.producto.nombre}`);
    //operador//
    precioFinal+=compra.cantidad*compra.producto.precio;
                
        cantidadProductos.addEventListener("change", (e) => {
            let nuevaCantidad = e.target.value;
            elemento.cantidad = nuevaCantidad;
            crearCarrito ();
        });

    }
);
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
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
//finalizar compra

productos.addEventListener ("clickcompra", (e) => {
    e.preventDefault ();
    precioFinal = productos.map (selectedproduct => productos.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.table(productos);
    const oferta = productos.filter (selectedproduct => productos.precio < 1000)
    console.log ("Los siguientes productos estan en oferta")
    console.log (oferta)

    console.log ("El total a pagar es $" + checkOut)


})

function vaciarcarrito(){
    document.getElementById("cleanCard").addEventListener("click", function(){
        carrito.length = 0;
        localStorage.setItem("carrito",JSON.stringify(carrito));
    });
}


