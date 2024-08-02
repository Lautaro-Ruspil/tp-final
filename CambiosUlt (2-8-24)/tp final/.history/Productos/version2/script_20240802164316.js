'use strict'
const products = [
    {
        id: 1,
        name: "Arroz Gallo",
        price: 1500,
        stock: 140
    },
    {
        id: 2,
        name: "Arvejas Inalpa",
        price: 2000,
        stock: 150
    },
    {
        id: 3,
        name: "Azúcar Ledesma",
        price: 1800,
        stock: 125
    },
    {
        id: 4,
        name: "Choclo Arcor",
        price: 1200,
        stock: 130
    },
    {
        id: 5,
        name: "Cif Crema",
        price: 1700,
        stock: 110
    },
    {
        id: 6,
        name: "Coca Cola",
        price: 1600,
        stock: 200
    },
    {
        id: 7,
        name: "Detergente Magistral",
        price: 1780,
        stock: 137
    },
    {
        id: 8,
        name: "Bizcochos Don Satur",
        price: 1350,
        stock: 160
    },
    {
        id: 9,
        name: "Dulce de Leche Ilolay",
        price: 1580,
        stock: 120
    },
    {
        id: 10,
        name: "Fideos Tirabuzon Knorr",
        price: 2560,
        stock: 130
    },
    {
        id: 11,
        name: "Galletitas Criollitas Pack x5",
        price: 1400,
        stock: 165
    },
    {
        id: 12,
        name: "Galletitas Opera",
        price: 1900,
        stock: 170
    },
    {
        id: 13,
        name: "Harina Ultra Refinada 0000 Pureza",
        price: 1250,
        stock: 125
    },
    {
        id: 14,
        name: "Cerveza Lata Heineken",
        price: 1160,
        stock: 115
    },
    {
        id: 15,
        name: "Jabón Líquido Skip",
        price: 1360,
        stock: 140
    },
    {
        id: 16,
        name: "Púre de Papas Knorr",
        price: 1200,
        stock: 126
    },
    {
        id: 17,
        name: "Salsa Pizza Knorr",
        price: 1500,
        stock: 190
    },
    {
        id: 18,
        name: "Café Cortado La Virginia",
        price: 1760,
        stock: 140
    },
    {
        id: 19,
        name: "Leche Descremada Larga Vida La Serenisima",
        price: 2000,
        stock: 120
    },
    {
        id: 20,
        name: "Leche Entera Larga Vida La Serenisima",
        price: 2000,
        stock: 130
    }
]



let cart = [];
let total = document.querySelector("#total");
let totalCalculado=0;
//cargar Productos
function renderProducts() {

    //me traigo el div contenedor de productos
    let productsElements = document.querySelector("#products");
    productsElements.innerHTML = ''; //Limpia el contenido actual 


    //recorrido de productos con for 
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productElement = document.createElement("div");
        productElement.classList.add("products");
        productElement.innerHTML += `
                <img src="./imgProducts/${product.id}.png">
                <h2 class="producto">${product.name}</h2>
                <p class="precio>"Precio: <span class="negrita">$${product.price}</span></p>
                <p class="stock"> Stock: <span class="negrita">${product.stock}</span></p>
                <input type="number" class="input" id="${product.id}" placeholder="Cantidad" min="0" max="${product.stock}">
                <button class="btnComprar" id="${product.id}">
                    Agregar al Carrito
                </button>

                <button class= "btnDevolver" id=${product.id}>
                    Devolver Producto
                </button>
            `
        productsElements.appendChild(productElement);

    }
    cargarClick();
}

renderProducts();


function cargarClick(){

    let buttonAdd = document.querySelectorAll(".btnComprar");
    buttonAdd.forEach(element => {
        element.addEventListener("click", (e) => {
            let productId = parseInt(e.target.id);
            let input = e.target.previousElementSibling.value;
            let productsIndex = products.find(product  => product.id === productId);
            addToCart(productsIndex,input);
        });
    });
}

//funcion añadir al carrito

function addToCart(productsIndex, cantidad) {


    if ((cantidad > 0 && productsIndex.stock - cantidad >= 0)){

        //buscar si el producto ya esta en el carrito
        let productInCart = cart.find(item => item.id === productsIndex.id);

        if(productInCart){
            //si el producto ya esta en el carrito, actualizar la cantidad
            productInCart.cantidadComprada += cantidad =+ cantidad; 
        }else{
            //si el porducto no esta en el carrito, agregarlo con la cantidad
            cart.push({ 
                id:productsIndex.id ,
                name: productsIndex.name, 
                price: productsIndex.price, 
                cantidadComprada: + cantidad ,
                totalPorProducto: productsIndex.price * cantidad
            });
        }


        //actualizar el total
        totalCalculado += productsIndex.price * cantidad;
        total.innerHTML=totalCalculado;

        //decrementar el stock
        productsIndex.stock -= cantidad;
        //renderizar productos y carrito
        renderProducts();
        renderCart();

    }else{
        alert("El numero ingresado debe ser mayor a 0, o no hay suficiente stock");
    }
}

//funcion para devolver productos
function returnProduct(productId){
    let productInCart = cart.find(item => item.id === productId);

    let originalProduct = products.find(product => product.id === productId);
    originalProduct.stock += productInCart.cantidadComprada;
    
    totalCalculado -= productInCart.price + productInCart.cantidadComprada;
    total.innerHTML = totalCalculado;
}


//funcion para mostrar productos en el carrito
function renderCart() {
    //me traigo el div contenedor de los productos que se agreguen al carrito
    let cartElements = document.querySelector("#cart");
    cartElements.innerHTML = '' ; //limpiar contenido actual del carrito

    //usamos bucle for para renderizar el carrito
    for(let i = 0 ; i < cart.length ; i++){
        let items = cart[i];

        //creo elemento div para cada una de las card
        let itemElements = document.createElement("div");
        itemElements.classList.add("elementsCart");

        // creo elemento img
        let img = document.createElement("img"); 

        //seteo el atributo src
        img.src = `./imgProducts/${items.id}.png `;

        // creo elemento span
        let span = document.createElement("span");

        //creo el texto que va a ir dentro del span
        let texto = document.createTextNode(`Descripción: ${items.name} - $${items.price} x ${items.cantidadComprada} = $${items.price * items.cantidadComprada}`);

        //coloco el texto en el span
        span.appendChild(texto);
        span.classList.add("spanNombre")
        
        let buttonReturn = document.createElement("button");
        buttonReturn.innerText = "Devolver Producto";
        buttonReturn.addEventListener('click' , () => returnProduct(items.id));

        //coloco la imagen dento del div
        itemElements.appendChild(img);
        //coloco dentro del div el texto(nameProduct , priceProduct , stockPurchased)
        itemElements.appendChild(span);

        //coloco adentro del cotenedor del carrito cada card
        cartElements.appendChild(itemElements);

        

        
    }
    
}

