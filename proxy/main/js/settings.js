const stylesheet = document.getElementById("style");
let relv = document.getElementById("relv");
let relvc = document.getElementById("relvc");
let relvci = document.getElementById("relvci");
let classroom = document.getElementById("classroom");
let google = document.getElementById("google");
let docs = document.getElementById("docs");
let slides = document.getElementById("slides");
let subsir = document.getElementById("subsir");
let subsirc = document.getElementById("subsirc");
let subsirci = document.getElementById("subsirci");
let link = parent.document.getElementById("relt");
let linkSt = parent.document.getElementById("rels");
let linkStSET = document.getElementById("relss")
let site = document.getElementById("site");
let sitei = document.getElementById("sitei");

classroom.addEventListener("click", () => {
    relv.setAttribute("value", "Classes");
});

google.addEventListener("click", () => {
    relv.setAttribute("value", "Google");
});

docs.addEventListener("click", () => {
    relv.setAttribute("value", "Docs");
});

slides.addEventListener("click", () => {
    relv.setAttribute("value", "Slides");
});

subsir.addEventListener("click", () => {
    let atrrv = relv.getAttribute("value");
    if(atrrv === "Docs") {
        parent.document.title = "Google Docs";
        link.href = "./docs.png";
        return;
    }
    if(atrrv === "Slides") {
        parent.document.title = "Google Slides";
        link.href = "./slides.png";
        return;
    }
    parent.document.title = relv.getAttribute("value");
    link.href = "./" + relv.getAttribute("value").toLowerCase() + ".png";
});

subsirc.addEventListener("click", () => {
    let ballsc = site.value.toLowerCase();
    if(!site.value) {
        alert("if you wish to cloak, please type in a name in the input!")
        return
    }
    if(ballsc.includes("class")) {
        parent.document.title = "Classes"
        link.href = "./classes.png";
        return;
    } else if(ballsc.includes("classroom")) {
        parent.document.title = "Classes"
        link.href = "./classes.png";
        return;
    } else if(ballsc.includes("google")) {
        parent.document.title = "Google"
        link.href = "./google.png";
        return;
    } else if(ballsc.includes("slides")) {
        parent.document.title = "Google Slides"
        link.href = "./slides.png";
        return;
    } else if(ballsc.includes("slide")) {
        parent.document.title = "Google Slides"
        link.href = "./slides.png";
        return;
    } else if(ballsc.includes("docs")) {
        parent.document.title = "Google Docs"
        link.href = "./docs.png";
        return;
    } else if(ballsc.includes("doc")) {
        parent.document.title = "Google Docs"
        link.href = "./docs.png";
        return;
    } else {
        relvc.setAttribute("value", site.value);
        parent.document.title = relvc.getAttribute("value");
    }
});

subsirci.addEventListener("click", () => {
    let balls = sitei.value.toLowerCase();
    if(!sitei.value) {
        alert("if you wish to cloak, please type in a name in the input!")
        return;
    }
    if(sitei.value.includes("https://")) {
        relvci.setAttribute("value", sitei.value);
        link.href = relvci.getAttribute("value");
    } else if(sitei.value.includes("http://")) {
        relvci.setAttribute("value", sitei.value);
        link.href = relvci.getAttribute("value");
    } else if(!sitei.value.includes("https://") || !sitei.value.includes("http://")) {
        if(balls.includes("google")) {
            link.href = "./google.png";
            return;
        } else if(balls.includes("classroom") || balls.includes("class")) {
            parent.document.title = "Classes"
            link.href = "./classes.png";
        } else if(balls.includes("docs")) {
            parent.document.title = "Google Docs"
            link.href = "./docs.png";
        } else if(balls.includes("doc")) {
            parent.document.title = "Google Docs"
            link.href = "./docs.png";
        } else if(balls.includes("slides")) {
            parent.document.title = "Google Slides"
            link.href = "./slides.png";
        } else if(balls.includes("slide")) {
            parent.document.title = "Google Slides"
            link.href = "./slides.png";
        }
    }
});

const themes = document.getElementById("themes");
const subthrd = document.getElementById("subthrd");
const reset = document.getElementById("reset");
const classic = document.getElementById("classic");
const classicD = document.getElementById("classicD");
// const morning = document.getElementById("morning");
const lime = document.getElementById("lime");

classic.addEventListener("click", () => {
    themes.setAttribute("value", "classic");
});

amoled.addEventListener("click", () => {
    themes.setAttribute("value", "amoled");
});

// morning.addEventListener("click", () => {
//     themes.setAttribute("value", "morning");
// });

lime.addEventListener("click", () => {
    themes.setAttribute("value", "lime");
});

subthrd.addEventListener("click", () => {
    localStorage.setItem("theme", themes.getAttribute("value"));
    if(localStorage.getItem("theme") === "lime") {
        linkSt.href = "../styles/" + localStorage.getItem("theme") + ".css";
        linkStSET.href = "../styles/" + localStorage.getItem("theme") + "s" + ".css";
    } else if(localStorage.getItem("theme") === "amoled") {
        linkSt.href = "../styles/" + localStorage.getItem("theme") + ".css";
        linkStSET.href = "../styles/" + localStorage.getItem("theme") + "s" + ".css";
    } else if(localStorage.getItem("theme") === "classic") {
        linkSt.href = "../styles/style.css";
        linkStSET.href = "../styles/settings.css";
    }
});

if(localStorage.getItem("theme") === "lime") {
    linkSt.href = "../styles/lime.css";
    linkStSET.href = "../styles/limes.css";
} else if(localStorage.getItem("theme") === "amoled") {
    linkSt.href = "../styles/amoled.css";
    linkStSET.href = "../styles/amoleds.css";
} else if(localStorage.getItem("theme") === "classic") {
    linkSt.href = "../styles/style.css";
    linkStSET.href = "../styles/settings.css";
}

/* custom css theme code for later */

// const themeCSS = document.getElementById("themeCSS");

// themeCSS.addEventListener("keydown", e => {
//     // if(e.keyCode == "9") {
//     //     e.preventDefault();
//     //     console.log("fuck");
//     // }
//     if (e.key == 'Tab') {
//         e.preventDefault();
//         var start = this.selectionStart;
//         var end = this.selectionEnd;
    
//         // set textarea value to: text before caret + tab + text after caret
//         this.value = this.value.substring(0, start) +
//           "\t" + this.value.substring(end);
    
//         // put caret at right position again
//         this.selectionStart =
//           this.selectionEnd = start + 1;
//       }
// })

// var textareas = document.getElementsByTagName('textarea');
// var count = textareas.length;
// for(var i=0;i<count;i++){
//     textareas[i].onkeydown = function(e){
//         if(e.keyCode==9 || e.which==9){
//             e.preventDefault();
//             var s = this.selectionStart;
//             this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
//             this.selectionEnd = s+4; 
//         }
//     }
// }