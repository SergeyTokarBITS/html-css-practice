import { breakpoints } from "./breakpoints.js";

$(document).ready(function(){
    $('.review-list__content').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
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
});