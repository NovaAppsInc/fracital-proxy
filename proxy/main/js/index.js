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
    document.getElementById("frame").src="/kb/"+xor.encode(link);
};

// Quick Launch buttons //
const ggl = document.getElementById("ggl");
const ytmus = document.getElementById("ytmus");
const yt = document.getElementById("yt");
const cmg = document.getElementById("cmg");
const appl = document.getElementById("appl");
const spot = document.getElementById("spoti");
const reddi = document.getElementById("reddi");
// End //

// Quick Launch functions //
ggl.addEventListener("click", () => {
  go("google.com");
  document.body.style.background = "#222222";
});

ytmus.addEventListener("click", () => {
  go("music.youtube.com");
  document.body.style.background = "#222222";
});

yt.addEventListener("click", () => {
  go("youtube.com");
  document.body.style.background = "#222222";
});

cmg.addEventListener("click", () => {
  go("coolmathgames.com");
  document.body.style.background = "#222222";
});

appl.addEventListener("click", () => {
  go("music.apple.com");
  document.body.style.background = "#e1e1e1";
});

spot.addEventListener("click", () => {
  go("spotify.com");
  document.body.style.background = "#222222";
});

reddi.addEventListener("click", () => {
  go("reddit.com");
  document.body.style.background = "#222222";
});

// End //

let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type == "attributes") {
        console.log("attribute");
        document.getElementById("urlbar").src=xor.decode(document.getElementById("frame").contentWindow.location.href.split('/kb/')[1]);
      };
    });
  });
  observer.observe(document.getElementById("frame"), {
    attributes: true
  });
  document.querySelector('#urlbar').addEventListener('keyup', event => {
      if (event.key !== 'Enter') return;
      go(document.getElementById('urlbar').value)
    });
document.cookie="olds=sus";
function reloadh() {
  document.getElementById("frame").setAttribute('src', 'home.html');
  document.body.style.backgroundColor = "#222222";
}