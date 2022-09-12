let listaproductos = []
let carrito = []

//se cargan los productos que hayan quedado en el carrito
carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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

let cards=document.getElementById("productos"); 

//FETCH- se obtienen los datos del archivo (stock.json) y se insertan en las cartas
renderizarProductos()
function renderizarProductos() {
    fetch('/productos.json')
    .then((res) => res.json())
    .then((listaproductos) => {
    console.table(listaproductos)
    for (const compra of listaproductos) {
        let card=document.createElement("div");
        card.className="items col-12 col-md-6 col-lg-4 m-3";
        card.style= "width: 18rem";
        card.innerHTML+=`
        <div class="card">
        <img src="${compra.foto}" "width="250px" height="250px"">
        <p>${compra.nombre}</p>
        <p>$${compra.precio}</p>
        <h3>🛒</h3>
        <button id="btn${compra.id}" class="btn btn-primary">COMPRAR</button>
    </div>

        `;    
        
        //se inyectan las cards
cards.append(card);

// evento al botón comprar

let botonComprar=document.getElementById(`btn${compra.id}`);
    botonComprar.onclick=()=>{
        
        //se llama a la función agregar al carrito
        newAddToCart(compra);
        //se muestra el producto en el carrito
        pintarCarrito(compra);
        //se guarda en el local storage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
 }
})
}


//Agregar productos al carrito//

function newAddToCart(selectedId){ //recibo el id
    //metodo find me retorna un objeto que coincida con la condicion
    let selectedProduct = listaproductos.find(compra => compra.id == selectedId);
    if(selectedProduct == undefined){
        let selectedProduct = {
            ...selectedId,
            cantidad:1
        }; 
    
        carrito.push(selectedProduct) //lo agrego   
        console.table(selectedId); //lo muestro por consola para corroborar
        console.table(carrito); //lo muestro por consola para corroborar
        
        // const contadorCarrito = document.getElementById("contador");
        // contadorCarrito.innerText = carrito.length;
        swal({
            title: "¡Producto agregado!",
            text: selectedId.nombre+"\n"+'agregado al carrito de compra.',
            icon: "success",
            buttons: {
                cerrar: {
                    text: "Cerrar",
                    value: false
                },
                carrito: {
                    text: "Ir a carrito",
                    value: true
                }
            }
        }).then((irACarrito) => {

            if(irACarrito) {
                
                //se muestra el carrito
                
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                const modalToggle = document.getElementById('toggleMyModal'); 
                myModal.show(modalToggle);

            }
           
        });
        
    }
    
}

const filasCarrito=document.getElementById("items")
function pintarCarrito(){

     //agregamos una fila a la tabla del carro

     filasCarrito.innerHTML="";
     carrito.forEach((compra)=>{
         let div = document.createElement("tr");
         div.innerHTML+=`
         <td> ${compra.nombre}</td>
         <td> ${compra.cantidad}</td>
         <td> ${compra.precio}</td>
         <td>$${compra.precio*compra.cantidad}</td>
         <td> <button class="btn" id="eliminar${compra.id}">🗑️</button>`;
         filasCarrito.append(div);

         //evento al boton eliminar
         const eliminarItem=document.getElementById(`eliminar${compra.id}`);
            eliminarItem.addEventListener("click", function(){

                //funcion eliminar
                eliminarDelCarrito(compra.id)
                swal("Producto eliminado!");
            })
        
     })
     const cantidadFooterCarrito=document.getElementById("footer");
     const totalFooterCarrito=document.getElementById("gastoTotal");
     const totalSuma = carrito.reduce((acc,compra) => acc+(compra.precio*compra.cantidad),0);
     const cantSuma = carrito.reduce((acc,compra) => acc+compra.cantidad,0);
     carrito.length === 0 ? cantidadFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`: totalFooterCarrito.innerHTML=`<h4>Total: $${totalSuma}</h4>`; cantidadFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de productos: ${cantSuma}</th>`;
     
}

//ELIMINAR PRODUCTOS
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((compra) => compra.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    pintarCarrito();
}


//FINALIZAR COMPRA Y VACIAR DE LOCAL STORAGE
const finalizarCompra=document.getElementById("finish");
finalizarCompra.addEventListener("click", (e) =>{
    e.preventDefault( ) ;
    if(carrito.length === 0){
        swal('Elegí un producto!');
    }else{
        swal({
            position: 'center',
            icon: "success",
            text: 'Puedes retirar tu pedido luego de 5 dias hábiles',
            title: 'Gracias por tu compra!',
            button: true,
       })
    
    //al finalizar la compra se vacia el carrito

    
    //se borran productos de local storage y se actualiza
    carrito =[ ]
    items.innerHTML= "";
    localStorage.removeItem("carrito",JSON.stringify(carrito));
    pintarCarrito( );
}
})