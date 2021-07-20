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
    let nuevoObjeto = new Producto(categoria, marca, cantidad, precio)
    
    //Logica condicional
    if(localStorage.getItem("arrayProductos") != null){
        paso1.push(nuevoObjeto)
        localStorage.setItem("arrayProductos", JSON.stringify(paso1))
    }else { 
        localStorage.clear()
        //let nuevoObjeto = new Producto(categoria, marca, cantidad, precio)
        arrayProductos.push(nuevoObjeto)
        localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
    }
    imprimirProductos(nuevoObjeto)
}

//Variables------------------------------------------------------------


function imprimirProductos(nuevoObjeto){

        let tabla = document.createElement("tr")

        let th = document.createElement("th")

        th.setAttribute("class", "col-1")
        th.textContent = nuevoObjeto.categoria
        tabla.appendChild(th)

        let th1 = document.createElement("th")
        th1.setAttribute("class", "col-2")
        th1.textContent = nuevoObjeto.marca
        tabla.appendChild(th1)

        let th2 = document.createElement("th")
        th2.setAttribute("class", "col-2")
        th2.textContent = nuevoObjeto.cantidad
        tabla.appendChild(th2)

        let th3 = document.createElement("th")
        th3.setAttribute("class", "col-2")
        th3.textContent = nuevoObjeto.precio
        tabla.appendChild(th3)

        lista.appendChild(tabla)
    
}
//Eventos--------------------------------------------------------------
botonGuardar.addEventListener("click", guardarProducto)
