$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        cssEase: 'linear',
        speed: 1000,
        fade: true,

    });
    $('.list').slick({
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 7,
        appendArrows: $('.dots'),
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 2300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 2800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 3200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 6,
            }
        }]
    });
});