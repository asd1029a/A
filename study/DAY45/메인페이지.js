$(function(){
    $('.menu_btn').click(function(){
        $('.menus').slideToggle('slow')
        $('.menus_str').slideToggle('slow')
    })
    $('.arrow1').click(function(){
        $('.pictures').eq(0).removeClass('.display_none')
    })
    $('.exhibitions').click(function(){
        $('.art').addClass('display_none')
        $('.art2').addClass('display_none')
        $('.event').addClass('display_none')
        $('.event2').addClass('display_none')
        $('.exhibition').addClass('display_none')
        $('.exhibition2').addClass('display_none')
        $('.main_bg').addClass('display_none')
        $('.main_bg1').addClass('display_none')
        $('.art3').removeClass('display_none')
        $('.event3').removeClass('display_none')
        $('.exhibition3').removeClass('display_none')
        $('.main_bg2').removeClass('display_none')
        $('.all_img').vegas('jump', 2);
        $('.all_img').vegas('pause');
        $('.art2').animate({opacity:0})
        $('.event2').animate({opacity:0})
        $('.exhibition2').animate({opacity:0})
        $('.art').animate({opacity:0})
        $('.event').animate({opacity:0})
        $('.exhibition').animate({opacity:0})
        $('.art3').animate({opacity:1},3000)
        $('.event3').animate({opacity:1},3000)
        $('.exhibition3').animate({opacity:1},3000)
    })
    $('.arts').click(function(){
        $('.art2').addClass('display_none')
        $('.art3').addClass('display_none')
        $('.event2').addClass('display_none')
        $('.event3').addClass('display_none')
        $('.exhibition2').addClass('display_none')
        $('.exhibition3').addClass('display_none')
        $('.main_bg').addClass('display_none')
        $('.main_bg2').addClass('display_none')
        $('.main_bg1').removeClass('display_none')
        $('.art').removeClass('display_none')
        $('.event').removeClass('display_none')
        $('.exhibition').removeClass('display_none')
        $('.all_img').vegas('jump', 1);
        $('.all_img').vegas('pause');
        $('.art2').animate({opacity:0})
        $('.event2').animate({opacity:0})
        $('.exhibition2').animate({opacity:0})
        $('.art').animate({opacity:1},3000)
        $('.event').animate({opacity:1},3000)
        $('.exhibition').animate({opacity:1},3000)
        $('.art3').animate({opacity:0})
        $('.event3').animate({opacity:0})
        $('.exhibition3').animate({opacity:0})
    })
    $('.events').click(function(){
        $('.art').addClass('display_none')
        $('.art3').addClass('display_none')
        $('.event').addClass('display_none')
        $('.event3').addClass('display_none')
        $('.exhibition').addClass('display_none')
        $('.exhibition3').addClass('display_none')
        $('.main_bg').removeClass('display_none')
        $('.main_bg2').addClass('display_none')
        $('.main_bg1').addClass('display_none')
        $('.art2').removeClass('display_none')
        $('.event2').removeClass('display_none')
        $('.exhibition2').removeClass('display_none')
        $('.all_img').vegas('jump', 0);
        $('.all_img').vegas('pause');
        $('.art2').animate({opacity:1},3000)
        $('.event2').animate({opacity:1},3000)
        $('.exhibition2').animate({opacity:1},3000)
        $('.art').animate({opacity:0})
        $('.event').animate({opacity:0})
        $('.exhibition').animate({opacity:0})
        $('.art3').animate({opacity:0})
        $('.event3').animate({opacity:0})
        $('.exhibition3').animate({opacity:0})
    })
    $('.all_img').vegas({
        loop:false,
        animationDuration:2000,
        transitionDuration:500,
        slides: [
                { src: './image/배경1.png' },
                { src: './image/배경2.png' },
                { src: './image/배경3.png' }
        ],
        animation: 'kenburns'
    });
    $('.all_img').vegas('pause');
})