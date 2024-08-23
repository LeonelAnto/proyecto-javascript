
let productos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    const get_productos = fetch("./data.json")
    get_productos.then((res) => res.json())
    .then((res) => {
    productos = res;
    

    const ofertas = productos.filter (function (elemento) {
        if (elemento.tipo === "aritos") {
    
            elemento.precio = elemento.precio - elemento.precio * 0.20
    
            return true
        }

    
    })
    

    console.log(ofertas)
    
    for (let i = 0; i < ofertas.length; i++) {
        let productos_en_oferta = "cantidad de productos en oferta = " + (i+1)
        console.log(productos_en_oferta)
        console.log(productos)
    }
    render_productos(productos)
});
})


let carrito = JSON.parse(localStorage.getItem( "carrito" )) || [];

let contenedor_productos = document.getElementById("contenedor-productos")

const render_productos = (arrayproductos) => {
    let contenedor_productos = document.getElementById("contenedor-productos")
    if(contenedor_productos === null){
        return;
    }

    contenedor_productos.innerHTML = "";



    arrayproductos.forEach( (producto)=>{

        if (producto.tipo === "aritos") {


            let tarjeta_producto = document.createElement("div");
            tarjeta_producto.classname = "producto";
            tarjeta_producto.innerHTML =
            ` <img src="${producto.imagen}" alt="">
            <h2>${producto.nombre}</h2>
            <h3>${producto.tipo}</h3>
            <h3>${producto.precio}</h3>
            <h3>este producto tiene un descuento del 20%</h3>
            <button onclick="agregar_al_carrito (${producto.id})"> Agregar al Carrito </button>`;
            contenedor_productos.appendChild(tarjeta_producto);
    

        }
        else {

            let tarjeta_producto = document.createElement("div");
            tarjeta_producto.classname = "producto";
            tarjeta_producto.innerHTML =
            ` <img src="${producto.imagen}" alt="">
            <h2>${producto.nombre}</h2>
            <h3>${producto.tipo}</h3>
            <h3>${producto.precio}</h3>
            <button onclick="agregar_al_carrito (${producto.id})"> Agregar al Carrito </button>`;
            contenedor_productos.appendChild(tarjeta_producto);
    
    
        }




    });
};

render_productos( productos );


const agregar_al_carrito = ( id ) => {
    let producto = productos.find( (elemento) => elemento.id === id);
    let producto_en_carrito = carrito.find(elemento => elemento.id === id)
    
    if(producto_en_carrito) {
        producto_en_carrito.cantidad += 1;
         
    }else{
    carrito.push ( { ...producto, cantidad: 1 } );
    }

    Toastify({
        text: "El producto se añadio al carrito",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
      }).showToast();

    localStorage.setItem("carrito", JSON.stringify( carrito ));

};
