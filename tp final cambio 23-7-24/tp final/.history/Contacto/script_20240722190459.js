"use strict"

    let nombre = document.getElementsByClassName("nombre");
    let email = document.getElementsByClassName("email");
    let telefono = document.getElementsByClassName("telefono");
    let asunto = document.getElementsByClassName("asunto");
    let mensaje = document.getElementsByClassName("textarea");
    let button = document.querySelector("#btn");
    let info = [];

        button.addEventListener("click" , (e) => {
            e.preventDefault()

        



            let blob = new blob ([info] , { type: "text/plain ; charset=utf-8"});
            saveAs(blob, "contacto.txt");
            console.log(blob);
        })

        info[0] = nombre.value;
        info[1] = email.value;
        info[2] = telefono.value;
        info[3] = asunto.value;
        info[4] = mensaje.value;