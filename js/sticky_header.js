window.onscroll = function () {
    sticky();
};

function sticky() {
    let nav = document.getElementById("nav");

    let sticky = nav.offsetTop;

    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}
