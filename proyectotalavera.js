let carrito=JSON.parse(localStorage.getItem("carrito")) || [];
let productosJSON = [];
let card 

let compra=document.getElementsByClassName("productos");
console.log(compra.innerHTML);

let cards=document.getElementById("productos"); 

renderizarProductos()
function renderizarProductos() {
    console.log(listaproductos)
    for (const compra of listaproductos) {
        let card=document.createElement("div");
        card.className="card col-3 text-align-center";
        card.style= "width: 18rem;";
        card.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <h3>ID: ${compra.id}</h3>
        <img src= ${compra.foto} "width="250px" height="250px"">
        <p>nombre${compra.nombre}</p>
        <p>precio${compra.precio}</p>
        <button id="btn" class="btn btn-primary" onclick="newAddToCart(${compra.id})">COMPRAR</button>
    </div>

        `;                                              // Llamo a la funcion y le envio el id del producto por parametro
cards.append(card);

}
}


function crearCarrito() {
    let precioFinal = 0;
    contenedorcarritocompra.innerHTML = "";

    carrito.forEach(
        (compra) => {
            let renglonescarrito= document.createElement("tr");
            
            renglonescarrito.innerHTML = `
                <td>${compra.producto.nombre}</td>
                <td><input id="cantidad-producto-${compra.producto.nombre}" type="number" value="${compra.cantidad}" min="1" max="50" step="1" style="width: 50px;"/></td>
                <td>$ ${compra.producto.precio}</td>
                <td>$ ${compra.producto.precio*compra.cantidad}</td>
            `;

        contenedorcarritocompra.append("renglonescarrito");
    
    //operador++//
    precioFinal+=compra.cantidad*compra.producto.precio;

    //agregamos evento a carrito
    let cantidadProductos = document.getElementById(`cantidad-producto-${compra.producto.nombre}`);
                
    cantidadProductos.addEventListener("change", (e) => {
            let selectedProduct = e.target.value;
            compra.cantidad = selectedProduct;
            crearCarrito ();
        });

    }
);
}

//Agregar productos al carrito//
function newAddToCart(selectedId){ //recibo el id
//metodo find me retorna un objeto que coincida con la condicion
let selectedProduct = listaproductos.find(element => element.id == selectedId.id);
console.log(selectedProduct); //lo muestro por consola para corroborar
if(selectedProduct == undefined){
    let selectedProduct = {
       
        cantidad:1
    };
    carrito.push(selectedProduct) //lo agrego    

    console.log(selectedProduct); //lo muestro por consola

    localStorage.setItem("carrito",JSON.stringify(carrito));

    Swal.fire({
        title: "¡Producto agregado al carro!",
        text: `agregado al carrito de compra.`,
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
    
    
    }).then((iracarrito) => {
 
        if(iracarrito) {
        
            //swal("al carrito!");
           
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
        const modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle);

        }
    });
     
    return cards; 

     //agregamos una fila a la tabla del carro

     document.getElementById("tablabody").innerHTML+=(`
     <tr id='fila${selectedProduct.id}'>
     <td> ${selectedProduct.id} </td>
     <td> ${selectedProduct.nombre}</td>
     <td id='${selectedProduct.id}'> ${selectedProduct.cantidad}</td>
     <td> ${selectedProduct.precio}</td>
     <td> <button class='btn btn-light' onclick='eliminar(${selectedProduct.id})'>🗑️</button>`);

    
    } else {
        
        //el producto existe en el carro y la posicion

        let posicion = carrito.findIndex(element => element.id == selectedId);
        console.log(posicion);
        carrito[posicion].cantidad += 1;
         //con querySelector falla
         document.getElementById(selectedId).innerHTML=carrito[posicion].cantidad;
    }
    
    //recalcular total
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));

    }

    //calcular total

    function calcularTotal() {
        let suma = 0;
        for (const elemento of carrito) {
            suma = suma + (elemento.precio * elemento.cantidad);
        }
        return suma;
    }

    function eliminar(id){
        let indice=carrito.findIndex(prod => prod.id==id);
        carrito.splice(indice,1);//eliminado del carro
        let fila=document.getElementById(`fila${id}`);
        document.getElementById("tablabody").removeChild(fila);//eliminado de la tabla
        document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        Swal.fire("Producto eliminado del carro!")
    }

    //ordenar

    function ordenar() {
        let seleccion = document.getElementById("mySelection").value;
        console.log(seleccion)
        if (seleccion == "menor") {
            productosJSON.sort(function(a, b) {
                return a.precio - b.precio
            });
        } else if (seleccion == "mayor") {
            productosJSON.sort(function(a, b) {
                return b.precio - a.precio
            });
        } else if (seleccion == "alfabetico") {
            productosJSON.sort(function(a, b) {
                return a.nombre.localeCompare(b.nombre);
            });
        }
        card.innerHTML="";
        renderizarProductos();
    }

//vaciar carro

function vaciarcarrito(){
    document.getElementById("cleanCard").addEventListener("click", function(){
        carrito.length = 0;
        localStorage.removeItem("carrito",JSON.stringify(carrito));
    });
}

//Fetch para solicitar productos.json

async function obtenerproductosJSON() {
    const URLJSON="productos.json";
    const resp=await fetch(URLJSON)
    const data= await resp.json()
    productosJSON = data;
    renderizarProductos();
    obtenerproductosJSON();
}


