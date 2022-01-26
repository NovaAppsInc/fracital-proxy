const alerting = document.getElementById("alert");
const qld = document.getElementById("qld");
const qlbtm = document.getElementById("qlbtm");
const qlbti = document.getElementById("qlbti");
const dropgame = document.getElementById("dropgame");
const gdt = document.getElementById("dropgamethingy");
const urlbar = document.getElementById("urlbar");
const search = document.getElementById("search");

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

qld.addEventListener("mouseleave", () => {
    qld.style.visibility = "collapse";
    qld.classList.remove("open");
    qld.classList.add("hidden");
});

qlbtm.addEventListener("click", () => {
    if (qld.classList.contains("hidden")) {
        // if(gdt.classList.contains("open")) {
        //     let bong = 1;
        //     let bongp = bong += 1;
        //     let bongs = bongp.toString();
        //     gdt.style.zIndex = bongs;
        // }
        qld.style.visibility = "visible";
        qld.classList.remove("hidden");
        qld.classList.add("open");
    } else if (qld.classList.contains("open")) {
        qld.style.visibility = "collapse";
        qld.classList.remove("open");
        qld.classList.add("hidden");
    }
});

dropgame.addEventListener("click", () => {
    if (gdt.classList.contains("hidden")) {
        // if(qld.classList.contains("open")) {
        //     let bongo = 1;
        //     let bongop = bongo += 1;
        //     let bongos = bongop.toString();
        //     gdt.style.zIndex = bongos;
        // }
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