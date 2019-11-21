
var oriMenu = ["dic","news","stock","deal","map","movie","music","book","comic"];
var selMenu = []; // 확인 버튼을 눌러 확정된 메뉴들
var selMenuTmp = []; //메뉴설정에서 선택된 메뉴들
// 검은색 메뉴를 초기화 하는 함수 //
function initBlackMenu(){
    var i = 0;
    //메뉴 설정에서 선택된 메뉴가 있는 경우 
    if(selMenu.length != 0){
    $('.black-container>a').each(function(){
        $(this).prop('class','');
        if(i<selMenu.length){
        $(this).addClass('black-box');
        $(this).addClass('bg3');
        $(this).addClass(selMenu[i]);
        }else{
            $(this).addClass('display_none')
        }
        if(i<5){
            $(this).addClass('box-menu');
        }
        i++;
    })
}
    // 초기화 해야하는 경우 
    else{
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
}
//arr를 기준으로 검은색 메뉴들을 빈 박스 또는 선택된 메뉴로 배치
function drawMenu(arr){
    if(arr.length > 5){
        return;
    }
    var i = 0;
    $('.black-container>a').each(function(){
        //요소의 모든 클래스 제거
        $(this).prop('class','');
        if(i < arr.length){
        $(this).addClass('black-box');
        $(this).addClass('bg3');
        $(this).addClass(arr[i]);
        }
        $(this).addClass('box-menu');
        if(i>4){
            $(this).addClass('display_none');
        }
        i++;
    })
}
//arr 를 기준으로 input 체크박스의 checked와 선택이미지를 설정하는 함수
function setInputCheckbox(arr){
    $('.white_checkbox').each(function(){
        //체크박스의 value를 가져와서
        var value = $(this).val();
        // value 가 arr에 있는지 확인
        var pos = arr.indexOf(value);
        // 있으면 체크박스를 체크하고
        if(pos != -1){
            $(this).prop('checked', true);
            $(this).addClass('white_checkbox2')
        // 없으면 체크박스를 해제한다.
        }else{
            $(this).prop('checked', false);
            $(this).removeClass('white_checkbox2')
        }
    })
}
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

        if(!$(this).hasClass('fold')){
            initBlackMenu();
            $('.menu_cancel').click()
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
        initBlackMenu();
        $('.menu_cancel').click()
    })
    // 선택버튼 //
    $('.menu_sel').click(function(){
        $('.an_bar2_top').toggleClass('display_none')
        $('.an_bar2_bot').toggleClass('display_none')
        $('.white_checkbox').toggleClass('display_none');
        $('.white_checkbox').removeClass('white_checkbox2');
        // $('.black-container .black-box').each(function(){
        //     if(!$(this).hasClass('box-menu')){
        //         $(this).addClass('display_none')
        //     }else{
        //         $(this).prop('class','box-menu')
        //     }
        // })
        selMenuTmp = selMenu.slice(0);
        drawMenu(selMenuTmp);console.log(selMenuTmp)
        setInputCheckbox(selMenuTmp);
        //녹색박스 설정//
        $('.box-menu').eq(selMenu.length).addClass('select');
    })
    // 취소버튼 //
    $('.menu_cancel').click(function(){
        $('.an_bar2_bot').toggleClass('display_none')
        $('.an_bar2_top').toggleClass('display_none')
        $('.white_checkbox').addClass('display_none');
        initBlackMenu();
        // 메뉴 설정에서 선택된 메뉴들을 적용하지 않겠다.
        selMenuTmp = [];
        setInputCheckbox(selMenu);
        initBlackMenu(selMenu);
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
    // 체크를 해제하는 상황은 신경쓸 필요가 없다.//
    // 체크를 해야하는 상황은 신경써야 한다. 최대 개수가 5개
    $('.white_box1_1').click(function(){
        if(!$(this).find('.white_checkbox').hasClass('white_checkbox2')){
            if($('.white_checkbox2').length == 5){
                alert('최대 5개까지 선택 가능합니다.');
                return;
            }
        }
        //선택된 메뉴의 클래스명을 가져옴 (input태그의 지정된 value값을 가져옴)
        var value = $(this).find('.white_checkbox').val();
        $(this).find('.white_checkbox').toggleClass('white_checkbox2');
        if($(this).hasClass('white_checkbox2')){
            $(this).find('.white_checkbox').prop('checked',true)
        }else{
            $(this).find('.white_checkbox').prop('checked',false)
        }
        //선택된 메뉴를 selMenuTmp에 추가할지 삭제될지를 결정
        //selMenuTmp에 선택된 메뉴가 있는지 없는지 체크하는 부분으로 indexOf는 있으면 0보다 크거나 같은값을 알려주고 없으면 -1을 알려준다.
        var pos = selMenuTmp.indexOf(value);
        // 선택한 메뉴가 체크가 된 경우
        if(pos == -1){
            // $('.box-menu').eq(selMenuTmp.length).addClass('bg3');
            // $('.box-menu').eq(selMenuTmp.length).addClass('black-box');
            // $('.box-menu').eq(selMenuTmp.length).addClass(value);
            selMenuTmp.push(value);
        }
        // 선택한 메뉴가 체크 해제된 경우 
        else{
            selMenuTmp.splice(pos,1);       
        }
          // selMenuTmp 에 있는 배열에 맞춰 배치하기
        drawMenu(selMenuTmp);
            $('.box-menu').eq(selMenuTmp.length).addClass('select');
    })
    $('.menu_check').click(function(){
        if(selMenuTmp.length == 0){
            alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.')
        }
    selMenu = selMenuTmp.splice(0);
        // white박스랑 black박스 닫고
        $('.more').click();
        //메뉴 적용
        initBlackMenu();
    })
    $('.menu_reset').click(function(){
        alert('초기설정으로 돌아갑니다.')
        $('.more').click();
        selMenu = [];
        initBlackMenu();
        setInputCheckbox(selMenu);
    })
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