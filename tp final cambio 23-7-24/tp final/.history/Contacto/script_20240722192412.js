"use strict"

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("textarea");
    let button = document.getElementById("btn");
    let info = [];

        button.addEventListener("click" , (e) => {
            e.preventDefault();
            info[0] = nombre.value;
            info[1] = email.value;
            info[2] = telefono.value;
            info[3] = asunto.value;
            info[4] = mensaje.value;

            let blob = new blob ([info] , { type: "text/plain ; charset=utf-8"});

            saveAs(blob , "contact.txt");
        })
