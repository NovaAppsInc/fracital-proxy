const alerting = document.getElementById("alert");
const qld = document.getElementById("qld");
const qlbtm = document.getElementById("qlbtm");
const qlbti = document.getElementById("qlbti");
const dropgame = document.getElementById("dropgame");
const urlbar = document.getElementById("urlbar");
const droppiebtn = document.getElementById("droppiebtn");
const droppies = document.getElementById("droppies");
const dialogsL = document.getElementById("dialogsL");

droppiebtn.addEventListener("click", () => {
    if(droppies.classList.contains("hide")) {
        droppies.classList.remove("hide");
        droppies.classList.add("show");
        if(droppies.classList.contains("animateDrop")) {
            droppies.classList.remove("animateDrop");
        }
    } else if(droppies.classList.contains("show")) {
        droppies.classList.remove("show");
        droppies.classList.add("hide");
        if (qld.classList.contains("open")) {
            qld.classList.remove("open");
            qld.classList.add("hidden");
        }
    }
});

function serLF() {
    search.classList.remove("borderSY");
    search.classList.add("borderSN");
}

function serGF() {
    search.classList.remove("borderSN");
    search.classList.add("borderSY");
}

urlbar.onfocus = serGF;
urlbar.onblur = serLF;

qlbtm.addEventListener("click", () => {
    if (qld.classList.contains("hidden")) {
        qld.classList.remove("hidden");
        qld.classList.add("open");
        droppies.classList.add("animateDrop");
        if(droppies.classList.contains("animateDropUp")) {
            droppies.classList.remove("animateDropUp");
        }
    } else if (qld.classList.contains("open")) {
        qld.classList.remove("open");
        qld.classList.add("hidden");
        droppies.classList.remove("animateDrop");
        droppies.classList.add("animateDropUp");
    }
});

dropgame.addEventListener("click", () => {
    frame.src = "./g.html";
});

settb.addEventListener("click", () => {
    frames.src = "settings.html"
});

// qlbti.addEventListener("click", (e) => {
//     console.log("fuck!")
// })

setInterval(function () {
    alerting.style.visibility = "collapse";
}, 10000);