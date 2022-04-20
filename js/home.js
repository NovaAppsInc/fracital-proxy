class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function go(link) {
    if (link == '') {
        alert('Bruh you need to insert a url!');
    } else if (!link.includes("http://")) {
        link = "http://" + link;
    };
    window.open("/sw/" + xor.encode(link), "_self");
};

document.getElementById('clig').addEventListener("click", () => {
    window.open("./g.html", "_self");
});

function patr() {
    window.open('https://www.patreon.com/fracital?fan_landing=true');
}
function tik() {
    window.open('https://tiktok.com/@fracital');
}

// if (localStorage.getItem("theme") === "lime") {
//     document.getElementById("rells").href = "../styles/limeh.css";
// } else if (localStorage.getItem("theme") === "amoled") {
//     document.getElementById("rells").href = "../styles/amoledh.css";
// } else if(localStorage.getItem("theme") === "classic") {
//     document.getElementById("rels").href = "../styles/home.css";
// }