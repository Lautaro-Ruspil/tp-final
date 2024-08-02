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
    //escuchador de evento para boton devolver producto
    article.querySelector(".devolver").addEventListener("click" , (e) => {
        e.preventDefault();
        let cantidad = article.querySelector("input").value;
        let stocks = document.querySelectorAll(".stock");
        cantidad = Number(cantidad);
        let productsIndex = article.getAttribute("data-index");
        stocks[productsIndex].innerHTML = arrayQuantity[productsIndex] += cantidad;
    })
});

function comprar(productsIndex , cantidad) {
    let totalElements = document.querySelector(".resultado");
    total += arrayPrice[productsIndex] * cantidad;
    totalElements.innerHTML = `Total: ${total} `;
}
/*
document.querySelectorAll(".article").forEach(article => { 
    let cantidad = article.querySelector("input").value;
    let stocks = document.querySelectorAll(".stock");
    let productsIndex = article.getAttribute("data-index");
    let list = document.createElement("ul");
    let descripcion = document.querySelector("#descrip");
    console.log(descripcion);
    list.innerHTML = ` 
        producto: ${productsIndex}
        cantidad: ${arrayQuantity[productsIndex] -= cantidad};
    `

    //lista producto (createElement)
let containerCart = document.querySelector(".containerCart")
function crearTarjetasProductos () {
    containerCart.innerHTML = `
        <img src="./imagenes Productos/imagenes Productos/Yerba_mate_union_500g-removebg-preview.png" alt="">
        <p><span id="descrip">Descripción:</span> Yerba Mate Union Original 500 grs </p>
        <p>Precio: <span>$1800</span></p>
        <p>Stock: <span class="stock">${stocks}</span></p>

    `

}
})
*/
