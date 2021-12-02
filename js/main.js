// let scrollToTop= document.querySelector(".scroll-to-top");
$(document).ready(function() {

    var mobileButton = $('header .top-bar .icons')
    $(mobileButton).click(function() {
        $('nav ul').toggleClass('show-nav');
        $('.overlay').fadeToggle();
        $('.menu-icon').toggle();
        $('.close-icon').toggle();
    })
    $('.overlay').click(function() {
        $('nav ul').removeClass('show-nav');
        $('.overlay').fadeOut();
        $('.menu-icon').show();
        $('.close-icon').hide();
    })
    $('nav ul li').click(function() {
        if (window.innerWidth < 991) {
            $('nav ul').removeClass('show-nav');
            $('.overlay').fadeOut();
            $('.menu-icon').show();
            $('.close-icon').hide();
        }
    })

    $(window).resize(function() {
            if (window.innerWidth > 991) {
                $('nav ul').removeClass('show-nav');
                $(mobileButton).hide();
                $('.overlay').hide();
            }

            if (window.innerWidth < 992) {
                $('.menu-icon').show();
            }
        })
    $('.section').each(function() {
        if ($(window).scrollTop() > ($(this).offset().top) - 1) {
            var sectionId = $(this).attr('id');
            $('header .top-bar nav ul li a').removeClass('active');
            $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass('active')
        } else if ($(window).scrollTop() < 680) {
            $('header .top-bar nav ul li a[class="home"]').addClass('active')
        }
    })
    $(window).scroll(function() {
            $('.section').each(function() {
                if ($(window).scrollTop() > ($(this).offset().top) - 1) {
                    var sectionId = $(this).attr('id');
                    $('header .top-bar nav ul li a').removeClass('active');
                    $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass('active')
                } else if ($(window).scrollTop() < 680) {
                    $('header .top-bar nav ul li a[class="home"]').addClass('active')
                }
            })
        })
    if ($(window).scrollTop() > 10) {
        $('header .top-bar-container').addClass('fixed');
        $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
        $('.go-to-top-icon').fadeIn();

    } else {
        $('header .banner').css('paddingTop', '0');
        $('header .top-bar-container').removeClass('fixed');
        $('.go-to-top-icon').fadeOut();
    }

    $(window).scroll(function() {
            if ($(window).scrollTop() > 10) {
                $('header .top-bar-container').addClass('fixed');
                $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
                $('.go-to-top-icon').fadeIn();
            } else {
                $('header .top-bar-container').removeClass('fixed');
                $('header .banner').css('paddingTop', '0');
                $('.go-to-top-icon').fadeOut();
            }
        })
        // Finish Show Nav Bar and Go to Top Icon When Scrolling 



});