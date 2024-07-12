 // 쿠로미소개부분에 내려간다는거얍

$(() => {
    // // 전체 내려오기 ,     //hover , mouseover 해도 됨!
    // $('.nav>li').mouseover(function() {
    //     $('.cute').stop().slideDown();
    // });

    // $('.nav').mouseout(function() {
    //     $('.cute').stop().slideUp();
    // })

    // 각각 내려오기 
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    })
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    })

    // 이미지 fadeIn_Out 적용
    setInterval(slide, 2000);
    let x = $('#imgslide>div');
    let y = 3;

    function slide() {
        if(x.position().left == -2000) {
            x.animate({left:'-=1000px'}, function(){
                x.css('left',0);
            })
        }
        x.animate({left:'-=1000px'})
    }
    
})