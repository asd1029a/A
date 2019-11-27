$(function(){
    $('.search_input>input').click(function(){
        $('.logo_icon').addClass('display_none');
        $('.back_icon').removeClass('display_none');
        $('.search_btn_group1').addClass('display_none');
        $('.search_btn_group2').removeClass('display_none');
        $('.search_input').addClass('search_input_focus');
        $('.search_list_box').removeClass('display_none');
        $('.body').addClass('display_none');
    })
    $('.logo').click(function(){
        if($(this).find('.back_icon').hasClass('display_none')){
            return;
        }
        $('.logo_icon').removeClass('display_none');
        $('.back_icon').addClass('display_none');
        $('.search_btn_group1').removeClass('display_none');
        $('.search_btn_group2').addClass('display_none');
        $('.search_input').removeClass('search_input_focus');
        $('.search_list_box').addClass('display_none');
        $('.body').removeClass('display_none');
    })
    $('.card_item').click(function(){
        $(this).toggleClass('card_item_select')
        $(this).find('.card_subs').toggleClass('card_subs_select')
        //선택된 언록사 개수 
        var count = $('.card_subs_select').length;
        if(count == 0){
            $('.subs_count_box').addClass('display_none');
        }else{
            var str = count + '개 언론사 구독';
            $('.subs_count_box').text(str);
            $('.subs_count_box').removeClass('display_none');
        }
    })
    $('.menu_item').click(function(){
        if($(this).hasClass('sel_pink')){
            $('.menu_list').addClass('menu_list2')
            $('.menu_plus').addClass('display_none')
        }else{
            $('.menu_list').removeClass('menu_list2')
            $('.menu_plus').removeClass('display_none')
        }
    })
})