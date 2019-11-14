$(function(){
    $('.keyboard').click(function(){
        $('.keyboard-icon').toggleClass('keyboard-icon2');  
    })
    $('.auto').click(function(){
        $('.auto-in').toggleClass('active');  
        $('.click-boxs').toggle();
    })
    $('.more').click(function(){
        $(this).toggleClass('fold')
        $('.more_box').toggle()
    })
    $('.lf_btn').click(function(){
        var str = $('.num_box1').text()
        var stt = $('.num_box2').text()
        str = parseInt(str)
        if($(this).hasClass('lef_btn')){
            str +=  1;
            if(str > stt){
                str = 1;
            }
        }else if($(this).hasClass('rig_btn')){
            str -= 1;
            if(str == 0){
                str = stt;
            }
        }$('.num_box1').text(str)

    })
    $('.r2_btn').click(function(){
        var str2 = $('.r2_page_num1').text()
        str2 = parseInt(str2)
        var stt2 = $('.r2_page_num2').text()
        stt2 = parseInt(stt2)
        if($(this).hasClass('next')){
            str2 += 1;
            if(str2 > stt2){
                str2 = 1;
            }
        }else if($(this).hasClass('prev')){
            str2 -= 1;
            if(str2 == 0){
                str2 = stt2;
            }
        }$('.r2_page_num1').text(str2)
    
    })
})