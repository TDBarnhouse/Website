let characterIndex = 0;

let titleNames = [
    "t", "tr", "tri", "tris", "trist", "trista", "tristan", "tristan.", "tristan.b", "tristan.ba", "tristan.bar", 
    "tristan.barn", "tristan.barnh", "tristan.barnho", "tristan.barnhou", "tristan.barnhous", "tristan.barnhouse", 
    "tristan.barnhous", "tristan.barnhou", "tristan.barnho", "tristan.barnh", "tristan.barn", "tristan.bar", "tristan.ba", 
    "tristan.b", "tristan.", "tristan", "trista", "trist", "tris", "tri", "tr", "t"
];
window.updateTitleName = function () {
    document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
}

setInterval(() => {
    window.updateTitleName()
}, 500);

$(document).ready(function() {
    let currentPage = "HOME";
    let currentNavLink = $("#navbar-menu").children().first().children()[0];

    $("#ABOUT").hide();
    $("#PORTFOLIO").hide();
    $("#RESUME").hide();
    $("#CONTACT").hide();
    $("#TERMINAL").hide();

    $(".navbar-link").click(function(e) {
        if (e.currentTarget.id !== "resume-link" && e.currentTarget.id !== "terminal-link") {
            $(`#${currentPage}`).fadeOut(100, function() {
                // Remove the 'hide-section' class to show the new page
                $(`#${currentPage}`).addClass("hide-section");
                
                // Show and remove 'hide-section' class for the new page
                $(`#${e.currentTarget.innerHTML}`).removeClass("hide-section").fadeIn(500);
            });            
            
            $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

            currentPage = e.currentTarget.innerHTML

            $(currentNavLink).removeClass("selected");
            $(this).addClass("selected");
            
            currentNavLink = this;
        }
    })
});