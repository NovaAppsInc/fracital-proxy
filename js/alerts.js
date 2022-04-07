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
        droppies.classList.add("showPP");
        droppies.classList.add("animateDropPP");
        if(droppies.classList.contains("noOpac")) {
            droppies.classList.remove("noOpac")
        }
        if(droppies.classList.contains("animateDrop")) {
            droppies.classList.remove("animateDrop");
        }
    } else if(droppies.classList.contains("showPP")) {
        droppies.classList.remove("showPP");
        droppies.classList.add("noOpac");
        myTime = setTimeout(() =>{
            droppies.classList.add("hide");
            clearTimeout(myTime);
        }, 500);
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
        if(droppies.classList.contains("animateDropPP")) {
            droppies.classList.remove("animateDropPP");
        }
        if(droppies.classList.contains("animateDropUp")) {
            droppies.classList.remove("animateDropUp");
            droppies.classList.add("animateDrop");
        }
    } else if (qld.classList.contains("open")) {
        qld.classList.remove("open");
        qld.classList.add("hidden");
        if(droppies.classList.contains("animateDrop")) {
            droppies.classList.remove("animateDrop");
            droppies.classList.add("animateDropUp");   
        }
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

if(alerting) {
    setInterval(function () {
        alerting.style.visibility = "collapse";
    }, 10000);
}