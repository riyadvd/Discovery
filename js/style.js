$(document).ready(function(){
  var h = $(window).height();
  var w = $(window).width();
  $(".bg-img").height(h);
  $(".bg-img").width(w);
})

$('#btn1').click(function(){
    $('.bg-img').css("background-image","url(./images/background.jpg)");
});

$('#btn2').click(function(){
    $('.bg-img').css("background-image","url(./images/scroll-1.jpg)");
});

$('#btn3').click(function(){
    $('.bg-img').css("background-image","url(./images/scroll-2.jpg)");
});

$(document).ready(function(){
    $(".fas").click(function(){
        $(".fas").removeClass("active");
        $(this).addClass("active");
        
        if ($("#btn1").hasClass("active")){
            $('#div1').hide();
            $('#div2').show();
            $('#div3').show();
            $('.n1').show();
            $('.n2').hide();
            $('.n3').hide();
            $('#head-first').show();
            $('#head-second').hide();
            $('#head-third').hide();
            
        }

        if ($("#btn2").hasClass("active")){
            $('#div1').show();
            $('#div2').hide();
            $('#div3').show();
            $('.n2').show();
            $('.n1').hide();
            $('.n3').hide();
            $('#head-second').show();
            $('#head-third').hide();
            $('#head-first').hide();
        }
        
        if ($("#btn3").hasClass("active")){
            $('#div1').show();
            $('#div2').show();
            $('#div3').hide();
            $('.n3').show();
            $('.n2').hide();
            $('.n1').hide();
            $('#head-third').show();
            $('#head-second').hide();
            $('#head-first').hide();
        }
    })
})
















