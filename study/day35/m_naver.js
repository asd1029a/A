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
})