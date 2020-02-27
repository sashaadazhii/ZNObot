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
    $('#toTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    /*mobile 100vh */
    var containerWidth = $('body').width();
    // if (containerWidth <= 992) {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);

    //     window.addEventListener('resize', () => {
    //         let vh = window.innerHeight * 0.01;
    //         document.documentElement.style.setProperty('--vh', `${vh}px`);
    //     });
    // };
});
