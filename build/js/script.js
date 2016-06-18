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
    
    $('.js-menu .menu__item').bind('click',function(){
   
        if(!$(this).hasClass('menu__item-active')){
            $('.menu__item').removeClass('menu__item-active');
            $(this)
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


    ///////////////////////// \ Табы \ /////////////////////////////
    
    
    
    /////////////////////////  Стилезация форм  /////////////////////////////
    $(function() {

        $('input[type="checkbox"]').styler();

    });

    ///////////////////////// \ Стилезация форм \ /////////////////////////////
    
    
    
    /////////////////////////  Стилезация table  /////////////////////////////
    
    $('.table_full .table__cell').bind('click',function(e) {
        if (!$(this).find('.jq-checkbox').hasClass('checked')) {
            $(this).parents(".table__row").removeClass('table__row_checked');
        } else {
            $(this).parents(".table__row").addClass('table__row_checked');
        }
    });
    
    ///////////////////////// \ Стилезация table \ /////////////////////////////
    
    
    
    
    /////////////////////////   Кнопка   /////////////////////////////
    
    $('.js-termin-btn').bind('click',function(){
        $(this)
            .toggleClass('termin-btn_active')
            .find('.termin-btn__clock')
            .toggleClass('termin-btn__clock_active');
    })
    
    
    
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
        input: '.form-search__input',
        find: '.js-searsh',
        //placeholder: '<h3>— Нет результатов, мой дорогой Ватсон. —</h3>',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    holmes({
        input: '#serch-input',
        find: '.js-searsh',
        //placeholder: '<h3>— Нет результатов, мой дорогой Ватсон. —</h3>',
        class: {
            visible: 'visible',
            hidden: 'hidden'
        }
    });

    
    jQuery(function($) {
    
    
        // /////
        // CLEARABLE INPUT
        function tog(v){return v?'addClass':'removeClass';}
        $(document).on('input', '.form-search__input', function(){
            $(this)[tog(this.value)]('x');
        }).on('mousemove', '.x', function( e ){
            $(this)[tog(this.offsetWidth-30 < e.clientX-this.getBoundingClientRect().left)]('onX');
        }).on('touchstart click', '.onX', function( ev ){
            ev.preventDefault();
            $(this).removeClass('x onX').val('').change();
            $(this).parents('.tab-content__table')
                .find('.js-searsh').removeClass('hidden').addClass('visible');
            
            jQuery('span.highlight').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
        });
    
    
    });
    
    
    ///////////////////////////////////////////////

    jQuery(document).ready(function(){
        var minlen = 3; // минимальная длина слова
        var paddingtop = 30; // отступ сверху при прокрутке
        var scrollspeed = 200; // время прокрутки
        var keyint = 1000; // интервал между нажатиями клавиш
        var term = '';
        var n = 0;
        var time_keyup = 0;
        var time_search = 0;

        jQuery('body').delegate('#spgo', 'click', function(){
            jQuery('body,html').animate({scrollTop: jQuery('span.highlight:first').offset().top-paddingtop}, scrollspeed); // переход к первому фрагменту
        });

        function dosearch() {
            term = jQuery('#spterm').val();
            jQuery('span.highlight').each(function(){ //удаляем старую подсветку
                jQuery(this).after(jQuery(this).html()).remove();
            });
            var t = '';
            jQuery('div#content').each(function(){ // в селекторе задаем область поиска
                jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>')); // выделяем найденные фрагменты
                n = jQuery('span.highlight').length; // количество найденных фрагментов
                console.log('n = '+n);
                if (n==0)
                    jQuery('#spresult').html('Ничего не найдено');
                else
                    jQuery('#spresult').html('Результатов: '+n+'. <span class="splink" id="spgo">Перейти</span>');
                if (n>1) // если больше одного фрагмента, то добавляем переход между ними
                {
                    var i = 0;
                    jQuery('span.highlight').each(function(i){
                        jQuery(this).attr('n', i++); // нумеруем фрагменты, более простого способа искать следующий элемент не нашел
                    });
                    jQuery('span.highlight').not(':last').attr({title: 'Нажмите, чтобы перейти к следующему фрагменту'}).click(function(){ // всем фрагментам, кроме последнего, добавляем подсказку
                        jQuery('body,html').animate({scrollTop: jQuery('span.highlight:gt('+jQuery(this).attr('n')+'):first').offset().top-paddingtop}, scrollspeed); // переход к следующему фрагменту
                    });
                    jQuery('span.highlight:last').attr({title: 'Нажмите, чтобы вернуться к форме поиска'}).click(function(){
                        jQuery('body,html').animate({scrollTop: jQuery('#spterm').offset().top-paddingtop}, scrollspeed); // переход к форме поиска
                    });
                }
            });
        }

        jQuery('#spterm').keyup(function(){
            var d1 = new Date();
            time_keyup = d1.getTime();
            if (jQuery('#spterm').val()!=term) // проверяем, изменилась ли строка
                if (jQuery('#spterm').val().length>=minlen) { // проверяем длину строки
                    setTimeout(function(){ // ждем следующего нажатия
                        var d2 = new Date();
                        time_search = d2.getTime();
                        if (time_search-time_keyup>=keyint) // проверяем интервал между нажатиями
                            dosearch(); // если все в порядке, приступаем к поиску
                    }, keyint);
                }
                else
                    jQuery('#spresult').html(' '); // если строка короткая, убираем текст из DIVа с результатом 
        });

        if (window.location.hash!="") // бонус
        {
            var t = window.location.hash.substr(1, 50); // вырезаем текст
            jQuery('#spterm').val(t).keyup(); // вставляем его в форму поиска
            jQuery('#spgo').click(); // переходим к первому фрагменту
        }
    });
    
    
    
    
    
    
    //////////////////////// \ Поиск \ /////////////////////////////
    
    
    
    
    
    
    
    
    
});



