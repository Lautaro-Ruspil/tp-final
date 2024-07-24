"use strict"


    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let telefono = document.querySelector("#telefono");
    let asunto = document.querySelector("#asunto");
    let mensaje = document.querySelector("#textarea");
    let button = document.querySelector("#btn1");

        button.addEventListener(type="click" , (e) =>{
            e.preventDefault();
            info[0] = nombre.value;
            info[1] = email.value;
            info[2] = telefono.value;
            info[3] = asunto.value;
            info[4] = mensaje.value;
        })

