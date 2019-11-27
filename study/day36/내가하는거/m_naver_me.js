$(function(){
    $('.search_input>input').click(function(){
        $('.search_in').toggle();
    })
    $('.search_in_backbtn').click(function(){
        $('.search_in').toggle();
    })
    $('.search_in_close').click(function(){
        $('.search_in').toggle();
    })
    $('.plus_icon').click(function(){
        $(this).parent().toggleClass('click_box');
        $(this).toggleClass('click_icon');
    })
    $('.plus_icon').click(function(){
       
        $('.gudok').removeClass('display_none')
        
    })
    $('.plus_icon').click(function(){
        var str = $('.gudok_num');
        if($(this).hasClass('click_box')){
            str += 1;
        }else{
            str -= 1;
            if($('.click_icon').length == 0){
                $('.gudok').addClass('display_none') 
            }
        }
        str = $('.click_icon').length;
        $('.gudok_num').text(str)
    })
    $('a').click(function(){
        event.preventDefault();
    })
    $('.vogue_in2').click(function(){
        if($(this).hasClass('sel_pink')){
            $('.menu_list').addClass('menu_list2')
            $('.list_plus').addClass('display_none')
        }else{
            $('.menu_list').removeClass('menu_list2')
            $('.list_plus').removeClass('display_none')
        }
    })
    $('a').click(function(){
        event.preventDefault();
    })
})
