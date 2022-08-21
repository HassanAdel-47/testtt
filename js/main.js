let btn = document.querySelector(".upButton");
window.onscroll = function() {
    if (window.scrollY >= 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
var myCheck = document.getElementById("switcher");
myCheck.onclick = function(element) {
    console.log("Agreement changed to " + myCheck.checked + " by onclick event.");
    if (myCheck.checked == true) {
        setTimeout(function() {
            window.open("./index ar.html", "_self");
        }, 1000);
    } else {
        setTimeout(function() {
            window.open("./index.html", "_self");
        }, 1000);
    }
};