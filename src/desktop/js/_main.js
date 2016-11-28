;
'use strict';

var register_url = 'https://atom.dnk.bz/api/v1/client/register?partnerKey=AdmThFoJQSf8TdTmBqrTOGgiwNgAnrEc';

var validate_url = 'https://atom.dnk.bz/api/v1/user/email/validate';

var login_url = 'https://atom.dnk.bz/api/v1/user/login';

var user_info = 'https://atom.dnk.bz/api/v1/user/info';

var step_slider_selector = '#slide-viewport';
var active_step_class = 'active_ste_slide';
var next_step_btn_selector = '.next-step';
var step_slide_speed = 500;

var step_animation_flag = false;

var video_frame_selector = '.video_btn';

var validation_inputs_selectors = 'textarea,input.valid[type="text"],input.valid[type="password"],input.valid[type="hidden"],input.valid[type="email"]';

var validation_pop_selector = '#validation_popup';

var close_pop_selectors = '.close_p';


var textarea_min_length = 5;
var textarea_max_length = 999;

var descriptor_max_length = 70;
var offer_h1_max_length = 80;
var offer_h2_max_length = 70;

var ph1_min_length = 1;
var ph1_max_length = 2;

var ph2_min_length = 3;
var ph2_max_length = 4;

var ph3_min_length = 9;
var ph3_max_length = 9;

var email_min_length = 5;
var email_alt_min_length = 0;
var email_max_length = 40;

var addr_max_length = 40;

var pass_min_length = 6;
var pass_max_length = 16;

var video_min_length = 25;
var video_max_length = 150;

var form_head_min_length = 5;
var form_head_max_length = 55;

var form_button_min_length = 5;
var form_button_max_length = 35;

var bg_video_min_length = 0;

var input_par_min_length = 3;
var input_par_max_length = 35;

jQuery.fn.ForceNumericOnly =
    function() {
        return this.each(function() {
            $(this).keydown(function(e) {
                var key = e.charCode || e.keyCode || 0;
                return (
                    key == 8 ||
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 110 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            });
        });
    };

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

function findGetParameter(parameterName) {
    var result = false,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}




function get_json(type, url, data, funct, disable_cahe, status_ER) {
    //універсальна функція роботи з jsonами

    console.log('>>>>>>>>>>>>>>>>>>request_start');
    console.log('method=   ', type);
    console.log('target=   ', url);
    console.log('data=   ', data);
    console.log('>>>>>>>>>>>>>>>>>>request_end');

    if (type == 'get') {

        var str = "";
        for (var key in data) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + data[key];
        }
        data = str;

    }

    //alert('before_send_data');
    if (disable_cahe) {
        var dis = false;
        var data_type = 'image/png';
        var test = 'image/png';
    } else {
        var dis = true;
        var data_type = 'json';
        var test = false;

        if (type == 'post') {
            data = JSON.stringify(data);
        }

    }

    $.ajax({
        type: type,
        url: url,
        contentType: false,
        data: data,
        cache: dis,
        processData: dis,
        response: 'json',
        success: function(data) {


            // if (window.location.hostname == 'localhost') {
            //     data = JSON.parse(data);
            // }


            console.log('<<<<<<<<<<<<<<<<<response_start');
            console.log(data);
            console.log('<<<<<<<<<<<<<<<<<response_end');



            if (data.success == true) {

                console.log('!!!! success=true,', data.statusCode);

                funct(data);

            } else {
                //var message = ''; 

                //message = 'status=   ' + data.status + '<br>';


                console.log('!!!! success=false,' + data.statusCode);
                if (typeof status_ER != 'undefined') {
                    status_ER(data);
                }
                // else {

                //     for (var key in data.exp) {
                //         if (data.exp.hasOwnProperty(key)) {
                //             console.log(key, ':', data.exp[key]);
                //         }
                //     }
                // }
            }


            console.log('-------------------------------');



        },
        error: function(xhr) {
            //alert('server_error_status=' + xhr.status);
            console.log('response_server_error')
            console.log($.parseJSON(xhr.responseText));
            if (typeof status_ER != 'undefined') {
                status_ER(data);
            }
            console.log('-------------------------------');
        }
    });


}



function init_step_slider_height() {
    $(step_slider_selector).height($('.' + active_step_class).outerHeight()).addClass('inited');
}

function go_to_step(step) {
    if (!step_animation_flag) {

        var cur_step = $('.' + active_step_class).data('step');

        if (cur_step != step) {

            step_animation_flag = true;

            //console.log($('section[data-step="' + step + '"]').offset().top);

            var slide_scroll = $('section[data-step="' + step + '"]').offset().top;


            // if (parseInt(step) < parseInt(cur_step)) {

            // 	slide_scroll = -$('.' + active_step_class).prev().outerHeight();

            // }else{
            // 	slide_scroll = $('.' + active_step_class).outerHeight();
            // }

            var viewport_scroll_top = $(step_slider_selector).scrollTop() + slide_scroll;

            //console.log('cur_viewport_scroll_top = ', $(step_slider_selector).scrollTop(), '; active_slide_height = ', slide_scroll, '; viewport_scroll_top = ', viewport_scroll_top);

            //$('section[data-step="' + step + '"]').show();

            $(step_slider_selector).animate({
                scrollTop: viewport_scroll_top,
                height: $('section[data-step="' + step + '"]').outerHeight()
            }, step_slide_speed, function() {
                $('.' + active_step_class).find('iframe.ytb_video').each(function() {
                    console.log('remove video ' + $(this).attr('src'));
                    $(this).parent().append('<div class="play"></div>');
                    $(this).remove();
                });
                $('.' + active_step_class).removeClass(active_step_class);
                $('section[data-step="' + step + '"]').addClass(active_step_class);

                step_animation_flag = false;

                $('.menu_a').removeClass('active');
                $('.menu_a[data-step="' + step + '"]').addClass('allowed').addClass('active');

            });
            $("html, body").animate({
                scrollTop: 0
            }, step_slide_speed);

            if (parseInt(step) != 1) {
                $('.back_btn').show();
            } else {
                $('.back_btn').hide();
            }

        } else {
            $(step_slider_selector).animate({
                height: $('section[data-step="' + step + '"]').outerHeight()
            }, step_slide_speed);
        }

        if (step != 1) {
            $('.header').addClass('h-fixed');
        }

    } else {
        console.log('step_animation blocked by flag');
    }

}

function append_video(elem) {
    var video_id = elem.data('video');
    elem.html('<iframe class="ytb_video" src="https://www.youtube.com/embed/' + video_id + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
    console.log('append video ', video_id);
}

function hfixed() {
    if ($(step_slider_selector).scrollTop() == 0) {
        if ($(window).scrollTop() > 55) {
            $('.header').addClass('h-fixed');
        } else {
            $('.header').removeClass('h-fixed');
        }
    } else {
        $('.header').addClass('h-fixed');
    }
}

/*function init_hfixed() {
    if ($(window).scrollTop() > 55) {
        $('.header').addClass('h-fixed');
    }
}*/

function get_input_parameters(type_data) {

    var name_input, max_length, min_length, type_of_input;
    var input_obj = {};

    switch (type_data) {

        case 'descriptor':
            input_obj.name_input = '"Дескриптор"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = descriptor_max_length;
            input_obj.type_of_input = 'textarea';
            break;

        case 'what_sell':

            input_obj.name_input = '"Что Вы продаете?"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = textarea_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'what_buy':

            input_obj.name_input = '"Что покупает клиент?"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = textarea_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'what_take':

            input_obj.name_input = '"Что получает клиент?"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = textarea_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'offer_h1':

            input_obj.name_input = '"Основа"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = offer_h1_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'offer_h2':

            input_obj.name_input = '"Преимущество"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = offer_h2_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'ph1':

            input_obj.name_input = '"Код страны(телефон)"';
            input_obj.min_length = ph1_min_length;
            input_obj.max_length = ph1_max_length;
            input_obj.type_of_input = 'phonepart';

            break;

        case 'ph2':

            input_obj.name_input = '"Код города(телефон)"';
            input_obj.min_length = ph2_min_length;
            input_obj.max_length = ph2_max_length;
            input_obj.type_of_input = 'phonepart';

            break;

        case 'ph3':

            input_obj.name_input = '"Номер телефона"';
            input_obj.min_length = ph3_min_length;
            input_obj.max_length = ph3_max_length;
            input_obj.type_of_input = 'phonepart';

            break;

        case 'act_email':

            input_obj.name_input = '"Емейл для заявок"';
            input_obj.min_length = email_min_length;
            input_obj.max_length = email_max_length;
            input_obj.type_of_input = 'email';

            break;

        case 'page_email':

            input_obj.name_input = '"Емейл на странице"';
            input_obj.min_length = email_alt_min_length;
            input_obj.max_length = email_max_length;
            input_obj.type_of_input = 'email';

            break;

        case 'page_addr':

            input_obj.name_input = '"Адрес"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = addr_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'pass':

            input_obj.name_input = '"Пароль"';
            input_obj.min_length = pass_min_length;
            input_obj.max_length = pass_max_length;
            input_obj.type_of_input = 'pass';

            break;

        case 'email':

            input_obj.name_input = '"Емейл"';
            input_obj.min_length = email_min_length;
            input_obj.max_length = email_max_length;
            input_obj.type_of_input = 'email';

            break;

        case 'video':

            input_obj.name_input = '"Продающее видео"';
            input_obj.min_length = video_min_length;
            input_obj.max_length = video_max_length;
            input_obj.type_of_input = 'video';

            break;

        case 'logo_img':

            input_obj.name_input = '"Логотип"';
            input_obj.min_length = 0;
            input_obj.max_length = 0;
            input_obj.type_of_input = 'img';

            break;

        case 'form_head':

            input_obj.name_input = '"Причина"';
            input_obj.min_length = form_head_min_length;
            input_obj.max_length = form_head_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'form_button':

            input_obj.name_input = '"Надпись на копке"';
            input_obj.min_length = form_button_min_length;
            input_obj.max_length = form_button_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'bg_img_d':

            input_obj.name_input = '"Фон"';
            input_obj.min_length = 0;
            input_obj.max_length = 0;
            input_obj.type_of_input = 'img';

            break;

        case 'bg_video':

            input_obj.name_input = '"Фонове видео"';
            input_obj.min_length = bg_video_min_length;
            input_obj.max_length = video_max_length;
            input_obj.type_of_input = 'video';

            break;

        case 'input_par_name':

            input_obj.name_input = '"Название поля"';
            input_obj.min_length = input_par_min_length;
            input_obj.max_length = input_par_max_length;
            input_obj.type_of_input = 'input_par';

            break;

        case 'input_par_plac':

            input_obj.name_input = '"Надпись на поле"';
            input_obj.min_length = input_par_min_length;
            input_obj.max_length = input_par_max_length;
            input_obj.type_of_input = 'input_par';

            break;

        case 'input_count':

            input_obj.name_input = '';
            input_obj.min_length = 1;
            input_obj.max_length = 1;
            input_obj.type_of_input = 'input_count';

            break;

    }
    return input_obj;
}

function live_validation_input(elem) {

    var type_data = $(elem).data('input-type');

    var inp_value = $(elem).val();

    var input_obj = get_input_parameters(type_data);

    if (input_obj.type_of_input == 'textarea' || input_obj.type_of_input == 'phonepart' || input_obj.type_of_input == 'email' || input_obj.type_of_input == 'pass' || input_obj.type_of_input == 'video' || input_obj.type_of_input == 'input_par') {

        if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - live validation - error - over');
            $(elem).parent().children('span').addClass('error-over');

        } else {

            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over');
            console.log(type_data + ' - live validation - good');
            $(elem).parent().children('span').removeClass('error-over');

        }
    }

}

function validate_input(elem) {
    var type_data = $(elem).data('input-type');

    var inp_value = $(elem).val();

    console.log('input type = ' + type_data, '; input value = ' + inp_value);

    var input_obj = get_input_parameters(type_data);

    console.log('input_obj = ', input_obj);

    if (input_obj.type_of_input == 'textarea') {

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');
        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'phonepart') {

        var patt1 = new RegExp(/^\d*$/);
        var patt2 = new RegExp(/^\d\d\d\-\d\d\-\d\d$/);

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            $(elem).closest('.input').addClass('error-input');
            console.log(type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            $(elem).closest('.input').addClass('error-input');
            console.log(type_data + ' - error - over');

        } else if (!$(elem).hasClass('iph3')) {
            //console.log(inp_value);

            if (!patt1.test(inp_value)) {

                $(elem).addClass('error-input').addClass('error-nonum');
                $(elem).closest('.input').addClass('error-input');
                console.log(type_data + ' - error - nonumber');

            }

        } else if ($(elem).hasClass('iph3')) {
            //console.log(inp_value);
            if (!patt2.test(inp_value)) {

                $(elem).addClass('error-input').addClass('error-nonum');
                $(elem).closest('.input').addClass('error-input');
                console.log(type_data + ' - error - nonumber');

            }

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-nonum');
            $(elem).closest('.input').removeClass('error-input');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'email') {

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else if (inp_value.length > 0 && !validateEmail(inp_value)) {

            $(elem).addClass('error-input').addClass('error-noemail');
            console.log(type_data + ' - error - noemail');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-noemail');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'pass') {

        var patt = new RegExp(/^[a-zA-Z0-9_]*$/);

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else if (inp_value.length > 0 && !patt.test(inp_value)) {

            $(elem).addClass('error-input').addClass('error-nopass');
            console.log(type_data + ' - error - nopass');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-noemail');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'video') {

        console.log('youtube_video_id = ' + youtube_parser(inp_value));

        if (inp_value != '0' && inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else if (inp_value != '0' && inp_value.length > 0 && !youtube_parser(inp_value)) {

            $(elem).addClass('error-input').addClass('error-novideo');
            console.log(type_data + ' - error - novideo');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-novideo');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'img') {

        if (inp_value == '') {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log(type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'input_par') {

        if (inp_value != '0' && inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log(type_data + ' - error - empty');
        } else
        if (inp_value != '0' && inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log(type_data + ' - good');
        }

    }

    if (input_obj.type_of_input == 'input_count') {

        if (parseInt(inp_value) > 3) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log(type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log(type_data + ' - good');
        }

    }

}

function validate_wrap(wrap, if_good) {
    wrap.find(validation_inputs_selectors).each(function(index, el) {

        validate_input(el);

    });

    var errors_elements = wrap.find('.error-input');

    if (errors_elements.length == 0) {

        if (wrap.is('section')) {

            $('.' + active_step_class).addClass('passed');

        }

        if_good();

        console.log('validation - true');
        console.log('_______________');

    } else {

        console.log('validation - false');
        console.log('_______________');

        var errors_wrap = $(validation_pop_selector).find('p');
        errors_wrap.html('');

        errors_elements.each(function(index, el) {

            var type_data = $(this).data('input-type');
            var name_input, max_length, error_text;

            var input_obj = get_input_parameters(type_data);

            if (input_obj.type_of_input == 'textarea') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'phonepart') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-nonum')) {
                    error_text = '<span>Символы в поле ' + input_obj.name_input + ' должны быть цифрами</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'email') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-noemail')) {
                    error_text = '<span>Значение в поле ' + input_obj.name_input + ' не является емейлом</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'pass') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-nopass')) {
                    error_text = '<span>Значение в поле ' + input_obj.name_input + ' должно состоять из латинских букв и цифр</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'video') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-novideo')) {
                    error_text = '<span>Значение в поле ' + input_obj.name_input + ' не ссылка на youtube</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'img') {

                if ($(this).val() == '') {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                }

            } else

            if (input_obj.type_of_input == 'input_par') {

                if ($(this).hasClass('error-empty')) {
                    error_text = '<span>Поле ' + input_obj.name_input + ' не заполнено</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                }
            } else

            if (input_obj.type_of_input == 'input_count') {

                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Максимальное количество полей для формы - 3</span>';
                    errors_wrap.append(error_text);
                }
            }

        });

        $(validation_pop_selector).arcticmodal();
    }
}

function send_first_part(callback) {

    var enter_char = new RegExp(String.fromCharCode(10), 'g');

    var descriptor = $('textarea[data-input-type="descriptor"]').val().replace(/^\s+|\s+$/g, '');

    var target = $('input[name="user_hash"]').val();

    var page_title = descriptor.replace(enter_char, ' ');

    descriptor = descriptor.replace(enter_char, ' <br>');

    var what_sell = $('textarea[data-input-type="what_sell"]').val().replace(/^\s+|\s+$/g, '');
    var what_buy = $('textarea[data-input-type="what_buy"]').val().replace(/^\s+|\s+$/g, '');
    var what_take = $('textarea[data-input-type="what_take"]').val().replace(/^\s+|\s+$/g, '');
    var offer_h1 = $('textarea[data-input-type="offer_h1"]').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var offer_h2 = $('textarea[data-input-type="offer_h2"]').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var phone_p1 = $('input[data-input-type="ph1"]').val();
    var phone_p2 = $('input[data-input-type="ph2"]').val();
    var phone_p3 = $('input[data-input-type="ph3"]').val();
    var act_email = $('input[data-input-type="act_email"]').val();
    var page_email = $('input[data-input-type="page_email"]').val();
    var page_addr = $('input[data-input-type="page_addr"]').val();

    if (page_email.length == 0) {
        page_email = act_email
    }

    var content = {
        //page_title: page_title,
        descriptor: descriptor,
        what_sell: what_sell,
        what_buy: what_buy,
        what_take: what_take,
        offer_h1: offer_h1,
        offer_h2: offer_h2,
        phone_p1: phone_p1,
        phone_p2: phone_p2,
        phone_p3: phone_p3,
        act_email: act_email,
        page_email: page_email,
        page_addr: page_addr
    }

    var data = {
        email: act_email,
        content: content
    };

    console.log('send_first_part - ', data);

    get_json('post', register_url, data, callback);

    //if (callback) {
    //    callback();
    //}

}

function send_full_data(callback) {

    var enter_char = new RegExp(String.fromCharCode(10), 'g');

    var descriptor = $('textarea[data-input-type="descriptor"]').val().replace(/^\s+|\s+$/g, '');

    var target = $('input[name="user_hash"]').val();

    var page_title = descriptor.replace(enter_char, ' ');

    descriptor = descriptor.replace(enter_char, ' <br>');

    var what_sell = $('textarea[data-input-type="what_sell"]').val().replace(/^\s+|\s+$/g, '');
    var what_buy = $('textarea[data-input-type="what_buy"]').val().replace(/^\s+|\s+$/g, '');
    var what_take = $('textarea[data-input-type="what_take"]').val().replace(/^\s+|\s+$/g, '');
    var offer_h1 = $('textarea[data-input-type="offer_h1"]').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var offer_h2 = $('textarea[data-input-type="offer_h2"]').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var phone_p1 = $('input[data-input-type="ph1"]').val();
    var phone_p2 = $('input[data-input-type="ph2"]').val();
    var phone_p3 = $('input[data-input-type="ph3"]').val();
    var act_email = $('input[data-input-type="act_email"]').val();
    var page_email = $('input[data-input-type="page_email"]').val();
    var page_addr = $('input[data-input-type="page_addr"]').val();

    if (page_email.length == 0) {
        page_email = act_email
    }

    var template = 'wov';
    var content_video = $('#content_video').val();
    if (content_video != '0') {
        content_video = youtube_parser(content_video);
        template = 'wiv';
    }

    var logo_img = $('#logo_img').val();
    var bg_img_d = $('#bg_img_d').val();
    var bg_img_m = $('#bg_img_m').val();

    var bg_video = $('#bg_video').val();

    if (bg_video != '0') {
        bg_video = youtube_parser(bg_video);
    }

    var form_head = $('#form_head').val();
    var form_button = $('#form_button').val();

    var form_email = $('#form_input_email').val();
    var form_custom = $('#form_input_custom').val();
    var form_custom_name = $('#d_inp_name').val();
    var form_custom_plac = $('#d_inp_plac').val();

    var userKey = $('#userKey').val();
    var pageId = $('#pageId').val();

    var content = {
        page_title: page_title,
        descriptor: descriptor,
        what_sell: what_sell,
        what_buy: what_buy,
        what_take: what_take,
        offer_h1: offer_h1,
        offer_h2: offer_h2,
        phone_p1: phone_p1,
        phone_p2: phone_p2,
        phone_p3: phone_p3,
        act_email: act_email,
        page_email: page_email,
        page_addr: page_addr,
        content_video: content_video,
        logo_img: logo_img,
        bg_img_d: bg_img_d,
        bg_img_m: bg_img_m,
        bg_video: bg_video,
        form_head: form_head,
        form_button: form_button,
        form_email: form_email,
        form_custom: form_custom,
        form_custom_name: form_custom_name,
        form_custom_plac: form_custom_plac,
        bg_shadow: 0.8
    }

    var data = {
        id: pageId,
        template: template,
        content: content
    };

    console.log('send_full_data - ', data);

    var url = 'https://atom.dnk.bz/api/v1/page/save?userKey=' + userKey;


    get_json('post', url, data, callback);

    //if (callback) {
    //    callback();
    //}

}





function init_slider(selector, slideWidth, callback) {

    //sider otz
    slider = $(selector).bxSlider({
        infiniteLoop: true,
        //nextSelector:left_selector,
        //prevSelector:right_selector,
        slideWidth: slideWidth,
        controls: true,
        pager: false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        onSlideNext: function($slideElement, oldIndex, newIndex) {},
        onSlidePrev: function($slideElement, oldIndex, newIndex) {},
        onSliderLoad: function() {
            console.log('load_slider - ', selector);
            if (callback) {
                callback();
            }
        }
    });
    return slider
}


function open_menu() {
    var to_top = $('.header .login').offset().top - $(window).scrollTop();
    $('#menu').addClass('opened');
    $('body').removeAttr('style').addClass('scroll_blocked');
    $('#menu .close').css('top', to_top + 'px');
}

function close_menu() {
    $('#menu').removeClass('opened');
    $('body').removeClass('scroll_blocked');
}

function open_login() {
    var to_top = $('.header .login').offset().top - $(window).scrollTop();
    $('#login').addClass('opened');
    $('#login .close').css('top', to_top + 'px');

    if ($('.' + active_step_class).data('step') == '6') {
        $('#login').find('form').attr('data-event', 'login_to_send');
    } else {
        $('#login').find('form').attr('data-event', 'login');
    }
}

function close_login() {
    $('#login').removeClass('opened');
}

function login(wrap, callback) {

    validate_wrap(wrap, function() {

        var data = {
            login: wrap.find('input[name="login"]').val(),
            password: wrap.find('input[name="password"]').val()
        };

        var event = wrap.attr('data-event');

        console.log(data);
        var user_hash;
        get_json('get', login_url, data, function(data) {

            $('input[name="userKey"]').val(data.response.userKey);

            close_login();

            $('section[data-step="6"]').remove();

            if (event == 'login_to_send') {
                go_to_step(7);
            }

            get_user_name(data.response.userKey);

        });

    });

}

function get_user_name(hash) {

    var data = {
        userKey: hash
    };

    get_json('get', user_info, data, function(data) {


        $('.user .user_n').html(data.response.email);
        $('input[name="userKey"]').val(hash);
        $('.user').show();
        $('a.login').hide();
        console.log('USER_KEY = ', hash);
        setCookie('dnk_user', hash, 0);
        console.log('SET_COOKIE');


    });
    var url = 'https://atom.dnk.bz/api/v1/page/list';

    get_json('get', url, data, function(data) {

        $('input[name="pageId"]').val(data.response[0].id);
        console.log('PAGE_ID = ', data.response[0].id);


        paste_values(data.response[0].content);
        $('.sec11 .site').append('<iframe src="' + data.response[0].url + '"></iframe>');


    });
}

function logout() {

    var hash = $('input[name="userKey"]').val();

    $('input[name="pageId"]').val('');
    $('input[name="userKey"]').val('');
    $('.user').hide();
    $('a.login').show();

    setCookie('dnk_user', hash, -10);

    location.reload();
}

function validate_user(email, hash) {

    console.log('__ validate_user(', email, hash, ')');

    //$('input[name="user_hash"]').val(hash);

    var email = findGetParameter('email');
    var code = findGetParameter('code');
    //var status = "validate";

    //console.log('user email = ', email);
    //console.log('status = ', status);
    var data = {
            email: email,
            code: code
        }
        //console.log(data);

    get_json('get', validate_url, data, function(data) {


        $('section[data-step="6"]').remove();

        for (var i = 1; i < 6; i++) {

            $('section[data-step="' + i + '"]').addClass('passed');
            $('.menu_a[data-step="' + i + '"]').addClass('allowed');
        }

        console.log('!get_first_part_from_server');
        go_to_step(7);

        $('input[name="userKey"]').val(data.userKey);
        $('input[name="pageId"]').val(data.userKey);

        get_user_name(data.userKey);

        paste_values(data.response.content);

        history.pushState('', document.title, './');

        //console.log('refresh coockie - ', hash, email);
        //setCookie('dnkatom_code', hash, 1);
        //setCookie('dnkatom_email', email, 1);


    }, false, function() {
        history.pushState('', document.title, './');

    });

}

function paste_values(content) {
    $('section[data-step="6"]').remove();
    console.log(content);
    for (var key in content) {

        if (content[key].toString().indexOf(' <br>') != -1) {

            var regex = / <br\s*[\/]?>/gi;
            content[key] = content[key].replace(regex, "\n");
        }

        if (key == 'bg_video' || key == 'content_video') {
            if (content[key] != '0') {

                content[key] = content[key].replace(content[key], 'https://www.youtube.com/watch?v=' + content[key]);

                if (key == 'content_video') {
                    $('.video_trigger[data-event="show"]').trigger('click');
                }
            } else {
                if (key == 'content_video') {
                    $('.video_trigger[data-event="hide"]').trigger('click');
                }

            }
        }
        if (key == 'form_custom' && content[key] != '0') {
            $('.r_btn[data-check="custom"]').trigger('click');
            $('input[name="d_inp_name"]').val(content['form_custom_name']);
            $('input[name="d_inp_plac"]').val(content['form_custom_plac']);

        }

        if (key == 'form_email' && content[key] != '0') {
            $('.r_btn[data-check="email"]').trigger('click');
        }

        if (key == 'logo_img') {
            if (content[key] != '0') {

                $('.logo_trigger[data-event="show"]').trigger('click');
                $('.sec7 .block .logo_img').css('background-image', 'url(' + content[key] + ')');
            } else {
                $('.logo_trigger[data-event="hide"]').trigger('click');

            }
        }

        $('input[name="' + key + '"],textarea[name="' + key + '"]').val(content[key]);

        //console.log(key,':',content[key]);
    }
    $('.iph1,.iph2,.iph3').trigger('change');
    $('span.placeholder_p').trigger('click');

    console.log('values_pasted - ', content);

}


function upload_img(elem, type, callback) {

    var data = new FormData($(elem).closest('form')[0]);
    //var data = new FormData();

    if ($(elem).val() != '') {
        if (type == 'jpg') {
            var valid_types = "image/jpeg";
            var target = 'bg';
        } else if (type == 'png') {
            var valid_types = "image/png";
            var target = 'logo';
        }
        var file = elem.files[0];
        var fileType = file["type"];
        var ValidImageTypes = [valid_types];



        if ($.inArray(fileType, ValidImageTypes) < 0) {
            show_alert_mess('Файл не является изображением ' + type + ' формата');
            $(elem).val('');
        } else
        if (file.size > 10e+6) {
            show_alert_mess('Максимальный размер файла 10МБ');
            $(elem).val('');
        } else {


            var img = new Image();

            img.src = window.URL.createObjectURL(file);

            img.onload = function() {
                var width = img.naturalWidth,
                    height = img.naturalHeight;

                window.URL.revokeObjectURL(img.src);

                if (width < 7000 && height < 5000) {

                    var userKey = $('input[name="userKey"]').val();
                    var pageId = $('input[name="pageId"]').val();


                    var upload_url = 'https://atom.dnk.bz/api/v1/page/' + pageId + '/image/upload?userKey=' + userKey + '&type=' + target;

                    console.log('отправка фотографии');
                    //data.append('img', file);
                    //data = file;

                    //var FR= new FileReader();
                    //FR.onload = function(e) {
                    //   data = e.target.result;//.replace(/^data:image\/(png|jpg);base64,/, "");
                    //var file = {
                    // data:data
                    //}
                    console.log('FormData:,', data);
                    console.log('FormData->File:,', data.get('file'));
                    get_json('post', upload_url, data, callback, true, callback);


                    //};       
                    //FR.readAsDataURL( data );


                } else {

                    show_alert_mess('Файл имеет слишокм большое разрешение');
                    return false;
                }

            }


        }
    }
}

function show_alert_mess(text) {
    $('#validation_popup p').html('<span>' + text + '</span>');
    $('#validation_popup').arcticmodal();
}

var crm_etaps = {
    number_vector: ['Первый этап', 'Второй этап', 'Третий этап', 'Четвертый этап', 'Пятый этап', 'Шестой этап', 'Седьмой этап', 'Восьмой этап', 'Девятый этап', 'Десятый этап', 'Одинадцатый этап', 'Двенадцатый этап', 'Тринадцатый этап', 'Четырнадцатый этап', 'Пятнадцатый этап', 'Шестнадцатый этап', 'Семнадцатый этап', 'Восемьнадцатый этап', 'Девятнадцатый этап', 'Двадцатый этап'],
    content: [{
        name: 'Обработать заявку',
        color: '#adadad'
    }, {
        name: 'Обработать заявку',
        color: '#adadad'

    }, {
        name: 'Обработать заявку',
        color: '#adadad'

    }],
    template: {
        name: 'Шаблон',
        color: '#adadad'

    }
};

function delete_null_properties(test, recurse) {
    for (var i in test) {
        if (test[i] === null) {
            delete test[i];
        } else if (recurse && typeof test[i] === 'object') {
            delete_null_properties(test[i], recurse);
        }
    }
}

function build_crm_etaps() {

    console.log('crm_etaps = ', crm_etaps)

    var wrap = $('.etap-wrap');
    wrap.html('');
    for (var i = 0; i < crm_etaps.content.length; i++) {

        if (crm_etaps.content[i] != null) {
            var carcas = '<div class="etap" data-number="' + i + '"><p>' + crm_etaps.number_vector[i] + '</p><a class="btn" style="background-color:' + crm_etaps.content[i].color + '" href="#" contenteditable="true">' + crm_etaps.content[i].name + '</a><label for="for_color_' + i + '" class="span"></label><input type="color" name="color" id="for_color_' + i + '" value="' + crm_etaps.content[i].color + '" style="display:none;"></div>';
            $(carcas).appendTo(wrap);

        }

    }

    $('.sec15 .btn').unbind('click');

    $('.sec15 .btn').unbind('keydown');

    $('.sec15 .btn').click(function(e) {
        e.preventDefault();
    });

    $('.sec15 .btn').keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $(this).blur();
            return false;
        }
    });

    $('.sec15 .btn').unbind('blur');

    $('.sec15 .btn').blur(function() {

        var wrap_e = $(this).closest('.etap');
        var i = parseInt(wrap_e.attr('data-number'));

        if ($(this).html() == '') {
            console.log('before_delete_crm_etaps = ', crm_etaps)
                //crm_etaps.content.remove(i);
            delete crm_etaps.content[i];

            for (var j = i; j <= crm_etaps.content.length; j++) {
                if (crm_etaps.content[j + 1]) {
                    crm_etaps.content[j] = crm_etaps.content[j + 1]
                } else {
                    delete crm_etaps.content[j];
                }
            }
            //crm_etaps = JSON.parse(JSON.stringify(crm_etaps));
            //crm_etaps.content = delete_null_properties(crm_etaps.content);
            console.log('after_delete_crm_etaps = ', crm_etaps)

            //wrap_e.remove();
            build_crm_etaps();
        } else {
            crm_etaps.content[i].name = $(this).text();
            console.log('after_edit_name_etaps = ', crm_etaps)
        }
    });

}

$(document).ready(function() {
    hfixed();
    init_step_slider_height();
    init_user();
    //____________


    //$('input[name="userKey"]').val();
    //$('input[name="pageId"]').val();
    //____________
    $(next_step_btn_selector).click(function(e) {
        e.preventDefault();

        var _this = this;
        var wrap = $(this).closest('section');

        validate_wrap(wrap, function() {

            var next_step = $(_this).closest('section').next(':visible').data('step');

            go_to_step(next_step);

            console.log('go to step ' + next_step);


        });





    });

    $(video_frame_selector).click(function(e) {
        e.preventDefault();
        append_video($(this));
    });

    $(validation_inputs_selectors).on('keyup', function(e) {
        live_validation_input(this);
    });

    $(close_pop_selectors).click(function(e) {
        e.preventDefault();
        $(this).parent().arcticmodal('close');
        $(this).parent().find('iframe.ytb_video').each(function() {
            console.log('remove video ' + $(this).attr('src'));
            $(this).parent().append('<div class="play"></div>');
            $(this).remove();
        });
    });
    //login part

    $('input[name="password"]').blur(function() {
        if ($(this).val().length < 4) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="password"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('input[name="login"]').blur(function() {
        if ($(this).val().length < 3) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="login"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('form.login').submit(function(e) {
        e.preventDefault();
        var event = $(this).attr('data-event');
        login($(this));
    });

    //lets_phone
    $('.iph1,.iph2,.iph3').on('input change', function(e) {
        console.log('keypress on phone part');

        var inp_wrap = $(this).closest('.input');
        var phone_inp = $('input[name="phone"]');

        if ($(this).hasClass('iph1')) {

            if ($(this).val().length > 0) {
                $(this).width($(this).val().length * 9);
            }

            if ($(this).val().length > 2) {
                $(this).addClass('error');
                inp_wrap.addClass('error-input').addClass('error_country_code');
                phone_inp.addClass('error-input').addClass('error_country_code');
            } else {
                $(this).removeClass('error');
                inp_wrap.removeClass('error_country_code');
                phone_inp.removeClass('error_country_code');
            }

        }


        if ($(this).hasClass('iph2')) {

            if ($(this).val().length > 2) {
                $(this).width($(this).val().length * 9);
            }

            if ($(this).val().length > 4) {
                $(this).addClass('error');
                inp_wrap.addClass('error-input').addClass('error_city_code');
                phone_inp.addClass('error-input').addClass('error_city_code');
            } else {
                $(this).removeClass('error');
                inp_wrap.removeClass('error_city_code');
                phone_inp.removeClass('error_city_code');
            }
        }

        if (!inp_wrap.hasClass('error_city_code') && !inp_wrap.hasClass('error_country_code')) {
            inp_wrap.removeClass('error-input');
            phone_inp.removeClass('error-input');
        }


    });
    /*$('.iph1,.iph2,.iph3').on('keyup',function(){

        var phone_inp = $('input[name="phone"]');

        var phone_value = $('.iph1').val() + ',' + $('.iph2').val() + ',' + $('.iph3').val();

        phone_inp.val(phone_value);

        console.log(phone_value);

    });*/

    $('.iph1,.iph2').ForceNumericOnly();

    $('span.placeholder_p').click(function() {
        $(this).hide();
        $(this).parent().find('.iph1').focus();
    });

    $('.iph3').mask('999-99-99');
    $('.iph3').blur(function() {
        if ($(this).val().length != 9) {
            $(this).closest('.input').addClass('error-input');
        }
    });
    $('.iph3').focus(function() {
        $(this).closest('.input').removeClass('error-input');
    });

    //


    $('input[name="act_email"]').blur(function() {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="act_email"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('input[name="page_email"]').blur(function() {

        if ($(this).val().length > 0 && !validateEmail($(this).val())) {
            $(this).addClass('error-input');
        }

    });

    $('input[name="page_email"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('input[name="page_addr"]').blur(function() {
        if ($(this).val().length < 6 || $(this).val().length > 40) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="page_addr"]').focus(function() {
        $(this).removeClass('error-input');
    });




    $('.sec6 .wrap .block.absolute a').click(function(e) {

        e.preventDefault();
        var event = $(this).data('event');
        if (event == 'register') {

            send_first_part(function() {

                $('.sec6 .wrap .block.absolute').fadeOut();
                $('.sec6 .wrap .block-after').addClass('show');

            });

        }

        if (event == 'login') {

            open_login();

            $('form.login').attr('data-event', 'login_to_send');

        }

    });

    $('.video_trigger').click(function(e) {
        e.preventDefault();

        var event = $(this).data('event');
        $('.video_trigger').removeClass('active');
        $(this).addClass('active')
        if (event == 'hide') {
            $('#content_video').val('0').hide();
        } else {
            $('#content_video').val('').show();
        }
        if ($(this).closest('section').hasClass(active_step_class)) {
            go_to_step(7);
        }

    });

    $('.logo_trigger').click(function(e) {
        e.preventDefault();

        var event = $(this).data('event');
        $('.logo_trigger').removeClass('active');
        $(this).addClass('active')
        if (event == 'hide') {
            $('.logo_part_show').hide();
            $('#logo_img').val('0');
            $('.sec7 .block .logo_img').css('background-image', 'none');
        } else {
            $('.logo_part_show').show();
            $('#logo_img').val('');
        }
        if ($(this).closest('section').hasClass(active_step_class)) {
            go_to_step(7);
        }

    });

    $('.r_btn.check').click(function(e) {
        e.preventDefault();

        var target = $(this).data('check');
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            if (target == "email") {
                $('#form_input_email').val('1');
            } else {
                $('#form_input_custom').val('1');
                $(this).parent().children('.inputs').css('display', 'inline-block');
                var inp = $(this).parent().children('.inputs').children('input');
                //inp.addClass('valid');
                inp.each(function(index, el) {
                    var inp_val = $(this).val();

                    console.log(inp_val);
                    if (inp_val == '0') {
                        $(this).val('');
                    }

                });
            }

        } else {

            $(this).removeClass('active');
            if (target == "email") {
                $('#form_input_email').val('0');
            } else {
                $('#form_input_custom').val('0');
                $(this).parent().children('.inputs').css('display', 'none');
                var inp = $(this).parent().children('.inputs').children('input');
                //inp.removeClass('valid');
                inp.each(function(index, el) {
                    var inp_val = $(this).val();

                    console.log(inp_val);
                    if (inp_val == "") {
                        $(this).val('0');
                    }

                });

            }

        }

        $('#input_count').val($(this).parent().children('.r_btn.active').length);

    });

    $('a.login').click(function(e) {
        e.preventDefault();
        open_login();
        $('form.login').attr('data-event', 'login');
    });

    $('a.logout').click(function(e) {
        e.preventDefault();
        logout();
    });

    $('#login .close').click(function(e) {
        e.preventDefault();
        close_login();
    });

    $('.menu_a').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('allowed')) {
            var target_step = $(this).data('step');
            var wrap = $('.' + active_step_class);
            if ($('.' + active_step_class).hasClass('passed')) {
                validate_wrap(wrap, function() {
                    go_to_step(target_step);
                });
            } else {
                go_to_step(target_step);
            }
            close_menu();
        } else {
            $('.not-allowed').arcticmodal();
        }
    });

    $('.back_btn').click(function(e) {
        e.preventDefault();
        var target_step = $('.' + active_step_class).prev().data('step');
        var wrap = $('.' + active_step_class);
        if ($('.' + active_step_class).hasClass('passed')) {
            validate_wrap(wrap, function() {
                go_to_step(target_step);
            });
        } else {
            go_to_step(target_step);
        }
    });

    $('.politic').click(function(e) {
        e.preventDefault();
        $('.conf-pop').arcticmodal();
    });

    $('.btn_menu_open').click(function(e) {
        e.preventDefault();
        open_menu();
    });

    $('#menu .close').click(function(e) {
        e.preventDefault();
        close_menu();
    });

    $('.btn_next.send-step').click(function(e) {
        e.preventDefault();
        send_full_data(function(data) {
            go_to_step(10);
            $('.sec11 .site').find('iframe').remove();
            $('.sec11 .site').append('<iframe src="' + data.response.url + '"></iframe>');
            $('.sec11 .url_site').attr('href', data.response.url).html(data.response.url.replace(/https?:\/\//i, ""));
        });
    });

    var offer_slider_inited = false;
    $('#offer_pop').click(function(e) {
        e.preventDefault();
        if (!offer_slider_inited) {
            offer_slider = init_slider('.offer-pop .init_slider', 980);
            offer_slider_inited = true
        }
        $('.offer-pop').arcticmodal({
            afterOpen: function() {
                offer_slider.reloadSlider()
            }
        });
    });

    var content_video_slider_inited = false;
    $('#content_video_pop').click(function(e) {
        e.preventDefault();

        if (!content_video_slider_inited) {
            content_video_slider = init_slider('.content-video-pop .init_slider', 640);
            content_video_slider_inited = true
        }
        $('.content-video-pop').arcticmodal({
            afterOpen: function() {
                content_video_slider.reloadSlider()
            }
        });
    });

    $('#upfile1').change(function(e) {
        e.preventDefault();

        upload_img(this, 'png', function(data) {
            var d = new Date();
            var logo = data.response.desktop;

            $('#logo_img').val(logo);

            console.log('upload_img_callback - ', logo);
            $('.sec7 .block .logo_img').css('background-image', 'url(' + logo + '?' + d.getTime() + ')');
        })

    });

    $('#upfile2').change(function(e) {
        e.preventDefault();

        upload_img(this, 'jpg', function(data) {
            var d = new Date();
            var bg = data.response.desktop;
            var bg_m = data.response.mobile;

            $('#bg_img_d').val(bg);
            $('#bg_img_m').val(bg_m);

            console.log('upload_img_callback - ', bg, bg_m);
            //$('.sec7 .block .logo_img').css('background-image','url('+logo+'?'+d.getTime()+')');
        })

    });
    $('.btn_hover').click(function(e) {
        e.preventDefault()
    });

    $('.btn_hover').hover(function() {
        $('<img src="img/button_gif.gif">').appendTo(this);
    }, function() {
        $(this).find('img').remove();
    });

    sec11slider = init_slider('.sec11 .init_slider', 980, function() {
        //go_to_step(7);
        //go_to_step(15);
    });

    build_crm_etaps()

});

$(window, step_slider_selector).scroll(function() {
    hfixed();
});
