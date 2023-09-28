
$('#owl-carousel-3').owlCarousel({
    loop:true,
    center:true,
    rtl: true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('#b_home_slide4').owlCarousel({
    loop:true,
    center:true,
    rtl: true,
    margin:10,
    nav:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})