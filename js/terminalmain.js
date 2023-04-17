let characterIndex = 0;

let titleNames = ["t", "tr", "tri", "tris", "trist", "trista", "tristan", "trista", "trist", "tris", "tri", "tr", "t"];

window.updateTitleName = function () {
    document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
}

setInterval(() => {
    window.updateTitleName()
}, 500);