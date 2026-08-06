'use strict';

document.addEventListener('DOMContentLoaded', function () {

    //////////////////////////////////////////////////////////////////
    // [ Mobile Submenu ]

    function initMobSubmenu() {
        const mobileSubmenuTogglers = document.querySelectorAll('.submenu-toggler');
        if (!mobileSubmenuTogglers) return;

        mobileSubmenuTogglers.forEach(toggler => {
            toggler.addEventListener('click', function () {
                const submenu = this.nextElementSibling;
                if (submenu) {
                    submenu.classList.toggle('open');
                    this.classList.toggle('submenu-active');
                }
            });
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Header Search Suggest ]

    function initSearchSuggest() {
        document.querySelectorAll('.searchSuggest').forEach(component => {

            const input = component.querySelector('.searchSuggestInput');
            const dropdown = component.querySelector('.searchSuggestDropdown');
            const clearBtn = component.querySelector('.searchSuggestClear');

            if (!input || !dropdown) return;

            function update() {
                const hasValue = input.value.trim().length > 0;

                dropdown.classList.toggle('show', hasValue);

                if (clearBtn) {
                    clearBtn.classList.toggle('show', hasValue);
                }
            }

            input.addEventListener('input', update);

            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    input.value = '';
                    update();
                    input.focus();
                });
            }

            update();
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Back to Top Button ]

    function initBackToTop() {
        const btn = document.querySelector('.btn-backToTop');
        if (!btn) return;

        document.addEventListener('scroll', function () {
            btn.classList.toggle('show', window.scrollY > 400);
        });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    //////////////////////////////////////////////////////////////////
    // [ Swiper Sliders ]

    function initSwipers() {
        if (typeof Swiper === 'undefined') return;

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

            swiperYears.controller.control = swiperHistory;
            swiperHistory.controller.control = swiperYears;

        }

    }

    //////////////////////////////////////////////////////////////////
    // [ initClientsMarquee ]

    function initClientsMarquee() {

        const marquee = document.querySelector('.clients-marquee');

        if (!marquee) return;

        const track = marquee.querySelector('.clients-track');

        // Дублируем логотипы один раз
        const items = [...track.children];

        items.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });

        let position = 0;
        let paused = false;

        const speed = 0.935;

        function animate() {

            if (!paused) {

                position -= speed;

                const half = track.scrollWidth / 2;

                if (Math.abs(position) >= half) {
                    position = 0;
                }

                track.style.transform = `translate3d(${position}px,0,0)`;

            }

            requestAnimationFrame(animate);

        }

        animate();

        const desktop = window.matchMedia('(min-width:1200px)');

        marquee.addEventListener('mouseenter', e => {

            if (!desktop.matches) return;

            const item = e.target.closest('.client-item');

            if (!item) return;

            paused = true;

            marquee.classList.add('is-hover');

            marquee.querySelectorAll('.client-item')
                .forEach(el => el.classList.remove('active'));

            item.classList.add('active');

        }, true);

        marquee.addEventListener('mouseleave', e => {

            if (!desktop.matches) return;

            const item = e.target.closest('.client-item');

            if (!item) return;

            paused = false;

            marquee.classList.remove('is-hover');

            item.classList.remove('active');

        }, true);

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

    initMobSubmenu();
    initSearchSuggest();
    initBackToTop();
    initSwipers();
    initClientsMarquee();
    initMasks();
    initFancybox();

});