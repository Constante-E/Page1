
console.log("PRIMER CAMBIO EN GIT 1");
console.log("Segundo Cambio en el Git");
let prop = {
    $cartas: document.querySelectorAll(".container-carta"),
    $imagenes: document.querySelectorAll(".container-imagen"),
    $hamburger: document.querySelector("#hambur"),
    $container: document.querySelector(".container"),
    $menu: document.querySelector(".menu"),
    $body: document.getElementsByTagName("BODY")
}
let met = {
    webup: function () {
        prop.$hamburger.addEventListener("click", met.ejecutar);
        prop.$menu.addEventListener("mouseout", met.ocultarmenu);
    },
    ocultarmenu: function () {
        // prop.$menu.style.right = "-19%";
    },
    ejecutar: function () {
        prop.$menu.style.transition = "all 0.6s";
        prop.$menu.style.right = "5px";
    },
    inicio: function (valor) {
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200) {
            met.inicio2();
        } else {
            met.inicio3();
        }
    },
    inicio2: function () {
        for (let i = 0; i < prop.$imagenes.length; i++) {
            prop.$imagenes[i].style.zIndex = "20";
        }
    },
    inicio3: function () {
        for (let i = 0; i < prop.$imagenes.length; i++) {
            prop.$imagenes[i].style.zIndex = "";
        }
    }
}
met.webup();
window.addEventListener("scroll", met.inicio);