let prop = {
    $hamburger: document.getElementById("hambur"),
    $menu: document.getElementById("menu"),
    $movoff: document.querySelectorAll(".movoff"),
}
let met = {

    inicio: function () {
        let scrll = document.documentElement.scrollTop;
        if (scrll > 700 && scrll < 1030) {
            prop.$movoff[0].style.opacity = "1";
            prop.$movoff[0].style.transform = "translateY(0px)";
        }
        else {
            prop.$movoff[0].style.opacity = "0%";
            prop.$movoff[0].style.transform = "translateY(100px)";
        }
        if (scrll > 1400 && scrll < 1770) {
            prop.$movoff[1].style.opacity = "1";
            prop.$movoff[1].style.transform = "translateY(0px)";
        }
        else {
            prop.$movoff[1].style.opacity = "0%";
            prop.$movoff[1].style.transform = "translateY(100px)";
        }
    },
    webup: function () {
        prop.$hamburger.addEventListener("click", met.menu);
    },
    menu: function () {
        if (prop.$menu.style.right == "5px") {
            prop.$menu.style.right = "-300px";
        } else {
            prop.$menu.style.right = "5px";
        }
    }
}
met.webup();
window.addEventListener("scroll", met.inicio);
