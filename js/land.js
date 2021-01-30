let prop = {

    $body: document.getElementsByTagName("BODY")
}
let met = {

    inicio: function (valor) {
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200) {
        } else {
        }
    },

}
met.webup();
window.addEventListener("scroll", met.inicio);