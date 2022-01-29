class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

function go(link) {
  console.log(link);
  if (link == '') {
    alert('Bruh you need to insert a url!');
  } else if (!link.includes("http://")) {
        link = "http://" + link;
    };
    window.open("/kb/"+xor.encode(link), "_self");
};

document.getElementById('clig').addEventListener("click", () => {
    window.open("./g.html", "_self");
});

function clig2() {
    go("http://discord.gg/WzNvquznfw");
}