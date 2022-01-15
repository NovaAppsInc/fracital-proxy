const searchbar = document.getElementById("urlbar");
const search = document.getElementById("search");
const searchwrap = document.getElementById("searchwrap");
const btnsrch = document.getElementById("btnsrch");

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

}else{
    console.log("yep");
}

searchbar.addEventListener("click", () => {
    if(searchwrap.classList.contains("minbar")) {
        search.classList.remove("searchwrap");
        search.classList.add("expand");
        btnsrch.classList.add("expandbel");
        searchwrap.classList.add("expandbel");
    }

    // search.focus();
    // if(search.matches(":focus")) {
    //     console.log("FUCK YEAH");
    // }
});