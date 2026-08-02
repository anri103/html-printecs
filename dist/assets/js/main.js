'use strict';

document.addEventListener('DOMContentLoaded', function () {

    //////////////////////////////////////////////////////////////////
    // [ Back to Top Button ]

    function initBackToTop() {
        const btn = document.querySelector('.back-to-top');
        if (!btn) return;

        document.addEventListener('scroll', function () {
            btn.classList.toggle('js-active', window.scrollY > 400);
        });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Swiper Sliders ]

    function initSwipers() {
        if (typeof Swiper === 'undefined') return;

        if (document.querySelector('.swiperClients')) {
            new Swiper('.swiperClients', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                loop: true,
                speed: 5000,
                // centeredSlides: true,
                allowTouchMove: false,
                autoplay: { delay: 1, disableOnInteraction: true },
            });
        }

        if (document.querySelector('.swiperFeatures')) {
            new Swiper('.swiperFeatures', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: '.swiperFeatures-area .btn-swiper-next',
                    prevEl: '.swiperFeatures-area .btn-swiper-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    768:  { slidesPerView: 2 },
                    992:  { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                },
            });
        }

        // if (document.querySelector('.swiperBlog')) {
        //     new Swiper('.swiperBlog', {
        //         slidesPerView: 1,
        //         loop: true,
        //         spaceBetween: 24,
        //         navigation: {
        //             nextEl: '.swiperBlog-area .btn-custom-swiper-next',
        //             prevEl: '.swiperBlog-area .btn-custom-swiper-prev',
        //         },
        //         pagination: { el: '.swiper-pagination', clickable: true },
        //         breakpoints: {
        //             768:  { slidesPerView: 2, spaceBetween: 24 },
        //             992:  { slidesPerView: 3, spaceBetween: 24 },
        //             1200: { slidesPerView: 4, spaceBetween: 24 },
        //         },
        //     });
        // }
    }

    //////////////////////////////////////////////////////////////////
    // [ Phone & Date Masks ]

    function initMasks() {
        if (typeof IMask === 'undefined') return;

        document.querySelectorAll('.maskPhone').forEach(function (el) {
            IMask(el, { mask: '+{7}(000)000-00-00' });
        });

        document.querySelectorAll('.maskDate').forEach(function (el) {
            IMask(el, { mask: Date, min: new Date(1900, 0, 1), lazy: false });
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Fancybox ]

    function initFancybox() {
        if (typeof Fancybox === 'undefined') return;

        Fancybox.bind('[data-fancybox]', {
            Thumbs: { type: 'classic' },
            Toolbar: {
                display: { left: [], middle: [], right: ['close'] },
            },
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Init All ]

    initBackToTop();
    initSwipers();
    initMasks();
    initFancybox();

});