let prop = {

    $body: document.getElementsByTagName("BODY"),
    $hamburger: document.getElementById("hambur"),
    $menu:document.getElementById("menu"),
}
let met = {

    inicio: function () {
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200) {
        } else {
        }
    },
    webup:function(){

        prop.$hamburger.addEventListener("click", function(){
            prop.$menu.style.transition = "all, 0.5s";
            prop.$menu.style.right = "5px";
        })
    }

}
met.webup();
window.addEventListener("scroll", met.inicio);