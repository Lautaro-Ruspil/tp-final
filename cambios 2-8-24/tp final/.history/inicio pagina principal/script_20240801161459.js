'use strict'


const products = [
    {
        id: 1 , 
        name : "Arroz Gallo" , 
        price : 1500 , 
        stock : 140 ,
    },
    {
        id: 2 , 
        name : "Arvejas Inalpa" , 
        price : 2000 , 
        stock : 150 ,
    },
    {
        id: 3 , 
        name : "Azúcar Ledesma", 
        price : 1800 , 
        stock : 125 ,
    },
    {
        id: 4 , 
        name : "Choclo Arcor" , 
        price : 1200 , 
        stock : 130 ,
    },
    {
        id: 5 , 
        name : "Cif Crema" , 
        price : 1700 , 
        stock : 110 ,
    },
    {
        id: 6 , 
        name : "Coca Cola" , 
        price : 1600 , 
        stock : 200 ,
    },
];

function renderProductsOferts(){

    let containerProducts = document.querySelector(".containerProducts");
    containerProducts.innerHTML = '' ; 
    
    for(let i = 0 ; i < products.length ; i++){
        let product = document.createElement("div");
        product.classList.add("containerProducts");
        product.innerHTML = `
            <img src="./imgProducts/${product.id}.png">
            <h2 class= "producto" >${product.name}</h2>
            <p class= "precioActual">Precio: <span class="negrita">$${product.price}</span></p>
            <p class= "precioAnterior">Precio: <span class="negrita">$${product.price}</span></p>
        `
    }
}
