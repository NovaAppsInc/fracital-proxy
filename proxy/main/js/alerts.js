const alerting = document.getElementById("alert");
const qld = document.getElementById("qld");
const qlbtm = document.getElementById("qlbtm");
const qlbti = document.getElementById("qlbti");

qld.addEventListener("mouseleave", () => {
    qld.style.visibility = "collapse";
    qld.classList.remove("open");
    qld.classList.add("hidden");
});

qlbtm.addEventListener("click", (e) => {
    if (qld.classList.contains("hidden")) {
        qld.style.visibility = "visible";
        qld.classList.remove("hidden");
        qld.classList.add("open");
    } else if (qld.classList.contains("open")) {
        qld.style.visibility = "collapse";
        qld.classList.remove("open");
        qld.classList.add("hidden");
    }
});


// qlbti.addEventListener("click", (e) => {
//     console.log("fuck!")
// })

// setInterval(function () {
//     alerting.style.visibility = "collapse";
// }, 10000);