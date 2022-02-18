class xor {
    static encode(str) {
        return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
    };
    static decode(str) {
        return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
    };
};

const settb = document.getElementById("settb");

settb.addEventListener("click", () => {
  frame.src = "settings.html"
})

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
const appl = document.getElementById("appl");
const reddi = document.getElementById("reddi");
const twt = document.getElementById("twt");
const twtch = document.getElementById("twtch");
const inst = document.getElementById("inst");
// End //

document.getElementById("bug").addEventListener("click", () => {
  go("github.com/NovaAppsInc/fracital-proxy/issues");
});

// Quick Launch functions //
ggl.addEventListener("click", () => {
  go("google.com");
  urlbar.value = "google.com"
});

ytmus.addEventListener("click", () => {
  go("music.youtube.com");
  urlbar.value = "music.youtube.com"
});

yt.addEventListener("click", () => {
  go("youtube.com");
  urlbar.value = "youtube.com"
});

appl.addEventListener("click", () => {
  go("music.apple.com");
  urlbar.value = "music.apple.com"
});

reddi.addEventListener("click", () => {
  go("http://reddit.com");
  urlbar.value = "reddit.com"
});

twt.addEventListener("click", () => {
  go("http://twitter.com");
  urlbar.value = "twitter.com"
});

twtch.addEventListener("click", () => {
  go("http://twitch.tv");
  urlbar.value = "twitch.tv"
});

inst.addEventListener("click", () => {
  go("http://instagram.com");
  urlbar.value = "instagram.com"
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
// const cookie = document.getElementById("cookie");
const retro = document.getElementById("retro");

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

retro.addEventListener("click", () => {
  frame.src = "/gainly/retro-bowl/index.html";
  frame.focus();
});

// End //

let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type == "attributes") {
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

function bing() {
  if (frame.contentDocument.getElementsByClassName("video-ads")[0].innerHTML !== "") {
    var banner = false;
    for (var i = 0; i < frame.contentDocument.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
        frame.contentDocument.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
        banner = true;
    };
    if (banner === false) { 
        frame.contentDocument.getElementsByClassName("html5-main-video")[0].currentTime = frame.contentDocument.getElementsByClassName("html5-main-video")[0].duration; 
        frame.contentDocument.getElementsByClassName("ytp-ad-skip-button")[0].click(); 
    };
  }
}

const alertb = document.getElementById("alertb");

document.addEventListener("keydown", e => {
  if(e.shiftKey && e.keyCode == "67") {
    e.preventDefault();
    go("github.com/NovaAppsInc/fracital-proxy/blob/main/cloaking.md")
  }
});

document.addEventListener("keydown", ea => {
  if(ea.keyCode == "9") {
    ea.preventDefault();
    urlbar.focus()
  }
});

function ea() {
  document.addEventListener("keydown", e => {
    if(e.keyCode == "9") {
      e.preventDefault();
      urlbar.focus()
    }
  });
}

urlbar.addEventListener("focus", () => {
  document.addEventListener("keydown", e => {
    if(e.keyCode == "9") {
      e.preventDefault();
      return;
    }
  });
})

alertb.addEventListener("click", () => {
  go("github.com/NovaAppsInc/fracital-proxy/blob/main/cloaking.md")
});

if(localStorage.getItem("theme") === "lime") {
  document.getElementById("rels").href = "../styles/lime.css";
} else if(localStorage.getItem("theme") === "amoled") {
  document.getElementById("rels").href = "../styles/amoled.css";
} else if(localStorage.getItem("theme") === "classic") {
  document.getElementById("rels").href = "../styles/style.css";
}