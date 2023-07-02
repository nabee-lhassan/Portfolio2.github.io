let side_bar = document.querySelector('.side-bar-main');

let  div_slider_button = document.querySelector(".div-slider-button")



$(window).ready (function(){
    console.log('Loading....')
    // $('.sec-banner').animate({'top':0 + "%" },700);
    $('html, body').animate({
        scrollTop:0
    },100)
})





$ (window).scroll(function(){
  
   let sPos = $(this).scrollTop();

  $('.main-body').css({'left':sPos/-1 + "%" })

  console.log('scrolling')

//   if ($(window).scrollTop() > 160 ) {
//     $('.sec2').css({'top':sPos/-1 + "%" });
//     $('.sec2').css('transition','0.5s')
//   }else{
//     $('.sec2').css('top','0%')
//     $('.sec2').css('transition','0.5s')
//   }
   

//   if ($(window).scrollTop() > 660 ) {
//     $('.sec3').css({'top':sPos/-8 + "%" });
//     $('.sec3').css('transition','0.5s')
//   }else{
//     $('.sec3').css('top','0%')
//     $('.sec3').css('transition','0.5s')
//   }

  console.log($(window).scrollTop())

    


})


// nav button to navigate section start

function func_home(){
    // for slide section
    $('.main-body').css("left","0%")
    
    $('.btn-1').addClass('btn-active');
    $('.btn-2').removeClass('btn-active');
    $('.btn-3').removeClass('btn-active');
    $('.btn-4').removeClass('btn-active');
    
}

function func_cms(){
    // for slide section
    $('.main-body').css("left","-100%")
    
    $('.btn-2').addClass('btn-active');
    $('.btn-1').removeClass('btn-active');
    $('.btn-3').removeClass('btn-active');
    $('.btn-4').removeClass('btn-active');
    
}

function func_custom(){
    // for slide section
    $('.main-body').css("left","-200%")
    
    $('.btn-3').addClass('btn-active');
    $('.btn-1').removeClass('btn-active');
    $('.btn-2').removeClass('btn-active');
    $('.btn-4').removeClass('btn-active');
    
    
}

function func_contact(){
    // for slide section
    $('.main-body').css("left","-300%")
    
    $('.btn-4').addClass('btn-active');
    $('.btn-1').removeClass('btn-active');
    $('.btn-2').removeClass('btn-active');
    $('.btn-3').removeClass('btn-active');
    
    
}


// nav button to navigate section end


function cms_active(){
    $('.more-cms').addClass('cms_active');


}

function cms_hide(){
    $('.more-cms').removeClass('cms_active');


}