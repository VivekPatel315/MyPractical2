jQuery( document ).ready(function() {

    jQuery('.expand-btn').click(function(){
        jQuery(this).toggleClass('active')
        jQuery('.expand-cont').slideToggle()
    });
 
    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        dots: false,
        nav: true
    });

    jQuery('.mobile-toggle').click(function() {
        jQuery('body').toggleClass('menu-open')
    })

    jQuery('.nav-arrow').click(function() {
        jQuery(this).parent().parent('.child-menu').toggleClass('submenu-open')
    })

});


