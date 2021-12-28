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

    //----------------------------------------------------------------------------------------
    // 상단 네비 부분
    $(".sub_mn").css({ height: "0px" });

    $(".main_nav ul li").mouseenter(function () {
        $(".sub_mn").stop().animate({ height: "210px" }, 500);
    });
    $(".h_top").mouseenter(function () {
        $(".sub_mn").stop().animate({ height: "0px" }, 500);
    });
    $(".sub_mn").mouseleave(function () {
        $(".sub_mn").stop().animate({ height: "0px" }, 500);
    });


    // 메인 부분
    var current = 0;
    var setIntervalId;

    $(".btns > .left").click(function () {
        var i = current + 1;
        if (i == 3) {
            i = 0;
        }
        console.log(i)
        move(i);
    });
    $(".btns > .right").click(function () {
        var i = current - 1;
        if (i <= -1) {
            i = 2;
        }
        console.log(i)
        move1(i);
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

    // left
    function move(i) {
        if (current == i) return;

        var currentEl = $(".imgs li").eq(current);
        var nextEl = $(".imgs li").eq(i);

        //currentEl.css({ opacity: 1 }).animate({ opacity: 0 }, 1000);
        //nextEl.css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        currentEl.stop().css({ left: "0%" }).animate({ left: "-100%" }, 1000);
        nextEl.stop().css({ left: "100%" }).animate({ left: "0%" }, 1000);

        current = i;
    }

    // right
    function move1(i) {
        if (current == i) return;

        var currentEl = $(".imgs li").eq(current);
        var nextEl = $(".imgs li").eq(i);

        //currentEl.css({ opacity: 1 }).animate({ opacity: 0 }, 1000);
        //nextEl.css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        currentEl.stop().css({ left: "0%" }).animate({ left: "100%" }, 1000);
        nextEl.stop().css({ left: "-100%" }).animate({ left: "0%" }, 1000);

        current = i;
    }

    //----------------------------------------------------------------------------------------
    // 내용(contents) 부분

    // 내용1. 광고영상 부분
    var video = $(document).find('#video');
        var x_button = $(document).find('.stop');
        var play_button = $(document).find('.play');

        $("video").hide();

        $(".stop").click(function(){
            video.hide();
            x_button.hide();
            play_button.show();
            $(".play span").show();
        });

        $(".play").click(function(){
            $(".play span").hide();
            video.show();
            video.get(0).play();
            x_button.show();
        //play_button.hide();
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
    //$(".container2").css({ display: "none" });
    //$(".button").click(function () {
    //    $(".container2").fadeIn(1000);
    //});


    //  more 버튼 
    $(document).ready(function () {
        var hidePhoto = $(".container2");
      
        $(".moreDown").click(function () {
          insertImg();
        });
      
        $(".moreUp").click(function () {
          deleteImg();
        });
      
        function insertImg() {
          $(hidePhoto).fadeIn();
          $(".moreDown").css({ display: "none" });
          $(".moreUp").css({ display: "block" });
        }
      
        function deleteImg() {
          $(hidePhoto).fadeOut();
          $(".moreUp").css({ display: "none" });
          $(".moreDown").css({ display: "block" });
        }
      });
});