$('.cover .owl-carousel').owlCarousel({
    center: false,
    stagePadding: 0,
    items: 1,
    loop:true,
    margin:0,
    nav: true,
    navSpeed: 800,
    dots: false,

    //Basic Speeds
    slideSpeed: 900,
    paginationSpeed: 900,
    slideBy: 1,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: false,

    autoplaySpeed: 800,
    autoplayTimeout: 3000,

    responsive : {
        // breakpoint from 0 up
        0 : {
            nav: false,
            dots: false,

        },
        // breakpoint from 1200 up
        1200 : {
            nav: true,
            dots: true,
        }
    }
});

$('.ebank__right .owl-carousel').owlCarousel({
    center: true,
    stagePadding: 0,
    items: 1,
    loop:true,
    margin:50,
    nav: true,
    navSpeed: 800,
    dots: false,

    //Basic Speeds
    slideSpeed: 900,
    paginationSpeed: 900,
    slideBy: 1,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: false,

    autoplaySpeed: 800,
    autoplayTimeout: 3000,

    responsive : {
        // breakpoint from 0 up
        0 : {
            nav: true,
            dots: true,

        },
        // breakpoint from 1200 up
        1200 : {
            nav: true,
            dots: true,
        }
    }
});

// menu dropdown
$('.has-child a').click(function (e) {
    $(this).closest(".has-child").toggleClass("show-dropdown");
    e.preventDefault();
}); 

// count charachters

$('#email').keyup(function () {
    var max = 50;
    var len = $(this).val().length;
    if (len >= max) {
      $('#charNum').text(' Uneli ste maksimalan broj karaktera');
    } else {
      var char = max - len;
      $('#charNum').text(len + ' / 50');
    }
});

$('#message').keyup(function () {
    var max = 350;
    var len = $(this).val().length;
    if (len >= max) {
      $('#charNumM').text(' Uneli ste maksimalan broj karaktera');
    } else {
      var char = max - len;
      $('#charNumM').text(len + ' / 350');
    }
});

// open/close tab

$('.tab h4').on('click', function() {
    $(this).closest(".tab").toggleClass("tab__open");
    return false;
}); 

// close tab

$('.tab .close').on('click', function() {
    $(this).closest(".tab").removeClass("tab__open");
    return false;
}); 