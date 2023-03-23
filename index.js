const productos = [
    { nombre: "delineador", precio: 1200},
    { nombre: "labial", precio: 1600},
    { nombre: "sombra", precio: 1800},
    { nombre: "corrector", precio: 1000},
    { nombre: "base", precio: 1100},
];
let carrito = []

let seleccion = prompt("Hola! Desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola! desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("Mira nuestra lista de maquillajes")
    let todoslosProductos = productos.map(
     (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert (todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "delineador" || producto == "labial" || producto == "sombra" || producto == "corrector" || 
    producto == "base"){
        switch (producto) {
          case "delineador":
            precio = 1200;
             break;
          case "labial":
            precio = 1600;
             break;
          case "sombra":
            precio = 1800;
             break;
          case "corrector":
            precio = 1000;
             break;
           case "base":
            precio = 1100;
             break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
  } else {
    alert("no tenemos ese producto")
  }
  seleccion = prompt("desea seguir comprando?")

  while(seleccion === "no"){
    alert("Gracias por la compra!")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es: ${total}`)