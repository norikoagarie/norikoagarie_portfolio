$(function(){

    // AOS.js
    AOS.init();

    // Vegas.js
    $(".main-visual").vegas({
        timer: false,
        transition: 'fade',
        transitionDuration: 4000,
        delay: 6000,
        animation: 'random',
        animationDuration: 7000,
        slides: [
            { src: "./img/indigo.jpg"},
            { src: "./img/pink.jpg"},
            { src: "./img/yellow-fukugi.jpg"},
            { src: "./img/green.jpg"},
            { src: "./img/indigo2.jpg"},
            { src: "./img/niji.jpg"},
            { src: "./img/umi.jpg" },
            { src: "./img/sunflower-bingata.jpg" }

        ]
    });

    // Drawer.js
    $(document).ready(function() {
        $('.drawer').drawer();
      });

});