$(document).ready(function(){
    let currentPage = "HOME";
    let currentNavLink = $("#navbar-menu").children().first().children()[0];

    $("#ABOUT").hide();
    $("#PORTFOLIO").hide();
    $("#CONTACT").hide();

    $(".navbar-link").click(function(e){
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");
        
        currentNavLink = this;
    })

    let characterIndex = 0;

    let titleNames = ["t", "tr", "tri", "tris", "trist", "trista", "tristan", "trista", "trist", "tris", "tri", "tr", "t"];

    window.updateTitleName = function () {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 500);
    
});

