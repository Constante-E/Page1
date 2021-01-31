let prop = {
    $hamburger: document.getElementById("hambur"),
    $menu: document.getElementById("menu"),
    varmenu: null
}
let met = {

    inicio: function () {
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200) {
        } else {
        }
    },
    webup: function () {
        prop.$hamburger.addEventListener("click", function (dato) {
            prop.$hamburger.style.zIndex = "80";
            do {
                prop.$menu.style.transition = "all, 0.5s";
                prop.$menu.style.right = "5px";
                prop.varmenu == false;
            } while (prop.varmenu == false);
            console.log("salido del do",varmenu);
            window.addEventListener("click", function (dato) {
                console.log(prop.varmenu);
                console.log("dentro");
                if (prop.varmenu == false && dato.target.getAttribute("id") != "menu") {
                    prop.$menu.style.right = "-300px";
                }
            });

        })

    }

}
met.webup();
window.addEventListener("scroll", met.inicio);
