'use strict'


const products = [
    {
        id: 1 , 
        name : "Arroz Gallo" , 
        price : 2000 , 
        priceOfert: 1500
    },
    {
        id: 2 , 
        name : "Arvejas Inalpa" ,
        price: 2500,
        priceOfert: 2000
    },
    {
        id: 3 , 
        name : "Azúcar Ledesma", 
        price : 3000 ,
        priceOfert: 1800 
    },
    {
        id: 4 , 
        name : "Choclo Arcor" , 
        price : 1800 , 
        priceOfert: 1200
    },
    {
        id: 5 , 
        name : "Cif Crema" , 
        price : 2500 , 
        priceOfert: 1700
    },
    {
        id: 6 , 
        name : "Coca Cola" , 
        price : 2000 , 
        priceOfert: 1600
    },
];

function renderProductsOferts(){

    let containerProducts = document.querySelector(".containerProducts");
    containerProducts.innerHTML = '' ; 
    
    for(let i = 0 ; i < products.length ; i++){
        let product = products[i]
        let productElement = document.createElement("div");
        productElement.classList.add("containerProducts");
        productElement.innerHTML = `
            <img src="./imgProducts/${product.id}.png">
            <h2 class= "producto" >${product.name}</h2>
            <p class= "precioActual">Precio: <span class="negrita">$${product.priceOfert}</span></p>
            <p class= "precioAnterior">Precio: <span class="negrita">$${product.price}</span></p>
        `

    }
}
