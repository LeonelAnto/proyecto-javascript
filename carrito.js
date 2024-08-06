

let carrito = JSON.parse(localStorage.getItem( "carrito" )) || [];

let contenedor_carrito = document.getElementById("contenedor-carrito");

console.log (carrito)

const render_productos = (arrayproductos) => {
    let contenedor_carrito = document.getElementById("contenedor-carrito")
    if(contenedor_carrito === null){
        return;
    }

    contenedor_carrito.innerHTML = "";

    arrayproductos.forEach( (producto)=>{
        let tarjeta_producto = document.createElement("div");
        tarjeta_producto.classname = "producto";
        tarjeta_producto.innerHTML =
        ` <img src="${producto.imagen}" alt="">
        <h2>${producto.nombre}</h2>
        <h3>${producto.tipo}</h3>
        <h3>${producto.precio}</h3>
        <h3> Cantidad ${producto.cantidad}</h3>
        <button onclick="eliminar_del_carrito(${producto.id})"> eliminar </button>`;
        contenedor_carrito.appendChild(tarjeta_producto);

    });
};

render_productos( carrito );

const eliminar_del_carrito = (id) => {
    carrito = carrito.filter( (elemento) => elemento.id !== id)


    localStorage.setItem("carrito", JSON.stringify(carrito))
    render_productos(carrito) ;
    render_precio_final (carrito) ;
}

//! no se si escribi mal la funcion o si no la estoy usando bien pero no puedo conseguir que me de un solo un resultado, cuando lo intento me salta un valor NaN
//! solo me da un numero cuando lo uso en un ciclo foreach o un map y hace las cuentas individuales bien pero no puedo hacerlo en una sola operacion
function suma(...varios){

    let total = parseInt ( varios.reduce( (acc, elemento)=>{ return acc + (elemento.precio * elemento.cantidad) }, 0) );

    
    console.log (total)
    
    return total
    
}

const render_precio_final = (arrayprecio) => {
    let precio = document.getElementById("precio_final")
    if(precio === null){
        return;
    }

    precio.innerHTML = "";

    arrayprecio.map( (elemento)=>{
        let resultado = document.createElement("div");
        resultado.classname = "resultado";
        resultado.innerHTML =
        ` <h2> precio final </h2>
        <h3>${suma(elemento)}</h3>`

        precio.appendChild(resultado);
        
        console.log (elemento.precio);


    });

};



render_precio_final (carrito) ;




