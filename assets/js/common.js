// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    // Publications page: year sidebar — Bootstrap scrollspy + reliable .active on click
    var $pubYearNav = $('#navbar-year');
    if ($pubYearNav.length) {
        var pubSpyOffset = 96;
        $('body').scrollspy({
            target: '#navbar-year',
            offset: pubSpyOffset
        });
        var refreshPubSpy = function () {
            $('body').scrollspy('refresh');
        };
        $(window).on('load', refreshPubSpy);
        $(window).on('resize', refreshPubSpy);
        $pubYearNav.on('click', 'a.nav-link', function () {
            $pubYearNav.find('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
    }
})
