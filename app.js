//Entidades----------------------------------------------------
class Producto {
    constructor(categoria, marca, cantidad, precio){
        this.categoria = categoria,
        this.marca = marca,
        this.cantidad = cantidad,
        this.precio = precio,
        this.disponible = true
    }
    sumarIva(){
        return this.precio * 1.21;
    }
}
//Variables-----------------------------------------------------
//Array
const arrayProductos = []

//Selectores
let botonGuardar = document.getElementById("guardar")
let lista = document.getElementById("mostrarLista")

//Funciones---------------------------------------------------------
function guardarProducto(){
   
    let categoria = document.getElementById("categoria").value
    let marca = document.getElementById("marca").value
    let cantidad = document.getElementById("cantidad").value
    let precio = document.getElementById("precio").value

    

    let paso1 = JSON.parse(localStorage.getItem("arrayProductos"))
    
    //Logica condicional
    if(localStorage.getItem("arrayProductos") != null){
        let nuevoObjeto = new Producto(categoria, marca, cantidad, precio)
        paso1.push(nuevoObjeto)
        localStorage.setItem("arrayProductos", JSON.stringify(paso1))
    }else { 
        localStorage.clear()
        let nuevoObjeto = new Producto(categoria, marca, cantidad, precio)
        arrayProductos.push(nuevoObjeto)
        localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
    }
    imprimirProductos()
}

//Variables------------------------------------------------------------


function imprimirProductos(){
    let imprimir = JSON.parse(localStorage.getItem("arrayProductos"))

    if(imprimir != null){

   // const mostrarLista = document.getElementById("mostrarLista")
    imprimir.forEach(e => {

        let tabla = document.createElement("tr")

        let th = document.createElement("th")

        th.setAttribute("class", "col-1")
        th.textContent = `${e.categoria}`
        tabla.appendChild(th)

        let th1 = document.createElement("th")
        th1.setAttribute("class", "col-2")
        th1.textContent = `${e.marca}`
        tabla.appendChild(th1)

        let th2 = document.createElement("th")
        th2.setAttribute("class", "col-2")
        th2.textContent = `${e.cantidad}`
        tabla.appendChild(th2)

        let th3 = document.createElement("th")
        th3.setAttribute("class", "col-2")
        th3.textContent = `${e.precio}`
        tabla.appendChild(th3)

        lista.appendChild(tabla)

        });
    }else {
        console.log("El array estaba nulo");
    }
}
//Eventos--------------------------------------------------------------
botonGuardar.addEventListener("click", guardarProducto)
