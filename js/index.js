$('section').on('mousewheel', function(event, delta){
    if(delta>0){
        $('html, body').stop().animate({
            scrollTop:$(this).prev().offset().top
        }, 1000)
    } else if(delta<0){
        $('html, body').stop().animate({
            scrollTop:$(this).next().offset().top
        }, 1000)
    }
})

$(document).ready(function(){
    $('#wrap .sect1 .welcome').find('p').eq(0).addClass('on')
    $('#wrap .sect1 .welcome').find('p').eq(1).addClass('on')
})
$('.topmenu li a').on('click', function(){
    var mindex=$(this).parent().index()
    $(this).parent().addClass('on').siblings().removeClass('on')
    var offtop = $('#wrap section').eq(mindex).offset().top
    $('html').animate({
        scrollTop:offtop
    }, 500)
})
$('#menu li a').on('click', function(e){
    e.preventDefault()
    var index= $(this).parent().index()
    $(this).parent().addClass('on').siblings().removeClass('on')
    var offtop = $('#wrap section').eq(index).offset().top
    $('html').animate({
        scrollTop:offtop
    }, 500)
   
})

var sect1 = $('.sect1').offset().top
var sect2 = $('.sect2').offset().top
var sect3 = $('.sect3').offset().top
var sect4 = $('.sect4').offset().top

$(window).on('scroll', function(){
    sct = $(this).scrollTop()
    if(sct>=sect1 && sct<sect2){
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
    }else if(sct>=sect2 && sct<sect3){
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('#wrap .sect2 .river').addClass('on2')
        if ( !$('.skill > li').hasClass('on') ) {
            $('.skill > li').addClass('on')
            count(70, '.html', 10)
            count(60, '.css', 20)
            count(80, '.script', 30)
            count(60, '.jquery', 40)
            count(50, '.react', 50)
        }
        $('.sect2 .wrap2 .aboutmy .my').addClass('on')
        $('.sect2 .wrap2 .aboutmy .map').addClass('on')

    }else if(sct>=sect3 && sct<sect4){
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        $('#wrap .sect3 .row .river').addClass('on2')
    }else if(sct>=sect4){
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
        $('#wrap .sect4 .river').addClass('on2')
    }
})

function count(jumsu, cname, time) {
    let count = 0
    let stop = setInterval(function(){
        count++
        if (count<=jumsu) {
            $(cname).find('.myscore').text(count+'%')
        } else {
            clearInterval(stop)
        }
    }, time)
}

$('.slideinner').slick({
    autoplay:true,
    slidesToShow:3,
    autoSpeed:2000,
    dots:true,
    speed:600,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>'
})