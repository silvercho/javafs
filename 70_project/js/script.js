$(function () {
    // 프로그래스바
    let state = 0;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            if (state === 0) {
                pgbar(0, 90);
                pgbar(1, 85);
                pgbar(2, 95);
                state = 1;
            } else {
                return;
            }
        } else {
            state = 0;
        }
    });


    function pgbar(idx, maxCnt) {
        const elem = $(".progress div");
        var w = 0;
        const timer = setInterval(bar, 30);

        function bar() {
            if (w >= maxCnt) {
                clearInterval(timer);
            } else {
                w++;
                elem.eq(idx).css({ width: w + "%" });
                elem.eq(idx).text(w + "%");
            }
        }
    }

    // 카운터 
    const elem = $('#counter span');
        let progressState = 0;

        $(window).scroll(function () {
            //윈도우 스크롤이 2150 이상이면 
            console.log($(this).scrollTop());
            if ($(this).scrollTop() >= 2150) {
                if (progressState === 0){
                    move(0 , 32);
                    move(1 , 8);
                    move(2 , 4);
                    move(3 , 3);
                    progressState = 1;
                } else {
                    return;
                }
            } else {       
                progressState = 0;
            }
        });

        function move(idx , maxCnt , mSec) {
            let num = 0;
            const timer = setInterval(counter, mSec);
            function counter() {
                if (num >= maxCnt) {
                    clearInterval(timer);
                } else {
                    num++;
                    elem.eq(idx).text(`${num}+`);
                }
            }
        }
})