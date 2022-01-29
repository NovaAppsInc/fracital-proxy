const alerting = document.getElementById("alert");
const qld = document.getElementById("qld");
const qlbtm = document.getElementById("qlbtm");
const qlbti = document.getElementById("qlbti");
const dropgame = document.getElementById("dropgame");
const gdt = document.getElementById("dropgamethingy");
const urlbar = document.getElementById("urlbar");
const search = document.getElementById("search");
const droppiebtn = document.getElementById("droppiebtn");
const droppies = document.getElementById("droppies");

droppiebtn.addEventListener("click", () => {
    if(droppies.classList.contains("hide")) {
        droppies.classList.remove("hide");
        droppies.classList.add("show");
    } else if(droppies.classList.contains("show")) {
        droppies.classList.remove("show");
        droppies.classList.add("hide");
        if (gdt.classList.contains("open")) {
            gdt.classList.remove("open");
            gdt.classList.add("hidden");
        }
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
    } else if (qld.classList.contains("open")) {
        qld.classList.remove("open");
        qld.classList.add("hidden");
    }
});

dropgame.addEventListener("click", () => {
    if (gdt.classList.contains("hidden")) {
        gdt.classList.remove("hidden");
        gdt.classList.add("open");
    } else if (gdt.classList.contains("open")) {
        gdt.classList.remove("open");
        gdt.classList.add("hidden");
    }
});


// qlbti.addEventListener("click", (e) => {
//     console.log("fuck!")
// })

setInterval(function () {
    alerting.style.visibility = "collapse";
}, 10000);