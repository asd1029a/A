var cnt = 1;
setInterval(function(){
  //  var height = "-18px";
    ticker('.live_search', 500)
},2000);
//     setInterval(function(){
//         var height2 = "-20px";
//         ticker2(height2)
//     },2000);
function ticker(selector, playTime){
var height =   $(selector+' .live_search_bots').css('height');
height = '-'+height;
$(selector+' .live_search_bots').eq(0).animate({'margin-top': height}, playTime,
//animate 에서 설정한 애니메이션을 다 실행한 후 실행되는 함수
function(){
    // $(붙일곳).append(붙일애)  $(붙일애).appendTo(붙일곳)
    $(selector+' .live_search_bots').eq(0).detach().appendTo(selector+' .live_search_bot').removeAttr('style');
})
}
// function ticker2(height2){
//     $('.news_cast_1').eq(0).animate({'margin-top': height2}, 1000,
//     function(){
//         $('.news_cast_1').eq(0).detach().appendTo('.news_casts').removeAttr('style');
//     })
// }