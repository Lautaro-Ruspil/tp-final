'use strict';

// Arreglo Productos, Precios , Cantidad //
let arrayProducts = ["Harina" , "CocaCola" ,  "Sprite"  ,  "Azucar"  , "GalletitasCriollitas"  ,  "Fideos"  ,   "Cerveza"   ,  "GalletitasOpera"  ,  "purePapa"  , "quesoCremon"   ,  "quesoRallado"   ,  "manteca"  ,  "salsaPizza"  ,   "cafeCortado"  ,  "dulceDeLeche"  ,  "arvejas"  ,  "choclo"   ,  "lecheDescremada"   ,   "lecheEntera"  , "yerbaUnion" ]
let arrayPrice =    [  1500   ,    2550    ,    2300    ,    1900    ,          2100           ,    2200    ,     1500      ,        1000         ,     1800     ,      1500       ,       1600        ,    1350     ,      1250      ,       1450       ,       1320       ,    1100     ,    1120     ,       1000           ,        1000      ,     1800     ]
let arrayQuantity = [  150    ,    130     ,    100     ,    100     ,          100            ,    100     ,      100      ,        100          ,     100      ,      100        ,        100        ,     100     ,       100      ,        100       ,       100        ,     100     ,     100     ,        100           ,        100       ,      100     ] 
//crear arreglo nuevo (arrayquantity inicial), se presiona el boton de 
let total = 0;
//Selecciona todas las tarjetas (articles)
document.querySelectorAll(".article").forEach(article => {
    
    //evento para boton de añadir al carrito
    //añadir escuchador de evento click a cada tarjeta ( for each por cada tarjeta(article) )
    article.querySelector("button").addEventListener('click' , (e) => {
        e.preventDefault();
        let productsIndex = article.getAttribute("data-index");
    let stocks = document.querySelectorAll(".stock");
    let cantidad = article.querySelector("input").value;
    cantidad = Number(cantidad);
        if(cantidad > 0 && (arrayQuantity[productsIndex] - cantidad) >= 0){
            //sumatoria de productos con funcion comprar
            comprar(productsIndex , cantidad);
            //resta de stock 
            arrayQuantity[productsIndex] -= cantidad;
            //actualiza el stock si se compra el producto
            stocks[productsIndex].innerText = arrayQuantity[productsIndex];
        }else{
            alert("Ingrese una cantidad mayor a 0 o no hay suficiente Stock");
        }
    });
    article.querySelector(".devolver").addEventListener("click" , (e) => {
        e.preventDefault();
        arrayQuantity[productsIndex] + cantidad
    })
});
    //añadir escuchador de evento click para boton devolver producto


function comprar(productsIndex , cantidad) {
    let totalElements = document.querySelector(".resultado");
    total += arrayPrice[productsIndex] * cantidad;
    totalElements.innerHTML = `Total: ${total} `;
}




