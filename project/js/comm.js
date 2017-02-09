(function(){
    $(function () {
        var now = $(this).index();
        //first
        $("#header>.header-nav>ul .first").mouseenter(function () {
            $(".jjfa").show(0)
        })
        $("#header>.header-nav>ul .first").mouseleave(function () {
            $(".jjfa").hide(0)
        })
        //second
        $("#header>.header-nav>ul .second").mouseenter(function () {
            $(".rjcp").show(0)
        })
        $("#header>.header-nav>ul .second").mouseleave(function () {
            $(".rjcp").hide(0)
        })
        //third
        $("#header>.header-nav>ul .third").on({
            mouseenter:function(){
                $(".zyfw").show(0)
            },
            mouseleave:function () {
                $(".zyfw").hide(0)
            }
        })
        //fourth
        $("#header>.header-nav>ul .fourth").on({
            mouseenter:function(){
                $(".alzx").show(0)
            },
            mouseleave:function () {
                $(".alzx").hide(0)
            }
        })
        //fifth
        $("#header>.header-nav>ul .fifth").on({
            mouseenter:function(){
                $(".gytj").show(0)
            },
            mouseleave:function () {
                $(".gytj").hide(0)
            }
        })

        //左部分导航栏
        $(".hyyy").click(function (event) {
            $(".nav").slideToggle(300);
            $(".nav1").slideToggle(300);
        })
        $(".img-botton>a").click(function () {
            $(this).addClass("addhyyy").siblings().removeClass("addhyyy");
        })
        $(".jcss").click(function (event) {
            $(".nav1").slideToggle(300);
            $(".nav").slideToggle(300);
        })

        $(".nav li").each(function (index, elem) {

            $(elem).eq(now).mouseenter(function () {
                $(elem).eq(now).children("a").addClass('bg1')
            })
            $(elem).eq(now).mouseleave(function () {
                $(elem).eq(now).children("a").removeClass('bg1')
            })
        })
        $(".nav1 li").each(function (index, elem) {

            $(elem).eq(now).mouseenter(function () {
                $(elem).eq(now).children("a").addClass('bg1')
            })
            $(elem).eq(now).mouseleave(function () {
                $(elem).eq(now).children("a").removeClass('bg1')
            })
        })

        //        footer友情链接的上下点击
        var num = 0;
        $("#footer .footer-nav .china .up").click(function () {
            if (num < 3) {
                num++
                $(".footer-nav .china .china-list").animate({"margin-top": num * -22}, 200)
            } else {
                num = 0;
                $(".footer-nav .china .china-list").animate({"margin-top": 4 * -22}, 200, function () {
                    $(".footer-nav .china .china-list").css("margin-top", 0);
                })
            }
        })
        $("#footer .footer-nav .china .down").click(function () {

            if (num > 0) {
                num--
                $(".footer-nav .china .china-list").animate({"margin-top": num * -22}, 200)
            } else {
                num = 3;
                $(".footer-nav .china .china-list").animate({"margin-top": 3 * -22}, 200);
            }
        })
    })
})()