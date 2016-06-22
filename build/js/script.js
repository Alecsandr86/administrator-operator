//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
    
    ///////////////////// скрытый пароль //////////////////////////
    
    var $pass = $('#pass');
    var $btn_show = $('.pass-btn');


    (function ($) {
        $.toggleShowPassword = function (options) {
            var settings = $.extend({
                field: "#password",
                control: "#toggle_show_password",
            }, options);

            var control = $(settings.control);
            var field = $(settings.field)

            control.bind('click', function () {
                $(this).toggleClass('show_pass');
                if (control.hasClass('show_pass')) {
                    field.attr('type', 'text');
                } else {
                    field.attr('type', 'password');
                }
            })
        };
    }(jQuery));

    $.toggleShowPassword({
        field: '#pass',
        control: '.js-pass'
    });
    
    ///////////////////// \скрытый пароль\ //////////////////////////

    
    
    //////////////////////////  Табы  ///////////////////////////////
    
    $('.js-menu .menu__li').bind('click',function(){
   
        if(!$(this).find('.menu__item').hasClass('menu__item-active')){
            $('.menu__item').removeClass('menu__item-active');
            $(this).find('.menu__item')
                .addClass('menu__item-active')
                .parents('body').find('.content__item')
                .removeClass('content__item-active')
                .eq($(this).index())
                .addClass('content__item-active')
        }
    });


    $('.nav-tab .nav-tab__item').bind('click',function(){

        if(!$(this).find('.nav-tab__link').hasClass('nav-tab__link-active')){
            $('.nav-tab__link').removeClass('nav-tab__link-active');
            $(this)
                .find('.nav-tab__link')
                .addClass('nav-tab__link-active')
                .parents('.wrapper').find('.tab-content__item')
                .removeClass('tab-content__item_active')
                .eq($(this).index())
                .addClass('tab-content__item_active')
        }
    });
    $('.js-nav-tab .nav-tab_menu__item').bind('click',function () {
        $(this)
            .parents('.pages').find('#tab-cont').find('.tab-content__item')
            .removeClass('tab-content__item_active')
            .eq($(this).index())
            .addClass('tab-content__item_active')
            .parents('.pages').find('#nav-tab').find('.nav-tab__link').removeClass('nav-tab__link-active')
            .parent('.nav-tab__item')
            .eq($(this).index()).find('.nav-tab__link').addClass('nav-tab__link-active');
    });

    
    $('#create-zack-nav .create-zack-nav__item').bind('click',function () {
        
        $('.create-zack-nav__link').removeClass('create-zack-nav__link-active');
        $(this)
            .find('.create-zack-nav__link')
            .addClass('create-zack-nav__link-active')
            .parents('.pages').find('#create-zack-cont').find('.content__item').removeClass('content__item-active')
            .eq($(this).index()).addClass('content__item-active');
        
    });
    
    
    
    

    $('.tab-menu__nav .tab-menu__item').bind('click',function () {
        
        $('.tab-menu__link').removeClass('tab-menu__link-active');
        
        $(this).find(".tab-menu__link").addClass('tab-menu__link-active')
            .parents('.tab-menu').find('.tab-cont__item').removeClass('tab-cont__item-active')
            .eq($(this).index()).addClass('tab-cont__item-active');
        
    });

    if($('.table-pst__scroll').height() > 609){
        $('.table-pst__scroll').addClass('table-pst__scroll-sh');
    }else {
        $('.table-pst__scroll').removeClass('table-pst__scroll-sh');
    }
    
    $('.js-pst__item').bind('click',function () {
        
        
        $('.js-pst__item.nav-pst__item').find('.nav-pst__link').removeClass('nav-pst__link-active');
        $(this).find('.nav-pst__link').addClass('nav-pst__link-active')
            .parents('.tab-pst').find('.cont-pst__item').removeClass('cont-pst__item-active')
            .eq($(this).index()).addClass('cont-pst__item-active');

         setTimeout(function () {
             
             if($('.cont-pst__item-active .table-pst__scroll').height() > 609){
                 $('.cont-pst__item-active .table-pst__scroll').addClass('table-pst__scroll-sh');
             }else {
                 $('.cont-pst__item-active .table-pst__scroll').removeClass('table-pst__scroll-sh');
             }
         },100)
        
        
    });
    
    
    $('.nav-addres__item').bind('click',function () {
        
        $('.nav-addres__item').find('.nav-addres__link').removeClass('nav-addres__link-active');
        
        $(this)
            .find('.nav-addres__link').addClass('nav-addres__link-active')
            .parents('.tab-addres').find('.cont-addres__item').removeClass('cont-addres__item-active')
            .eq($(this).index()).addClass('cont-addres__item-active');
    });
    
    

    ///////////////////////// \ Табы \ /////////////////////////////
    
    
    
    /////////////////////////  Стилезация форм  /////////////////////////////
    $(function() {

        $('input[type="checkbox"], select, input[type="number"]').styler();

    });

    ///////////////////////// \ Стилезация форм \ /////////////////////////////
    
    
    
    /////////////////////////  Стилезация table  /////////////////////////////
    
    $('.table_full .table__cell').bind('click',function(e) {
       
        if (!$(this).find('.jq-checkbox').hasClass('checked')) {
            $(this).parents('.table__row').removeClass('table__row_checked');
        } else {
            $(this).parents('.table__row').addClass('table__row_checked');
        }
    });
    
    ///////////////////////// \ Стилезация table \ /////////////////////////////
    
    
    
    
    /////////////////////////   Кнопка   /////////////////////////////
    
    $('.js-termin-btn').bind('click',function(){
        $(this)
            .toggleClass('termin-btn_active')
            .find('.termin-btn__clock')
            .toggleClass('termin-btn__clock_active');
    });
    
    ///////////////////////// \ Кнопка \ /////////////////////////////

    
    
    
    ////////////////////////  aside-list_cont  /////////////////////////////
        
    if($('.aside-list_cont').height() > 519){
        $('.aside-list_cont')
            .next('.aside-list')
            .find('.aside-list__item_footer')
            .addClass('aside-list__item_footer-active')
    }
    
    //////////////////////// \ aside-list_cont \ /////////////////////////////
    
    
    
    ////////////////////////  Поиск  /////////////////////////////

    holmes({
        input: '.js-searsh__input_1',
        find: '.js-searsh__cont_1',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    holmes({
        input: '.js-searsh__input_2',
        find: '.js-searsh__cont_2',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });


    holmes({
        input: '.js-searsh__input_3',
        find: '.js-searsh__cont_3',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    holmes({
        input: '.js-searsh__input_4',
        find: '.js-searsh__cont_4',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    holmes({
        input: '.js-searsh__input_5',
        find: '.js-searsh__cont_5',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    
    ///////////////    Удалить результат  поиска   ///////////////
    
    jQuery(function($) {
        
        function tog(v){return v?'addClass':'removeClass';}
        $(document).on('input', '.form-search__input', function(){
            $(this)[tog(this.value)]('x');
        }).on('mousemove', '.x', function( e ){
            $(this)[tog(this.offsetWidth-30 < e.clientX-this.getBoundingClientRect().left)]('onX');
        }).on('touchstart click', '.onX', function( ev ){
            ev.preventDefault();
            $(this).removeClass('x onX').val('').change();
            $(this).parents('.tab-content__table')
                .find('.table__row').removeClass('hidden').addClass('visible');
            
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
        });
    
    
    });
    
    
    /////////////////////   Подсветка поиска  //////////////////////////

    jQuery(document).ready(function(){
        var minlen = 2; // минимальная длина слова
        var keyint = 1000; // интервал между нажатиями клавиш
        var term = '';
        var n = 0;
        var time_keyup = 0;
        var time_search = 0;
        

        function dosearch() {
            term = jQuery('.js-searsh__input_1').val();
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
            
            var t = '';
            jQuery('.js-searsh__cont_1 .table__cell').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
                n = jQuery('span.backlight-search').length; // количество найденных фрагментов
                //console.log('n = '+n);
            });
            
            
        }

        jQuery('.js-searsh__input_1').keyup(function(){
            var d1 = new Date();
            time_keyup = d1.getTime();
            if (jQuery('.js-searsh__input_1').val()!=term) // проверяем, изменилась ли строка
                if (jQuery('.js-searsh__input_1').val().length>=minlen) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия
                        
                        setTimeout(function (e) {
                            
                            jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            
                            $('.table__row input[type="checkbox"]').styler();


                            ////////////////////////  Статус btn  /////////////////////////////

                            $('.status-btn').bind('click',function (e) {
                                $(this).nextAll('.status-up').removeClass('g-hidden');
                            
                            });
                            
                            jQuery(function($){
                                $(document).mouseup(function (e){ // событие клика по веб-документу
                                    var div = $(".status-up"); // тут указываем ID элемента
                                    if (!div.is(e.target) // если клик был не по нашему блоку
                                        && div.has(e.target).length === 0) { // и не по его дочерним элементам
                                        div.addClass('g-hidden'); // скрываем его
                                    }
                                });
                            });

                            //////////////////////// \ Статус btn \ /////////////////////////////
                            
                            
                        },100);
                        
                        var d2 = new Date();
                        time_search = d2.getTime();
                        if (time_search-time_keyup>=keyint) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint);
                }
        });
        
        
    });



    jQuery(document).ready(function(){
        var minlen2 = 2; // минимальная длина слова
        var keyint2 = 1000; // интервал между нажатиями клавиш
        var term2 = '';
        var n2 = 0;
        var time_keyup2 = 0;
        var time_search2 = 0;


        function dosearch() {
            term2 = jQuery('.js-searsh__input_2').val();
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
            var t = '';
            jQuery('.js-searsh__cont_2 .table__cell').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term2, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
                n2 = jQuery('span.backlight-search').length; // количество найденных фрагментов
            });
        }

        jQuery('.js-searsh__input_2').keyup(function(){
            var d1 = new Date();
            time_keyup2 = d1.getTime();
            if (jQuery('.js-searsh__input_2').val()!=term2) // проверяем, изменилась ли строка
                if (jQuery('.js-searsh__input_2').val().length>=minlen2) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия

                        setTimeout(function (e) {

                            jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });

                            $('input[type="checkbox"]').styler();

                            ////////////////////////  Статус btn  /////////////////////////////

                            $('.status-btn').bind('click',function (e) {
                                $(this).nextAll('.status-up').removeClass('g-hidden');
                            
                            });
                            
                            jQuery(function($){
                                $(document).mouseup(function (e){ // событие клика по веб-документу
                                    var div = $(".status-up"); // тут указываем ID элемента
                                    if (!div.is(e.target) // если клик был не по нашему блоку
                                        && div.has(e.target).length === 0) { // и не по его дочерним элементам
                                        div.addClass('g-hidden'); // скрываем его
                                    }
                                });
                            });

                            //////////////////////// \ Статус btn \ /////////////////////////////
                            
                            
                        },100);
                        
                        
                        var d2 = new Date();
                        time_search2 = d2.getTime();
                        if (time_search2-time_keyup2>=keyint2) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint2);
                }
        });


    });



    jQuery(document).ready(function(){
        var minlen3 = 2; // минимальная длина слова
        var keyint3 = 1000; // интервал между нажатиями клавиш
        var term3 = '';
        var n3 = 0;
        var time_keyup3 = 0;
        var time_search3 = 0;


        function dosearch() {
            term3 = jQuery('.js-searsh__input_3').val();
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
            var t = '';
            jQuery('.js-searsh__cont_3 .table__cell').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term3, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
                n3 = jQuery('span.backlight-search').length; // количество найденных фрагментов
            });
        }

        jQuery('.js-searsh__input_3').keyup(function(){
            var d1 = new Date();
            time_keyup3 = d1.getTime();
            if (jQuery('.js-searsh__input_3').val()!=term3) // проверяем, изменилась ли строка
                if (jQuery('.js-searsh__input_3').val().length>=minlen3) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия

                        setTimeout(function (e) {

                            jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });

                            $('input[type="checkbox"]').styler();

                            ////////////////////////  Статус btn  /////////////////////////////

                            $('.status-btn').bind('click',function (e) {
                                $(this).nextAll('.status-up').removeClass('g-hidden');

                            });

                            jQuery(function($){
                                $(document).mouseup(function (e){ // событие клика по веб-документу
                                    var div = $(".status-up"); // тут указываем ID элемента
                                    if (!div.is(e.target) // если клик был не по нашему блоку
                                        && div.has(e.target).length === 0) { // и не по его дочерним элементам
                                        div.addClass('g-hidden'); // скрываем его
                                    }
                                });
                            });

                            //////////////////////// \ Статус btn \ /////////////////////////////


                        },100);


                        var d2 = new Date();
                        time_search3 = d2.getTime();
                        if (time_search3-time_keyup3>=keyint3) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint3);
                }
        });


    });


    jQuery(document).ready(function(){
        var minlen4 = 2; // минимальная длина слова
        var keyint4 = 1000; // интервал между нажатиями клавиш
        var term4 = '';
        var n4 = 0;
        var time_keyup4 = 0;
        var time_search4 = 0;


        function dosearch() {
            term4 = jQuery('.js-searsh__input_4').val();
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });

            var t = '';
            jQuery('.js-searsh__cont_4 .table__cell').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term4, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
                n4 = jQuery('span.backlight-search').length; // количество найденных фрагментов
                //console.log('n = '+n);
            });


        }

        jQuery('.js-searsh__input_4').keyup(function(){
            var d1 = new Date();
            time_keyup4 = d1.getTime();
            if (jQuery('.js-searsh__input_4').val()!=term4) // проверяем, изменилась ли строка
                if (jQuery('.js-searsh__input_4').val().length>=minlen4) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия

                        setTimeout(function (e) {

                            jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });

                            $('.table__row input[type="checkbox"]').styler();


                            ////////////////////////  Статус btn  /////////////////////////////

                            $('.status-btn').bind('click',function (e) {
                                $(this).nextAll('.status-up').removeClass('g-hidden');

                            });

                            jQuery(function($){
                                $(document).mouseup(function (e){ // событие клика по веб-документу
                                    var div = $(".status-up"); // тут указываем ID элемента
                                    if (!div.is(e.target) // если клик был не по нашему блоку
                                        && div.has(e.target).length === 0) { // и не по его дочерним элементам
                                        div.addClass('g-hidden'); // скрываем его
                                    }
                                });
                            });

                            //////////////////////// \ Статус btn \ /////////////////////////////


                        },100);

                        var d2 = new Date();
                        time_search4 = d2.getTime();
                        if (time_search4-time_keyup4>=keyint4) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint4);
                }
        });


    });


    jQuery(document).ready(function(){
        var minlen5 = 2; // минимальная длина слова
        var keyint5 = 1000; // интервал между нажатиями клавиш
        var term5 = '';
        var n5 = 0;
        var time_keyup5 = 0;
        var time_search5 = 0;


        function dosearch() {
            term5 = jQuery('.js-searsh__input_5').val();
            jQuery('span.backlight-search').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });

            var t = '';
            jQuery('.js-searsh__cont_5 .table__cell').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term5, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
                n5 = jQuery('span.backlight-search').length; // количество найденных фрагментов
                //console.log('n = '+n);
            });


        }

        jQuery('.js-searsh__input_5').keyup(function(){
            var d1 = new Date();
            time_keyup5 = d1.getTime();
            if (jQuery('.js-searsh__input_5').val()!=term5) // проверяем, изменилась ли строка
                if (jQuery('.js-searsh__input_5').val().length>=minlen5) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия

                        setTimeout(function (e) {

                            jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });
                            jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
                                jQuery(this).after(jQuery(this).html()).remove();
                            });

                            $('.table__row input[type="checkbox"]').styler();


                            ////////////////////////  Статус btn  /////////////////////////////

                            $('.status-btn').bind('click',function (e) {
                                $(this).nextAll('.status-up').removeClass('g-hidden');

                            });

                            jQuery(function($){
                                $(document).mouseup(function (e){ // событие клика по веб-документу
                                    var div = $(".status-up"); // тут указываем ID элемента
                                    if (!div.is(e.target) // если клик был не по нашему блоку
                                        && div.has(e.target).length === 0) { // и не по его дочерним элементам
                                        div.addClass('g-hidden'); // скрываем его
                                    }
                                });
                            });

                            //////////////////////// \ Статус btn \ /////////////////////////////


                        },100);

                        var d2 = new Date();
                        time_search5 = d2.getTime();
                        if (time_search5-time_keyup5>=keyint5) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint5);
                }
        });


    });






    // jQuery(document).ready(function(){
    //     var minlen = 2; // минимальная длина слова
    //     var keyint = 1000; // интервал между нажатиями клавиш
    //     var term = '';
    //     var n = 0;
    //     var time_keyup = 0;
    //     var time_search = 0;
    //    
    //     var inputSearsh6 = $('.js-searsh__input_6');                                 // инпут
    //     var classBg = $('span.backlight-search');                                   // класс подсветки
    //     var contentSearsh6 = $('.js-searsh__cont_6 .table__cell');                   // область поиска
    //
    //
    //     function dosearch() {
    //         term = inputSearsh6.val();
    //         classBg.each(function(){ //удаляем старую подсветку
    //             jQuery(this).after(jQuery(this).html()).remove();
    //         });
    //
    //         var t = '';
    //         contentSearsh6.each(function(){ // в селекторе задаем область поиска
    //             jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="backlight-search">$&</span>')); // выделяем найденные фрагменты
    //             n = classBg.length; // количество найденных фрагментов
    //             //console.log('n = '+n);
    //         });
    //
    //
    //     }
    //
    //     inputSearsh6.keyup(function(){
    //         var d1 = new Date();
    //         time_keyup = d1.getTime();
    //         if (inputSearsh6.val()!=term) // проверяем, изменилась ли строка
    //             if (inputSearsh6.val().length>=minlen) { // проверяем длину строки
    //                 setTimeout(function(){ // ждем следующего нажатия
    //
    //                     setTimeout(function (e) {
    //
    //                         jQuery('div.jq-checkbox').each(function(){ //удаляем старую подсветку
    //                             jQuery(this).after(jQuery(this).html()).remove();
    //                         });
    //                         jQuery('div.jq-checkbox__div').each(function(){ //удаляем старую подсветку
    //                             jQuery(this).after(jQuery(this).html()).remove();
    //                         });
    //
    //                         $('.table__row input[type="checkbox"]').styler();
    //
    //
    //                         ////////////////////////  Статус btn  /////////////////////////////
    //
    //                         $('.status-btn').bind('click',function (e) {
    //                             $(this).nextAll('.status-up').removeClass('g-hidden');
    //
    //                         });
    //
    //                         jQuery(function($){
    //                             $(document).mouseup(function (e){ // событие клика по веб-документу
    //                                 var div = $(".status-up"); // тут указываем ID элемента
    //                                 if (!div.is(e.target) // если клик был не по нашему блоку
    //                                     && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //                                     div.addClass('g-hidden'); // скрываем его
    //                                 }
    //                             });
    //                         });
    //
    //                         //////////////////////// \ Статус btn \ /////////////////////////////
    //
    //
    //                     },100);
    //
    //                     var d2 = new Date();
    //                     time_search = d2.getTime();
    //                     if (time_search-time_keyup>=keyint) // проверяем интервал между нажатиями
    //                         dosearch(); // если все в порядке, приступаем к поиску
    //                 }, keyint);
    //             }
    //     });
    //
    //
    // });
    
    
    
    
    
    
    
    
    
    ////////////////////////  btn  /////////////////////////////
    
    $('.status-btn').bind('click',function (e) {
       $(this).nextAll('.status-up').removeClass('g-hidden');
        
    });
    
    jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".status-up"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.addClass('g-hidden'); // скрываем его
            }
        });
    });
    
    
    
    $('.js-btn__cont-down').bind('click',function (e) {
        $(this).toggleClass('js-btn__cont-down_active').parents('.table-cast').find('.js-cont-down').slideToggle(0);
    });
    
    
    
    $('.cont-addres__btn-up').bind('click',function () {
        
        
        var heiBtn = $(this).prevAll('.cont-addres__list').find('.cont-addres__wr').height();
        var clActiv = $(this).find('.trigger-arrow').hasClass('trigger-arrow-active');
        
        if(heiBtn > 197 && !clActiv){
            
            $(this).find('.trigger-arrow').addClass('trigger-arrow-active')
                .parents($(this)).prevAll('.cont-addres__list').animate({'height': + (heiBtn + 10)},700);
            
        }
        else if(clActiv) {
            
            $(this).find('.trigger-arrow').removeClass('trigger-arrow-active')
                .parents($(this)).prevAll('.cont-addres__list').animate({'height': 197},700);
            
        }
        
        
    });
    
    
    //////////////////////// \  btn \ /////////////////////////////
    
    
    
    ////////////////////////    fancybox   /////////////////////////////
    
    //$('.js-fancy').fancybox();

    $('.js-fancy').fancybox({
        padding : 0,
        closeBtn: false
    });
    
    
    //////////////////////// \  fancybox \ /////////////////////////////
    
    
    
    ////////////////////////    castum scroller   /////////////////////////////

    $('.table-pst__scroll').mCustomScrollbar();
    
    //////////////////////// \  castum scroller \ /////////////////////////////
    
    
    
    
    
    
    
});



