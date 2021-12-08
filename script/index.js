import {breakpoints} from "./breakpoints.js";

$(document).ready(function () {
    $('.review-list__content').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="review-slider-prev-arrow custom-arrow"></button>',
        nextArrow: '<button type="button" class="review-slider-next-arrow custom-arrow"></button>',
        responsive: [
            {
                breakpoint: breakpoints.xl,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.brands-logo').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: breakpoints.lg,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

});