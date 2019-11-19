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
        $('.an_bar2').toggleClass('display_none')
        $('.an_bar2_top').removeClass('display_none')
        $('.an_bar2_bot').addClass('display_none')
        $('.white_checkbox').addClass('display_none');
        $('.white_box1_1').removeClass('text_el');
        if(!$(this).hasClass('fold')){
            closeWhiteBox();
        }
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
    // x버튼  // 
    $('.menu_cle').click(function(){
        $('.more').toggleClass('fold')
        $('.more_box').toggle()
        $('.an_bar2').toggleClass('display_none')
        $('.an_bar2_top').removeClass('display_none')
        $('.an_bar2_bot').addClass('display_none')
            closeWhiteBox();
    })
    // 선택버튼 //
    $('.menu_sel').click(function(){
        $('.an_bar2_top').toggleClass('display_none')
        $('.an_bar2_bot').toggleClass('display_none')
        $('.black-container .black-box').each(function(){
            if(!$(this).hasClass('box-menu')){
                $(this).addClass('display_none')
            }else{
                $(this).prop('class','box-menu')
            }
        })
    })
    // 취소버튼 //
    $('.menu_cancel').click(function(){
        $('.an_bar2_bot').toggleClass('display_none')
        $('.an_bar2_top').toggleClass('display_none')
        $('.white_checkbox').addClass('display_none');
        $('.white_box1_1').removeClass('text_el')
        closeWhiteBox();
    })
    
    $('.l3_bot_logo').hover(function(){
        $(this).find('.api_logo').toggle();
        $(this).find('.l3_box').toggle();
        
    })
    // 구독 기사보기 나타내기 //
    $('.l3_gu').hover(function(){
        $('.l3_gu').toggleClass('l3_gu_hover');
        $('.l3_gi').toggleClass('l3_gi_hover');
    });
    // 더보가 -> 메뉴설정 -> 체크박스들  //
    $('.menu_sel').click(function(){
        $('.white_checkbox').toggleClass('display_none');
        $('.white_checkbox').removeClass('white_checkbox2');
    })   
    // 체크를 해제하는 상황은 신경쓸 필요가 없다.//
    // 체크를 해야하는 상황은 신경써야 한다. 최대 개수가 5개
    $('.white_box1_1').click(function(){
        if(!$(this).find('.white_checkbox').hasClass('white_checkbox2')){
            if($('.white_checkbox2').length == 5){
                alert('최대 5개까지 선택 가능합니다.');
                return;
            }
        }
        $(this).find('.white_checkbox').toggleClass('white_checkbox2');
        if($(this).hasClass('white_checkbox2')){
            $(this).find('.white_checkbox').prop('checked',true)
        }else{
            $(this).find('.white_checkbox').prop('checked',false)
        }
    })
})

var oriMenu = ["dic","news","stock","deal","map","movie","music","book","comic"];
var selMenu = [];
// 검은색 메뉴를 초기화 하는 함수 //
function initBlackMenu(){
    var i = 0;
    $('.black-container>a').each(function(){
        //요소의 모든 클래스 제거
        $(this).prop('class','');
        $(this).addClass('black-box');
        $(this).addClass('bg3');
        $(this).addClass(oriMenu[i]);
        if(i<5){
            $(this).addClass('box-menu');
        }
        i++;
    })
}
// white-box 가 닫히면서 해야할 작업들
function closeWhiteBox(){
    // 검은 메뉴를 초기화 할지 아니면 선택된 메뉴로 보여줄지 결정 
    if(selMenu.length == 0){
        initBlackMenu();
    }else{

    }
}

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