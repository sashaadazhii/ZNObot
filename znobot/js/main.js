$(document).ready(function () {

    //anchor landing smooth
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    /*top*/
    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    // $("#btn-secondary").hover(function () {
    //     //mouse over
    //     $(this).removeClass('btn--transparent')
    //         .addClass('btn--colored');
    //     $(this).css('padding-top', '25px');

    // });

    // $("#btn-primary").mouseover(function () {
    //     $(this).addClass('btn--transparent');
    // });
    // $("#btn-primary").hover(function () {
    //     $(this).removeClass('btn--transparent');
    // });

    //mobile menu

    var containerWidth = $("body").width();
    $cross = $(".cross");
    $menu = $(".menu");
    $burger = $(".burger");

    if (containerWidth <= 768) {
        $cross.hide();
        $menu.hide();
        $burger.click(function () {
            $menu.slideToggle("slow", function () {
                $burger.hide();
                $cross.show();
            });
        });

        $cross.click(function () {
            $menu.slideToggle("slow", function () {
                $cross.hide();
                $burger.show();
            });
        });
    }
});
