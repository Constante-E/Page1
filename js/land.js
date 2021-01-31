let prop = {
    $hamburger: document.getElementById("hambur"),
    $menu: document.getElementById("menu"),
}
let met = {

    inicio: function () {
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200) {
        } else {
        }
    },
    webup: function () {
        prop.$hamburger.addEventListener("click", met.menu);
    },
    menu: function () {
        if(prop.$menu.style.right == "5px"){
            prop.$menu.style.right = "-300px";
        }else{
            prop.$menu.style.right = "5px";
        }
    }
}
met.webup();
window.addEventListener("scroll", met.inicio);
