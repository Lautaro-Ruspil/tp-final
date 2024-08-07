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
    {
        id: 7 , 
        name : "Detergente Magistral" , 
        price : 1780 , 
        stock : 137 ,
    },
    {
        id: 8 , 
        name : "Bizcochos Don Satur" , 
        price : 1350 , 
        stock : 160 ,
    },
    {
        id: 9 , 
        name : "Dulce de Leche Ilolay" , 
        price : 1580 , 
        stock : 120 ,
    },
    {
        id: 10 , 
        name : "Fideos Tirabuzon Knorr" , 
        price : 2560 , 
        stock : 130 ,
    },
    {
        id: 11 , 
        name : "Galletitas Criollitas Pack x5" , 
        price : 1400 , 
        stock : 165 ,
    },
    {
        id: 12 , 
        name : "Galletitas Opera" , 
        price : 1900 , 
        stock : 170 ,
    },
    {
        id: 13 , 
        name : "Harina Ultra Refinada 0000 Pureza" , 
        price : 1250 , 
        stock : 125 ,
    },
    {
        id: 14 , 
        name : "Cerveza Lata Heineken" , 
        price : 1160 , 
        stock : 115 ,
    },
    {
        id: 15 , 
        name : "Jabón Líquido Skip" , 
        price : 1360 , 
        stock : 140 ,
    },
    {
        id: 16 , 
        name : "Púre de Papas Knorr" , 
        price : 1200 , 
        stock : 126 ,
    },
    {
        id: 17 , 
        name : "Salsa Pizza Knorr" , 
        price : 1500 , 
        stock : 190 ,
    },
    {
        id: 18 , 
        name : "Café Cortado La Virginia" , 
        price : 1760 , 
        stock : 140 ,
    },
    {
        id: 19 , 
        name : "Leche Descremada Larga Vida La Serenisima" , 
        price : 2000 , 
        stock : 120 ,
    },
    {
        id: 20 , 
        name : "Leche Entera Larga Vida La Serenisima" , 
        price : 2000 , 
        stock : 130 ,
    },
]

let cart = [] ;
let total = 0 ;

function renderProducts(products) {

    let productsElements = document.querySelector(".products");
    productsElements.innerHTML = '' ; //Limpia el contenido actual 

    //recorrido de productos con for Each
    products.forEach(products => {
        let products = document.createElement("div");
        products.classList = "article"
    });
}