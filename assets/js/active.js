$(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )


    //jquery for scrollspy

    var headerHeight = $(".header-area").outerHeight();
    var scrollLink = $(".spy-btn");
    // smooth scrolling

    scrollLink.click(function(e){
       e.preventDefault();

        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        },800);
    });
    //end scrollspy



    $(window).scroll(function(){

        //parallax
        parallax();

        //scrollspy active link switching
        var scrollBarLocation = $(this).scrollTop();
        scrollLink.each(function(){
           var sectionOffset = $(this.hash).offset().top - 20

           if( sectionOffset <= scrollBarLocation ){
               $(this).addClass("active-class");
               $(this).parent().siblings().find('a').removeClass("active-class");
           }
        });
    });


    // wow js activation


});

/**********
              Parallax
 **********/


function parallax(){
    var wScroll = $(window).scrollTop();

    $(".salim-intro, .salim-skill-area, .contact-area").css("background-position","center "+ (wScroll* -0.5)+"px");
}

/**********
              scroll black
**********/
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.header-area').addClass('black');
    }else{
        $('.header-area').removeClass('black');
    }
});


/**********
              scrollspy
**********/
