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
            
        }else{
            
        }
    })



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
    
        
            //.parents('.table__row').addClass('.table__row_checked');
    })
    
    
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
    
    
    
    
    
    
    
    
    
});



