function heart_sweet() {
    let nombre = "heart sweet";
    let tipo = "collar";
    let precio = 6500;
    return precio
}

function pinky_bonbon() {
    let nombre = "pinky bonbon";
    let tipo = "collar";
    let precio = 6000;
    return precio
}

function girlmore() {
    let nombre = "girlmore";
    let tipo = "collar";
    let precio = 5000;
    return precio
}

function choker_spider() {
    let nombre = "choker spider";
    let tipo = "collar";
    let precio = 4500;
    return precio
}

function suma(){
    let a = n1 
    let b = n2
    let c = n3
    return a+b+c
}


//! simulador interactivo E-commerce - algoritmo con condicional

let n1 = prompt("Por favor ingresa el nombre de los productos que desee añadir al carrito")
let n2 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")
let n3 = prompt("Por favor ingresa el nombre del siguiente productos que desee añadir al carrito (en caso de no desear otro producto haga click en el boton de cerrar)")


if (n1 == "heart_sweet") {
    n1 = heart_sweet();
}else if (n1 == "pinky_bonbon") {
    n1 = pinky_bonbon()
}else if (n1 == "girlmore") {
    n1 = girlmore()
}else if (n1 == "choker_spider") {
    n1 = choker_spider()
} else {
    alert ("el producto " + n1 + " no existe")
}


if (n2 == "heart_sweet") {
    n2 = heart_sweet()
}else if (n2 == "pinky_bonbon") {
    n2 = pinky_bonbon()
}else if (n2 == "girlmore") {
    n2 = girlmore()
}else if (n2 == "choker_spider") {
    n2 = choker_spider()
} else {
    alert ("el producto " + n2 + " no existe")
}


if (n3 == "heart_sweet") {
    n3 = heart_sweet()
}else if (n3 == "pinky_bonbon") {
    n3 = pinky_bonbon()
}else if (n3 == "girlmore") {
    n3 = girlmore()
}else if (n3 == "choker_spider") {
    n3 = choker_spider()
} else {
    alert ("el producto " + n3 + " no existe")
}

console.log (n1)

console.log (n2)

console.log (n3)


let total = suma()
console.log (total)



//! Algoritmo utilizando un ciclo

for ( let i = total ; i <= 30000 ; i += 6500 ) {
    console.log (i)

}
