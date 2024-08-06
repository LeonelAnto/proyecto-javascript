let productos = [
    {
        id: 1,
        nombre: "heart sweet",
        tipo: "collar",
        precio: 6500,
        imagen: "./img/heart-sweet.jfif"

    },
    {
        id: 2,
        nombre: "pinky bonbon",
        tipo: "collar",
        precio: 6000,
        imagen: "./img/pinky-bonbon.jfif"
    },
    {
        id: 3,
        nombre: "girlmore",
        tipo: "collar",
        precio: 5000,
        imagen: "./img/girlmore.jfif"
    },
    {
        id: 4,
        nombre: "choker spider",
        tipo: "aritos",
        precio: 4500,
        imagen: "./img/choker-spider.jpeg"
    },
];

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
}

console.log(productos)

let carrito = JSON.parse(localStorage.getItem( "carrito" )) || [];

let contenedor_productos = document.getElementById("contenedor-productos")

const render_productos = (arrayproductos) => {
    let contenedor_productos = document.getElementById("contenedor-productos")
    if(contenedor_productos === null){
        return;
    }

    contenedor_productos.innerHTML = "";

    arrayproductos.forEach( (producto)=>{
        let tarjeta_producto = document.createElement("div");
        tarjeta_producto.classname = "producto";
        tarjeta_producto.innerHTML =
        ` <img src="${producto.imagen}" alt="">
        <h2>${producto.nombre}</h2>
        <h3>${producto.tipo}</h3>
        <h3>${producto.precio}</h3>
        <button onclick="agregar_al_carrito (${producto.id})"> Agregar al Carrito </button>`;
        contenedor_productos.appendChild(tarjeta_producto);

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

    localStorage.setItem("carrito", JSON.stringify( carrito ));

};

function suma(...varios){
    let total = varios.reduce( (acc, elemento)=>{ return acc + elemento}, 0 );
    
    console.log(total)
    alert ( "el total de la compra es de " + "$" + total )
}



// //! simulador interactivo E-commerce - algoritmo con condicional

// let n1 = prompt("Por favor ingresa el nombre de los productos que desee añadir al carrito") 
// let n2 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)") 
// let n3 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)") 


// if (n1 == "heart sweet") {
//     let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n1})
//     n1 = heart_sweet.precio
// }else if (n1 == "pinky bonbon") {
//     let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n1})
//     n1 = pinky_bonbon.precio
// }else if (n1 == "girlmore") {
//     let girlmore = productos.find( (elemento) => {return elemento.nombre === n1})
//     n1 = girlmore.precio
// }else if (n1 == "choker spider") {
//     let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n1})
//     n1 = choker_spider.precio
//     alert ("descuento del 20% por compra de aritos aplicado correctamente")
// } else {
//     alert ("el producto " + n1 + " no existe")
// }


// if (n2 == "heart sweet") {
//     let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n2})
//     n2 = heart_sweet.precio
// }else if (n2 == "pinky bonbon") {
//     let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n2})
//     n2 = pinky_bonbon.precio
// }else if (n2 == "girlmore") {
//     let girlmore = productos.find( (elemento) => {return elemento.nombre === n2})
//     n2 = girlmore.precio
// }else if (n2 == "choker spider") {
//     let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n2})
//     n2 = choker_spider.precio
//     alert ("descuento del 20% por compra de aritos aplicado correctamente")
// } else {
//     alert ("el producto " + n2 + " no existe")
// }


// if (n3 == "heart sweet") {
//     let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n3})
//     n3 = heart_sweet.precio
// }else if (n3 == "pinky bonbon") {
//     let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n3})
//     n3 = pinky_bonbon.precio
// }else if (n3 == "girlmore") {
//     let girlmore = productos.find( (elemento) => {return elemento.nombre === n3})
//     n3 = girlmore.precio
// }else if (n3 == "choker spider") {
//     let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n3})
//     n3 = choker_spider.precio
//     alert ("descuento del 20% por compra de aritos aplicado correctamente")
// } else {
//     alert ("el producto " + n3 + " no existe")
// }

// console.log (n1)

// console.log (n2)

// console.log (n3)


// let total = suma(n1,n2,n3)


