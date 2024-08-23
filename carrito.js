

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
    Swal.fire({
        icon: "question",
        title: "Estas seguro que quieres eliminar el producto?",
        showDenyButton: true,
        confirmButtonText: "No eliminar",
        denyButtonText: `Eliminar`
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("El producto no fue eliminado!", "", "error");

        } else if (result.isDenied) {
          Swal.fire("El producto fue eliminado con exito!", "", "success");

          carrito = carrito.filter( (elemento) => elemento.id !== id)

          localStorage.setItem("carrito", JSON.stringify(carrito))
          render_productos(carrito) ;
          render_precio_final (carrito) ;
        }
      });

}

function suma(varios){

    let total = 0;

    varios.forEach(num => {
        total += num ;
    })

    

    return total
    
}

let carritopreciofinal = []

const render_precio_final = (arrayprecio) => {
    let precio = document.getElementById("precio_final")
    if(precio === null){
        return;
    }

    precio.innerHTML = "";

    carritopreciofinal = []

    arrayprecio.map( (elemento)=>{
        
        numero = elemento.precio * elemento.cantidad
        carritopreciofinal.push( parseInt (numero) )
        console.log (carritopreciofinal)

    });

    let resultado = document.createElement("div");
    resultado.classname = "resultado";
    resultado.innerHTML =
    ` <h2> precio final </h2>
    <h3>${suma(carritopreciofinal)}</h3>`

    precio.appendChild(resultado);
    

};

let btn_compra = document.getElementById("btn_compra")
    btn_compra.addEventListener("click", () => {
        Swal.fire("tu compra a sido realizada con exito");
        localStorage.removeItem('carrito');
        carrito = JSON.parse(localStorage.getItem( "carrito" )) || [];
        render_productos(carrito)
        
    });

render_precio_final (carrito) ;

resultadofinal = suma (carritopreciofinal)
console.log (resultadofinal)
