$(document).ready(function () {

    //상단 언어 부분
    $(".rng").css({ display: "none" });

    $(".circle_group li").eq(2).hover(
        function () {
            $(this).find(".rng").css({ display: "block" });
            $(this).find(".img").css({ display: "none" });
        },
        function () {
            $(this).find(".rng").css({ display: "none" });
            $(this).find(".img").css({ display: "block" });
        }
    );


    // 상단 네비 부분
    $(".sub_mn").css({ height: "0px" });

    $(".main_nav ul li").mouseenter(function () {
        $(".sub_mn").stop().animate({ height: "210px" }, 500);
        // $(".main_nav ul li").eq(i).addClass("on");
    });
    $(".sub_mn").mouseleave(function () {
        $(".sub_mn").stop().animate({ height: "0px" }, 500);
        // $(".main_nav ul li").removeClass("on");
    });

    // $(".sub_mn a").mouseenter(function () {
    //     $(".main_nav ul li a").eq(i).addClass("on");
    //     $(".main_nav ul li a").removeClass("on");
    // });


    // 메인 부분
    var current = 0;
    var setIntervalId;

    // $(".btns > li").click(function () {
    //     var i = $(this).index();
    //     move(i);
    // });

    $(".btns > .left").click(function () {
        var i = $(this).index();
        i = i++
        if (i == 3) {
            i = 0;
        }
        move(i);
    });
    $(".btns > .right").click(function () {
        var i = $(this).index();
        i = i--
        if (i == 3) {
            i = 0;
        }
        move(i);
    });

    $("#main_img").on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var i = current + 1;
            if (i == 3) {
                i = 0
            }
            move(i);
        }, 3000);
    }

    function move(i) {
        if (current == i) return;

        var currentEl = $(".imgs li").eq(current);
        var nextEl = $(".imgs li").eq(i);

        //currentEl.css({ opacity: 1 }).animate({ opacity: 0 }, 1000);
        //nextEl.css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        currentEl.css({ left: "0%" }).animate({ left: "-100%" }, 1000);
        nextEl.css({ left: "100%" }).animate({ left: "0%" }, 1000);

        current = i;
    }

    // 내용(contents) 부분

    // 내용1. 광고영상 부분
    $("video").css({ display: "none" });

    $(".video_img").click(function () {
        $(".video_img").css({ display: "none" });
        $("video").css({ display: "block" });
    });

    // 내용3. 배너 부분
    /*
    $(".kwicks").kwicks({
        max: 300,
        spacing: 5,
        isHorizontal: true,
        behavior: "menu",
        duration: 2000,
        easing: "easeInOutBounce"
    })
    */

    //내용4. sns 부분
    $(".container2").css({ display: "none" });
    $(".button").click(function () {
        $(".container2").fadeIn(1000);
    });
});