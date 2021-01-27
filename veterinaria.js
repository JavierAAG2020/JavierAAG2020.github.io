/* Programa que utilizando POO, almacena los datos de un cliente(Nombre, Celular, Direccion)
y los datos de la mascota (Nombre, Tipo, Raza) */

var salida = document.getElementById("salida")

class Cliente {
    constructor(Nombre, Celular, Direccion, mascota) {
        this.nombre = Nombre
        this.celular = Celular
        this.direccion = Direccion
        this.mascota = mascota
    }
}

class Mascota {
    constructor(Nombre, Tipo, Raza) {
        this.nombre = Nombre
        this.tipo = Tipo
        this.raza = Raza
    }
}

function asociarMascota() {
    var nombre = prompt("Ingrese el nombre de la mascota: ")
    var tipo = prompt("Ingrese el tipo de mascota (Perro, Gato, Conejo, etc.): ")
    var raza = prompt("Ingrese la raza de la mascota: ")
    return new Mascota(nombre, tipo, raza)
}

function agregarMascota() {
    var validacion = confirm("Deseas agregar una nueva mascota? (Presiona ACEPTAR para agregar una nueva, CANCELAR para no agregarla)")
    if (validacion) {
        cliente.mascota.push(asociarMascota())
        agregarMascota()
    }
}

var nombreC = prompt("Ingrese el nombre del cliente: ")
while (nombreC == null) {
    var nombreC = prompt("Ingrese un nombre válido para el cliente: ")
}
var celularC = prompt("Ingrese el celular: ")
var direccionC = prompt("Ingrese la direccion: ")
let cliente = new Cliente(nombreC, celularC, direccionC, [asociarMascota()])
var m = cliente.mascota
agregarMascota()

salida.insertAdjacentHTML('afterbegin',`<p>El nombre del cliente es: ${cliente.nombre} <br />Sus mascotas registradas fueron: <br /></p>`)
for (let i = 0; i < m.length; i++) {
    salida.insertAdjacentHTML('beforeend',`<p>Su ${m[i].tipo} llamado ${m[i].nombre}<br /></p>`)
}
