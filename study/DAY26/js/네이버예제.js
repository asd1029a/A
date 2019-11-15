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
    
    })$('.l3_bot_logo')
})
/*$('.r2_btn').click(function(){
    //다음 페이지로 가야할지 이전페이지로 가야할지를 결정하는 함수
    //1이면 다음페이지, -1이면 이전페이지
    var addNum = 0;
    //현재 페이지 번호 가져옴
    var currentPage = $('.r2_page_num1').text();
    currentPage = parseInt('.r2_page_mun1')
    //전체 페이지 번호 가져옴
    var currentPage2 = $('.r2_page_num2').text();
    currentPage2 = parseInt('.r2_page_num2')

    //클릭한 버튼이 이전버튼이면
    if($(this).hasClass('prev')){
        addNum = -1;
        //클릭한 버튼이 다음버튼이면 
    }else{
        addNum = 1;
    }
})*/