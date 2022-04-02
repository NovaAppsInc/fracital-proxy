const searchbar = document.getElementById("urlbar");
const search = document.getElementById("search");
const searchwrap = document.getElementById("searchwrap");
const btnsrch = document.getElementById("btnsrch");
function disableScroll() {
    // Get the current page scroll positio
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch(e) {}
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
}

// searchbar.addEventListener("click", () => {
//     if(searchwrap.classList.contains("minbar")) {
//         search.classList.remove("searchwrap");
//         search.classList.add("expand");
//         btnsrch.classList.add("expandbel");
//         searchwrap.classList.add("expandbel");
//     }

//     // search.focus();
//     // if(search.matches(":focus")) {
//     //     console.log("FUCK YEAH");
//     // }
// });