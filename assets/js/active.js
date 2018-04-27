$(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });

/**********
              Parallax
 **********/

$(window).scroll(function(){
    parallax();
});

function parallax(){
    var wScroll = $(window).scrollTop();
    
    $(".salim-intro, .salim-skill-area, .contact-area").css("background-position","center "+ (wScroll* -0.5)+"px");
}