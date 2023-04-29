function whenScroll(){
    $('.scroll').each(function(){
        let elemPos = $(this).offset().top-50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
}

$(window).scroll(function (){
    whenScroll();
});

/*
    スクロールした時、.scrollというクラスがついている要素に対して.activeというクラスを付与する。
    (画面から離れたら.activeは消える)
*/