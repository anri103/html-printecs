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
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                },
            });
        }

        if (document.querySelector('.swiperTeam')) {
            new Swiper('.swiperTeam', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: '.swiperTeam-area .btn-swiper-next',
                    prevEl: '.swiperTeam-area .btn-swiper-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                },
            });
        }

        if (document.querySelector('.swiperGallery')) {
            new Swiper('.swiperGallery', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: '.swiperGallery-area .btn-swiper-next',
                    prevEl: '.swiperGallery-area .btn-swiper-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                },
            });
        }

        if (document.querySelector('.swiperBlog')) {
            new Swiper('.swiperBlog', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.swiperBlog-area .btn-swiper-next',
                    prevEl: '.swiperBlog-area .btn-swiper-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                },
            });
        }

        // Секция "Как мы работаем"
        if (
            document.querySelector('.swiperProcessImage') &&
            document.querySelector('.swiperProcessText')
        ) {

            const stepsNavItems = document.querySelectorAll('#stepsNav li');

            function updateProcessNavState(index) {
                stepsNavItems.forEach(li => {
                    li.classList.toggle(
                        'active',
                        Number(li.dataset.slideIndex) === index
                    );
                });
            }

            const swiperProcessImage = new Swiper('.swiperProcessImage', {
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                speed: 500,
                loop: true,
                allowTouchMove: false
            });

            const swiperProcessText = new Swiper('.swiperProcessText', {
                speed: 500,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },

                on: {

                    init(swiper) {
                        updateProcessNavState(swiper.realIndex);
                        swiperProcessImage.slideToLoop(swiper.realIndex, 0);
                    },

                    realIndexChange(swiper) {
                        updateProcessNavState(swiper.realIndex);
                        swiperProcessImage.slideToLoop(swiper.realIndex);
                    }

                }

            });

            stepsNavItems.forEach(li => {

                li.addEventListener('click', () => {

                    swiperProcessText.slideToLoop(
                        Number(li.dataset.slideIndex)
                    );

                });

            });
        }

        // Timeline (годы + контент)
        if (
            document.querySelector('.swiperYears') &&
            document.querySelector('.swiperHistory')
        ) {

            const swiperYears = new Swiper('.swiperYears', {
                slidesPerView: 3,
                spaceBetween: 40,
                speed: 500,
                centeredSlides: true,
                slideToClickedSlide: true,
                watchSlidesProgress: true,

                navigation: {
                    nextEl: '.swiperYears-area .btn-swiper-next',
                    prevEl: '.swiperYears-area .btn-swiper-prev',
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            });

            const swiperHistory = new Swiper('.swiperHistory', {
                speed: 500,
                autoHeight: true,

                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                }
            });

            // Контент -> годы
            swiperHistory.on('slideChange', function () {

                swiperYears.slideTo(swiperHistory.realIndex);

            });

            // Клик по году
            swiperYears.on('click', function () {

                if (swiperYears.clickedIndex !== undefined) {

                    swiperHistory.slideTo(swiperYears.clickedIndex);

                }

            });

        }

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