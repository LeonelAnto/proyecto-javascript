

//! simulador interactivo E-commerce - algoritmo con condicional

let n1 = prompt("Por favor ingresa el nombre de los productos que desee añadir al carrito")
let n2 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")
let n3 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")


if (n1 == "heart_sweet") {
    n1 = 6500
}else if (n1 == "pinky_bonbon") {
    n1 = 6000
}else if (n1 == "girlmore") {
    n1 = 5000
}else if (n1 == "choker_spider") {
    n1 = 4500
} else {
    alert ("el producto " + n1 + " no existe")
}


if (n2 == "heart_sweet") {
    n2 = 6500
}else if (n2 == "pinky_bonbon") {
    n2 = 6000
}else if (n2 == "girlmore") {
    n2 = 5000
}else if (n2 == "choker_spider") {
    n2 = 4500
} else {
    alert ("el producto " + n2 + " no existe")
}


if (n3 == "heart_sweet") {
    n3 = 6500
}else if (n3 == "pinky_bonbon") {
    n3 = 6000
}else if (n3 == "girlmore") {
    n3 = 5000
}else if (n3 == "choker_spider") {
    n3 = 4500
} else {
    alert ("el producto " + n3 + " no existe")
}

console.log (n1)

console.log (n2)

console.log (n3)

let total = n1+n2+n3

console.log(total)




//! Algoritmo utilizando un ciclo

for ( let i = total ; i <= 30000 ; i += 6500 ) {
    console.log (i)
    
}
