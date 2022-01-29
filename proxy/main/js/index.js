class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

document.cookie="olds=sus";

function go(link) {
  console.log(link);
  if (link == '') {
    alert('Bruh you need to insert a url!');
  } else if (!link.includes("http://")) {
        link = "http://" + link;
    };
    document.getElementById("frame").src="/kb/"+xor.encode(link);
};

document.getElementById("btnsrch").addEventListener("click", () => {
  go(document.getElementById('urlbar').value);
});

// Quick Launch buttons //
const ggl = document.getElementById("ggl");
const ytmus = document.getElementById("ytmus");
const yt = document.getElementById("yt");
const cmg = document.getElementById("cmg");
const appl = document.getElementById("appl");
const reddi = document.getElementById("reddi");
// End //

document.getElementById("bug").addEventListener("click", () => {
  go("github.com/NovaAppsInc/fracital-proxy/issues");
});

// Quick Launch functions //
ggl.addEventListener("click", () => {
  go("google.com");
});

ytmus.addEventListener("click", () => {
  go("music.youtube.com");
});

yt.addEventListener("click", () => {
  go("youtube.com");
});

cmg.addEventListener("click", () => {
  go("coolmathgames.com");
});

appl.addEventListener("click", () => {
  go("music.apple.com");
});

reddi.addEventListener("click", () => {
  go("http://reddit.com");
});
// End //

// Games //
const frame = document.getElementById("frame");
const g2048 = document.getElementById("g2048");
const clumsy = document.getElementById("clumsy");
// const astray = document.getElementById("astray");
const hextris = document.getElementById("hextris");
const tower = document.getElementById("tower");
const simon = document.getElementById("simon");
const jsracer = document.getElementById("jsracer");

g2048.addEventListener("click", () => {
  frame.src = "/gainly/2048/index.html";
  frame.focus();
});

clumsy.addEventListener("click", () => {
  frame.src = "/gainly/clumsy-bird/index.html";
  frame.focus();
});

// astray.addEventListener("click", () => {
//   frame.src = "/gainly/astray/index.html";
//   frame.focus();
// });

hextris.addEventListener("click", () => {
  frame.src = "/gainly/hextris/index.html";
  frame.focus();
});

tower.addEventListener("click", () => {
  frame.src = "/gainly/tower-building/index.html";
  frame.focus();
});

simon.addEventListener("click", () => {
  frame.src = "/gainly/simon-says/index.html";
  frame.focus();
});

jsracer.addEventListener("click", () => {
  frame.src = "/gainly/javascript-racer/v4.final.html";
  frame.focus();
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
function reloadh() {
  document.getElementById("frame").setAttribute('src', 'home.html');
}