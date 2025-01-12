let precio = 400000


let precioSpan = document.querySelector(".precio-inicial");
 precioSpan.innerHTML = precio
let cantidadSpan = document.querySelector(".cantidad");


let precioTotal = document.querySelector(".valor-total");


sumaBoton = document.querySelector(".suma");
sumaBoton.addEventListener("click" , () =>{
    cantidadSpan.textContent = Number(cantidadSpan.textContent) + 1
    precioTotal.textContent = precio * (Number(cantidadSpan.textContent))
})
restaBoton = document.querySelector(".resta");
restaBoton.addEventListener("click" , () =>{
    cantidadSpan.textContent = Number(cantidadSpan.textContent) - 1
    precioTotal.textContent = precio * (Number(cantidadSpan.textContent))
})