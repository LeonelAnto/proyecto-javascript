let productos = [
    {
        nombre: "heart sweet",
        tipo: "collar",
        precio: 6500

    },
    {
        nombre: "pinky bonbon",
        tipo: "collar",
        precio: 6000
    },
    {
        nombre: "girlmore",
        tipo: "collar",
        precio: 5000
    },
    {
        nombre: "choker spider",
        tipo: "aritos",
        precio: 4500
    },
];


function suma(){
    let a = n1 
    let b = n2
    let c = n3
    return a+b+c
}

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

//! simulador interactivo E-commerce - algoritmo con condicional

let n1 = prompt("Por favor ingresa el nombre de los productos que desee añadir al carrito")
let n2 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")
let n3 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")


if (n1 == "heart sweet") {
    let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n1})
    n1 = heart_sweet.precio
}else if (n1 == "pinky bonbon") {
    let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n1})
    n1 = pinky_bonbon.precio
}else if (n1 == "girlmore") {
    let girlmore = productos.find( (elemento) => {return elemento.nombre === n1})
    n1 = girlmore.precio
}else if (n1 == "choker spider") {
    let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n1})
    n1 = choker_spider.precio
    alert ("descuento del 20% por compra de aritos aplicado correctamente")
} else {
    alert ("el producto " + n1 + " no existe")
}


if (n2 == "heart sweet") {
    let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n2})
    n2 = heart_sweet.precio
}else if (n2 == "pinky bonbon") {
    let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n2})
    n2 = pinky_bonbon.precio
}else if (n2 == "girlmore") {
    let girlmore = productos.find( (elemento) => {return elemento.nombre === n2})
    n2 = girlmore.precio
}else if (n2 == "choker spider") {
    let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n2})
    n2 = choker_spider.precio
    alert ("descuento del 20% por compra de aritos aplicado correctamente")
} else {
    alert ("el producto " + n2 + " no existe")
}


if (n3 == "heart sweet") {
    let heart_sweet = productos.find( (elemento) => {return elemento.nombre === n3})
    n3 = heart_sweet.precio
}else if (n3 == "pinky bonbon") {
    let pinky_bonbon = productos.find( (elemento) => {return elemento.nombre === n3})
    n3 = pinky_bonbon.precio
}else if (n3 == "girlmore") {
    let girlmore = productos.find( (elemento) => {return elemento.nombre === n3})
    n3 = girlmore.precio
}else if (n3 == "choker spider") {
    let choker_spider = ofertas.find( (elemento) => {return elemento.nombre === n3})
    n3 = choker_spider.precio
    alert ("descuento del 20% por compra de aritos aplicado correctamente")
} else {
    alert ("el producto " + n3 + " no existe")
}

console.log (n1)

console.log (n2)

console.log (n3)


let total = suma()
console.log (total)

alert ( "el total de la compra es de " + "$" + total )
