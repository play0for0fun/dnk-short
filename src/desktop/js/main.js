;
'use strict';

var register_url = 'https://atom.dnk.bz/api/v1/client/register?partnerKey=AdmThFoJQSf8TdTmBqrTOGgiwNgAnrEc';
var validate_url = 'https://atom.dnk.bz/api/v1/user/email/validate';
var login_url = 'https://atom.dnk.bz/api/v1/user/login';
var user_info = 'https://atom.dnk.bz/api/v1/user/info';


var validation_inputs_selectors = 'textarea,input.valid[type="text"],input.valid[type="password"],input.valid[type="hidden"],input.valid[type="email"]';

var $loading = $('<div class="loading"><div></div></div>');

var textarea_min_length = 5;
var textarea_max_length = 999;

var descriptor_max_length = 70;
var offer_h1_max_length = 120;
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

var land_name_min_length = 3;
var land_name_max_length = 50;

var domain_max_length = 80;


$.arcticmodal('setDefault', {
    closeOnOverlayClick: false,
    closeOnEsc: false,
    openEffect: {
        type: 'none',
        speed: 0
    },
    closeEffect: {
        type: 'none',
        speed: 0
    },
    afterOpen: function(data, el) {
        if ($(el).outerHeight() > $(window).height()) {
            $('body').addClass('scrollpad');

        }
    },
    afterClose: function(data, el) {

        $('body').removeClass('scrollpad');
    }
});


function get_input_parameters(type_data) {

    console.log('          get_input_parameters(' + type_data + ')');

    var name_input, max_length, min_length, type_of_input;
    var input_obj = {};

    switch (type_data) {

        case 'land_name':
            input_obj.name_input = '"Название лендинга"';
            input_obj.min_length = land_name_min_length;
            input_obj.max_length = land_name_max_length;
            input_obj.type_of_input = 'textarea';
            break;

        case 'domain':

            input_obj.name_input = '"Домен лендинга"';
            input_obj.min_length = 0;
            input_obj.max_length = domain_max_length;
            input_obj.type_of_input = 'domain';

            break;

        case 'descriptor':
            input_obj.name_input = '"Дескриптор"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = descriptor_max_length;
            input_obj.type_of_input = 'textarea';
            break;

        case 'page_title':
            input_obj.name_input = '"Заголовок страницы"';
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

            input_obj.name_input = '"Оффер основа"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = offer_h1_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'offer_h2':

            input_obj.name_input = '"Оффер преимущество"';
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

        case 'email':

            input_obj.name_input = '"Емейл"';
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

            input_obj.name_input = '"Адрес на странице"';
            input_obj.min_length = textarea_min_length;
            input_obj.max_length = addr_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'login':

            input_obj.name_input = '"Логин"';
            input_obj.min_length = email_min_length;
            input_obj.max_length = email_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'pass':

            input_obj.name_input = '"Пароль"';
            input_obj.min_length = pass_min_length;
            input_obj.max_length = pass_max_length;
            input_obj.type_of_input = 'pass';

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

            input_obj.name_input = '"Надпись на форме"';
            input_obj.min_length = form_head_min_length;
            input_obj.max_length = form_head_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'form_button':

            input_obj.name_input = '"Надпись на кнопке"';
            input_obj.min_length = form_button_min_length;
            input_obj.max_length = form_button_max_length;
            input_obj.type_of_input = 'textarea';

            break;

        case 'bg_img_d':

            input_obj.name_input = '"Фон страницы"';
            input_obj.min_length = 0;
            input_obj.max_length = 0;
            input_obj.type_of_input = 'img';

            break;

        case 'bg_video':

            input_obj.name_input = '"Видео на фон"';
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

    console.log('          get_input_parameters() - return', input_obj);
    return input_obj;
}

function live_validation_input(elem) {



    var type_data = $(elem).data('input-type');

    var inp_value = $(elem).val();

    var input_obj = get_input_parameters(type_data);

    if (input_obj.type_of_input == 'textarea' || input_obj.type_of_input == 'phonepart' || input_obj.type_of_input == 'email' || input_obj.type_of_input == 'pass' || input_obj.type_of_input == 'video' || input_obj.type_of_input == 'input_par') {

        if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          live_validation_input() - ' + type_data + ' - live validation - error - over');
            $(elem).parent().children('span').addClass('error-over');

        } else {

            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over');
            console.log('          live_validation_input() - ' + type_data + ' - live validation - good');
            $(elem).parent().children('span').removeClass('error-over');

        }
    }

}

function validate_input(elem) {
    var type_data = $(elem).data('input-type');

    var inp_value = $(elem).val();

    console.log('          validate_input() - ' + 'input type = ' + type_data, '; input value = ' + inp_value);

    var input_obj = get_input_parameters(type_data);

    console.log('          validate_input() - ' + 'input_obj = ', input_obj);

    if (input_obj.type_of_input == 'textarea') {

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');
        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'phonepart') {

        var patt1 = new RegExp(/^\d*$/);
        var patt2 = new RegExp(/^\d\d\d\-\d\d\-\d\d$/);

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            //$(elem).closest('.input').addClass('error-input');
            console.log('          validate_input() - ' + type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            //$(elem).closest('.input').addClass('error-input');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else if (!$(elem).hasClass('iph3')) {
            //console.log('          validate_input() - '+inp_value);

            if (!patt1.test(inp_value)) {

                $(elem).addClass('error-input').addClass('error-nonum');
                //$(elem).closest('.input').addClass('error-input');
                console.log('          validate_input() - ' + type_data + ' - error - nonumber');

            }

        } else if ($(elem).hasClass('iph3')) {
            //console.log('          validate_input() - '+inp_value);
            if (!patt2.test(inp_value)) {

                $(elem).addClass('error-input').addClass('error-nonum');
                //$(elem).closest('.input').addClass('error-input');
                console.log('          validate_input() - ' + type_data + ' - error - nonumber');

            }

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-nonum');
            //$(elem).closest('.input').removeClass('error-input');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'email') {

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else if (inp_value.length > 0 && !validateEmail(inp_value)) {

            $(elem).addClass('error-input').addClass('error-noemail');
            console.log('          validate_input() - ' + type_data + ' - error - noemail');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-noemail');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'pass') {

        var patt = new RegExp(/^[a-zA-Z0-9_]*$/);

        if (inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else if (inp_value.length > 0 && !patt.test(inp_value)) {

            $(elem).addClass('error-input').addClass('error-nopass');
            console.log('          validate_input() - ' + type_data + ' - error - nopass');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-noemail');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'video') {

        console.log('          validate_input() - ' + 'youtube_video_id = ' + youtube_parser(inp_value));

        if (inp_value != '0' && inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');

        } else if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else if (inp_value != '0' && inp_value.length > 0 && !youtube_parser(inp_value)) {

            $(elem).addClass('error-input').addClass('error-novideo');
            console.log('          validate_input() - ' + type_data + ' - error - novideo');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-novideo');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'img') {

        if (inp_value == '') {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'input_par') {

        if (inp_value != '0' && inp_value.length < input_obj.min_length) {

            $(elem).addClass('error-input').addClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - error - empty');
        } else
        if (inp_value != '0' && inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'input_count') {

        if (parseInt(inp_value) > 3) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    } else

    if (input_obj.type_of_input == 'domain') {

        //var patt = new RegExp(/([a-zа-я0-9|-]+\.)*([a-zа-я0-9|-]+\.)*[a-z0-9|-]+\.[a-zа-я]+/)

        if (inp_value.length > input_obj.max_length) {

            $(elem).addClass('error-input').addClass('error-over');
            console.log('          validate_input() - ' + type_data + ' - error - over');

            // } else
            //  if (inp_value.length > 0 && !patt.test(inp_value)) {

            //     $(elem).addClass('error-input').addClass('error-nodomain');
            //     console.log('          validate_input() - '+type_data + ' - error - nodomain');

        } else {
            $(elem).removeClass('error-input').removeClass('error-empty').removeClass('error-over').removeClass('error-noemail');
            console.log('          validate_input() - ' + type_data + ' - good');
        }

    }

}

function validate_wrap(wrap, if_good) {

    console.log('          validate_wrap() - start');

    wrap.find(validation_inputs_selectors).each(function(index, el) {

        validate_input(el);

    });

    var errors_elements = wrap.find('.error-input');

    if (errors_elements.length == 0) {

        // if (wrap.is('section')) {

        //     $('.' + active_step_class).addClass('passed');

        // }

        if_good();

        console.log('          validate_wrap() - ' + 'validation - true');
        console.log('          _______________');

    } else {

        console.log('          validate_wrap() - ' + 'validation - false');
        console.log('          _______________');

        var errors_wrap = $('#errors').find('p');
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
            } else

            if (input_obj.type_of_input == 'domain') {


                if ($(this).hasClass('error-over')) {
                    error_text = '<span>Превышен лимит символов (' + input_obj.max_length + ') в поле ' + input_obj.name_input + '</span>';
                    errors_wrap.append(error_text);
                } else

                if ($(this).hasClass('error-nodomain')) {
                    error_text = '<span>Значение в поле ' + input_obj.name_input + ' не является доменом</span>';
                    errors_wrap.append(error_text);
                }

            }

        });

        $('#errors').arcticmodal();
    }

    console.log('          validate_wrap() - end');
}

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


function setCookie(cname, cvalue, exmin) {
    var d = new Date();
    d.setTime(d.getTime() + (exmin * 60 * 1000) + 30 * 60 * 1000);
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




function get_json(type, url, data, funct, disable_cahe, status_ER, background) {
    //універсальна функція роботи з jsonами

    var d = new Date();
    var requestId = d.getTime();

    console.log('   ');
    console.log('>>>>>>>>>>>>>>>>>>request_start');
    console.log('>>> requestId=   ', requestId);
    console.log('>>> method=   ', type);
    console.log('>>> target=   ', url);
    console.log('>>> data=   ', data);
    console.log('>>>>>>>>>>>>>>>>>>request_end');
    console.log('   ');


    if (type == 'get') {

        var str = "";
        for (var key in data) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + data[key];
        }
        send_data = str;

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
            send_data = JSON.stringify(data);
        }

    }

    if (!background) {

        var d = new Date();
        var time = d.getTime();

        $loading.appendTo('#loading_wrap').attr('data-time', time);

    }


    $.ajax({
        type: type,
        url: url,
        contentType: false,
        data: send_data,
        cache: dis,
        processData: dis,
        response: 'json',
        success: function(data) {


            // if (window.location.hostname == 'localhost') {
            //     data = JSON.parse(data);
            // }


            console.log('   ');
            console.log('<<<<<<<<<<<<<<<<<response_start');
            console.log('<<< responseId=   ', requestId);
            console.log('<<<', data);
            console.log('<<<<<<<<<<<<<<<<<response_end');
            console.log('   ');



            if (data.success == true) {

                console.log('          get_json() ' + '!!!! success=true,', data.statusCode);

                funct(data);

                if (!background) {
                    $('#loading_wrap').children('.loading[data-time="' + time + '"]').remove();
                }

            } else {
                //var message = ''; 

                //message = 'status=   ' + data.status + '<br>';


                console.log('          get_json() ' + '!!!! success=false,' + data.statusCode);
                if (typeof status_ER != 'undefined') {


                    status_ER(data);

                }


                if (!background) {
                    $('#loading_wrap').children('.loading[data-time="' + time + '"]').remove();
                }
                // else {

                //     for (var key in data.exp) {
                //         if (data.exp.hasOwnProperty(key)) {
                //             console.log(key, ':', data.exp[key]);
                //         }
                //     }
                // }
            }


            //console.log('-------------------------------');



        },
        error: function(xhr) {
            //alert('server_error_status=' + xhr.status);
            console.log($.parseJSON(xhr.responseText));

            console.log('   ');
            console.log('<<<<<<<<<<<<<<<<<response_start');
            console.log('<<< responseId=   ', requestId);
            console.log('<<< ', $.parseJSON(xhr.responseText));
            console.log('<<<<<<<<<<<<<<<<<response_end');
            console.log('   ');


            console.log('           get_json() ' + 'response_server_error');



            var log_data = {
                requestId: requestId,
                request: {
                    type: type,
                    url: url,
                    data: send_data
                },
                response: $.parseJSON(xhr.responseText)
            }

            console.log('           get_json() - send_log', log_data)

            // $.ajax({
            //     type: 'post',
            //     url: url,
            //     data: log_data
            // });

            if (typeof status_ER != 'undefined') {
                status_ER(data);
            }

            $('#loading_wrap').children('.loading').remove();
            $('#critical>p').html('errorId: '+requestId+'<br>'+$.parseJSON(xhr.responseText).errorMsg);
            $('#critical').show();
            //console.log('-------------------------------');
        }
    });


}




function init_user() {
    console.log('          init_user() - start');
    var c_hash = getCookie('dnk_user');
    var hash = findGetParameter('code');
    var email = findGetParameter('email');
    if (hash.length > 0 && email.length > 0) {
        validate_user(email, hash);
    } else if (c_hash.length > 0) {
        get_user_list(c_hash);
    } else {
        $('#user-init').arcticmodal();
        $('#preload').fadeOut();
    }
    console.log('          init_user() - end');

}

function validate_user(email, hash) {

    console.log('          validate_user(', email, hash, ')');

    //$('input[name="user_hash"]').val(hash);

    var email = findGetParameter('email');
    var code = findGetParameter('code');
    //var status = "validate";

    //console.log('          user email = ', email);
    //console.log('          status = ', status);
    var data = {
            email: email,
            code: code
        }
        //console.log(data);

    get_json('get', validate_url, data, function(data) {

        $('input[name="userKey"]').val(data.response.userKey);
        //$('input[name="pageId"]').val(data.userKey);

        //$('#user-init').arcticmodal('close');
        //$('#login').arcticmodal('close');
        //$('#user-list').arcticmodal('close');
        $('#body').show();

        history.pushState('', document.title, './');

        //console.log('          refresh coockie - ', hash, email);
        setCookie('dnk_user', hash, 0);
        $('#logout').fadeIn();
        //setCookie('dnkatom_email', email, 1);
        get_user_list(data.response.userKey, true);

    }, false, function() {
        history.pushState('', document.title, './');

    });

    console.log('          validate_user() - end');

}


function send_confirm(callback) {

    var act_email = $('input[data-input-type="email"]').val();
    var data = {
        email: act_email
    };

    console.log('          send_confirm() - ', data);

    get_json('post', register_url, data, callback);

}

function login(wrap, callback_false) {

    console.log('          login() - start');

    validate_wrap(wrap, function() {

        var data = {
            login: wrap.find('input[name="login"]').val(),
            password: wrap.find('input[name="pass"]').val()
        };

        console.log('          login() - data - ', data);
        //var event = wrap.attr('data-event');

        console.log(data);
        //var user_hash;
        get_json('get', login_url, data, function(data) {

            $('input[name="userKey"]').val(data.response.userKey);

            get_user_list(data.response.userKey);

            $('#login').arcticmodal('close');

        }, false, callback_false);

    });

}

var user_pages;

function get_user_list(hash, creation) {

    console.log('          get_user_list(', hash, creation, ')');

    var data_hash = {
        userKey: hash
    };

    get_json('get', user_info, data_hash, function(data) {



        //$('.user .user_n').html(data.response.email);
        $('input[name="userKey"]').val(hash);
        //$('.user').show();
        //$('a.login').hide();
        $('#logout').fadeIn();
        console.log('          get_user_list() - USER_KEY = ', hash);
        setCookie('dnk_user', hash, 0);
        console.log('          get_user_list() - SET_COOKIE');

        var url = 'https://atom.dnk.bz/api/v1/page/list';

        get_json('get', url, data_hash, function(data) {

            //$loading.show();
            //$('input[name="pageId"]').val(data.response[0].id);
            user_pages = data.response;

            //paste_values(user_pages[parseInt($(this).attr('data-edit'))]);

            if (!creation) {

                $('#user-list .list').html('');

                for (var i = data.response.length - 1; i >= 0; i--) {

                    var name = '<span>' + data.response[i].name + '</span>';

                    var server_url = '';
                    var domiain_url = '';

                    if (validate_template_content(data.response[i])) {
                        server_url = '<a href="' + data.response[i].url + '" class="link" target="_blank">на сервере</a>';
                        if (data.response[i].domain.length > 0) {
                            domiain_url = '<a href="http://' + data.response[i].domain + '" class="link" target="_blank">на домене</a>';
                        }
                    }

                    var carcas = '<p><span>' + name + domiain_url + server_url + '</span><a href="#" data-edit="' + i + '" class="button page_edit">Редактировать</a></p>'

                    $(carcas).appendTo('#user-list .list');



                }

                $('.button.page_edit').unbind('click');
                $('.button.page_edit').click(function(e) {
                    e.preventDefault();
                    var page_number = parseInt($(this).attr('data-edit'));
                    paste_values(user_pages[page_number]);

                    //$('#user-init').arcticmodal('close');
                    //$('#login').arcticmodal('close');
                    $('#user-list').arcticmodal('close');
                    $('#body').attr('data-page-number', page_number).show();
                    console.log('          page_edit click() - setCoockie page_number');
                    
                    setCookie('dnk_page_index',page_number,-10);
                });


                //$('#user-init').hide();
                //$('#login').hide();
                $('#body').removeAttr('data-page-number').hide();

                //$('#user-init').arcticmodal('close');
                //$('#login').arcticmodal('close');

                $('#user-list').arcticmodal();
                //$('#user-wrap').show();
                //$('#user-list').show();
                var cookie_dnk_page_index = getCookie('dnk_page_index');
                if (cookie_dnk_page_index.length>0&&cookie_dnk_page_index != '-1') {
                    $('.button.page_edit[data-edit="'+cookie_dnk_page_index+'"]').trigger('click');
                }

            } else {
                var page_number = user_pages.length - 1;
                console.log('          get_user_list() - USER_PAGES = ', user_pages);
                console.log('          get_user_list() - USER_PAGES.length = ', page_number);
                paste_values(user_pages[page_number]);

                //$('#user-init').arcticmodal('close');
                //$('#login').arcticmodal('close');
                if ($('#user-list').is(':visible')) {

                    $('#user-list').arcticmodal('close');

                }
                //$('#user-wrap').hide();
                $('#body').attr('data-page-number',page_number).show();
                console.log('          page_edit click() - setCoockie page_number');
                setCookie('dnk_page_index',page_number,-10);
            }
            //console.log(data);


            //paste_values(data.response[0].content);
            //$('.sec11 .site').append('<iframe src="' + data.response[0].url + '"></iframe>');


            //$loading.hide();


            $('#preload').fadeOut();

        });

    });


}

function paste_values(data) {

    console.log('          paste_values(', data, ')');

    clean_values();

    if (typeof data.name != 'undefined' && data.name != '' && data.name != 'null' && data.name != null) {
        $('input[name="land_name"]').val(data.name);
    }

    if (typeof data.template != 'undefined' && data.template != '' && data.template != 'null' && data.template != null) {
        $('input[name="template"]').val(data.template);
    }

    if (typeof data.id != 'undefined' && data.id != '' && data.id != 'null' && data.id != null) {

        $('input[name="pageId"]').val(data.id);
        //console.log('           paste_values() - secCoockie_pageId');
        //setCookie('dnk_page',data.)
    }

    if (typeof data.domain != 'undefined' && data.domain != '' && data.domain != 'null' && data.domain != null) {

        $('input[name="domain"]').val(data.domain).attr('data-pasted-value', data.domain);;
    }

    var content = data.content;
    console.log('          paste_values() - content', content);
    for (var key in content) {

        if (content[key].toString().indexOf(' <br>') != -1) {

            var regex = / <br\s*[\/]?>/gi;
            content[key] = content[key].replace(regex, "\n");
        }

        if (key == 'bg_video' || key == 'content_video') {
            if (content[key] != '0') {

                content[key] = content[key].replace(content[key], 'https://www.youtube.com/watch?v=' + content[key]);

                if (!$('.trig[data-target="' + key + '"]').hasClass('active')) {
                    $('.trig[data-target="' + key + '"]').trigger('click');
                }
            } else {
                if ($('.trig[data-target="' + key + '"]').hasClass('active')) {
                    $('.trig[data-target="' + key + '"]').trigger('click');
                }
            }
        }



        if (key == 'logo_img') {
            if (content[key] != '0') {
                if (!$('.trig[data-target="logo"]').hasClass('active')) {
                    $('.trig[data-target="logo"]').trigger('click');
                    console.log('          paste_values() - logo_click');
                }
            } else {
                if ($('.trig[data-target="logo"]').hasClass('active')) {
                    $('.trig[data-target="logo"]').trigger('click');
                    console.log('          paste_values() - logo_click');
                }
            }
        }


        if (key == 'form_custom') {
            if (content[key] != '0') {
                if (!$('.radio[data-input="custom"]').hasClass('active')) {
                    $('.radio[data-input="custom"]>span').trigger('click');
                }

            } else {
                if ($('.radio[data-input="custom"]').hasClass('active')) {
                    $('.radio[data-input="custom"]>span').trigger('click');
                }
            }
        }

        if (key == 'form_email') {
            if (content[key] != '0') {
                if (!$('.radio[data-input="email"]').hasClass('active')) {
                    $('.radio[data-input="email"]>span').trigger('click');
                }
            } else {
                if ($('.radio[data-input="email"]').hasClass('active')) {
                    $('.radio[data-input="email"]>span').trigger('click');
                }
            }
        }


        $('input[name="' + key + '"],textarea[name="' + key + '"]').val(content[key]).trigger('input');

        //console.log(key,':',content[key]);
        $('#form_custom_name').val(content['form_custom_name']);
        $('#form_custom_plac').val(content['form_custom_plac']);
    }


    //$('.iph1,.iph2,.iph3').trigger('change');

    console.log('          paste_values() - values_pasted - ', content);

    bind_input_listening();

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
                    //console.log('FormData:,', data);
                    //console.log('FormData->File:,', data.get('file'));
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


function send_full_data(callback) {

    console.log('          send_full_data() - start');
    //$loading.show();

    var enter_char = new RegExp(String.fromCharCode(10), 'g');

    var land_name = $('#land_name').val();
    var page_title = $('#page_title').val();


    var descriptor = $('#descriptor').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');

    var offer_h1 = $('#offer_h1').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var offer_h2 = $('#offer_h2').val();
    var bg_video = $('#bg_video').val();
    var content_video = $('#content_video').val();
    var form_custom_name = $('#form_custom_name').val();
    var form_custom_plac = $('#form_custom_plac').val();
    var form_head = $('#form_head').val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');
    var form_button = $('#form_button').val();
    var page_email = $('#page_email').val();
    var page_addr = $('#page_addr').val();
    var act_email = $('#act_email').val();
    var phone_p1 = $('#phone_p1').val();
    var phone_p2 = $('#phone_p2').val();
    var phone_p3 = $('#phone_p3').val();
    var domain = $('#domain').val();

    var logo_img = $('#logo_img').val();
    var bg_img_d = $('#bg_img_d').val();
    var bg_img_m = $('#bg_img_m').val();

    var form_email = $('#form_email').val();
    var form_custom = $('#form_custom').val();

    var bg_shadow = $('#bg_shadow').val();
    var template = $('#template').val();

    var userKey = $('#userKey').val();
    var pageId = $('#pageId').val();


    if (page_email.length == 0) {
        page_email = act_email
    }

    if (bg_video != '0') {
        bg_video = youtube_parser(bg_video);
    }

    if (content_video != '0') {
        content_video = youtube_parser(content_video);
    }

    console.log('          send_full_data() - DOMAIN = ', domain);

    var pas_domain = $('#domain').attr('data-pasted-value');
    console.log('          send_full_data() - pasted_domain = ', pas_domain);


    var show_cname = false;
    if (domain != pas_domain) {
        show_cname = true;
    }

    var content = {
        page_title: page_title,
        descriptor: descriptor,
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
        bg_shadow: bg_shadow,
    }

    var data = {
        id: pageId,
        template: template,
        name: land_name,
        domain: domain,
        content: content
    };

    console.log('          send_full_data() - ', data);

    var url = 'https://atom.dnk.bz/api/v1/page/save?userKey=' + userKey;


    get_json('post', url, data, function() {
        get_user_list($('#userKey').val());

        if (show_cname == true) {
            $('#show_cname').show()
        }

    });

    if (callback) {
        callback();
    }

}

function show_alert_mess(text) {
    console.log('          show_alert_mess(', text, ')')
    $('#errors>p').html('<span>' + text + '</span>');
    $('#errors').arcticmodal();
}

function create_page() {
    console.log('          create_page()');
    clean_values();
    var userKey = $('#userKey').val();

    data = {
        name: 'Moй новый сайт'
    }


    var url = 'https://atom.dnk.bz/api/v1/page/save?userKey=' + userKey;


    get_json('post', url, data, function() {
        get_user_list($('#userKey').val(), true);
    });


}
var templates_input_array = [{
    selector: '#template',
    default: 'wov',
    key: 'template'
}, {
    selector: '#bg_shadow',
    default: '0.8',
    key: 'content.bg_shadow'
}, {
    selector: '#input_count',
    default: '2',
}, {
    selector: '#form_email',
    default: '0',
    key: 'content.form_email'
}, {
    selector: '#form_custom',
    default: '0',
    key: 'content.form_custom'
}, {
    selector: '#form_custom_name',
    default: '0',
    key: 'content.form_custom_name'
}, {
    selector: '#form_custom_plac',
    default: '0',
    key: 'content.form_custom_plac'
}, {
    selector: '#bg_img_m',
    default: '',
    key: 'content.bg_img_m'
}, {
    selector: '#bg_img_d',
    default: '',
    key: 'content.bg_img_d'
}, {
    selector: '#logo_img',
    default: '0',
    key: 'content.logo_img'
}, {
    selector: '#phone_p1',
    default: '',
    key: 'content.phone_p1'
}, {
    selector: '#phone_p2',
    default: '',
    key: 'content.phone_p2'
}, {
    selector: '#phone_p3',
    default: '',
    key: 'content.phone_p3'
}, {
    selector: '#page_addr',
    default: '',
    key: 'content.page_addr'
}, {
    selector: '#act_email',
    default: '',
    key: 'content.act_email'
}, {
    selector: '#page_email',
    default: '',
    key: 'content.page_email'
}, {
    selector: '#form_head',
    default: '',
    key: 'content.form_head'
}, {
    selector: '#form_button',
    default: '',
    key: 'content.form_button'
}, {
    selector: '#content_video',
    default: '0',
    key: 'content.content_video'
}, {
    selector: '#bg_video',
    default: '0',
    key: 'content.bg_video'
}, {
    selector: '#offer_h2',
    default: '',
    key: 'content.offer_h2'
}, {
    selector: '#offer_h1',
    default: '',
    key: 'content.offer_h1'
}, {
    selector: '#descriptor',
    default: '',
    key: 'content.descriptor'
}, {
    selector: '#page_title',
    default: '',
    key: 'content.page_title'
}, {
    selector: '#land_name',
    default: '',
    key: 'name'
}, {
    selector: '#domain',
    default: '',
    key: 'domain'
}];

function clean_values() {

    unbind_input_listening();

    console.log('          clean_values()');

    for (var i = templates_input_array.length - 1; i >= 0; i--) {
        var inp = templates_input_array[i];
        $(inp.selector).val(inp.default).trigger('input');
    }


    $('#domain').removeAttr('data-pasted-value');
    $('#logo_view').removeAttr('style');

    $('.trig').removeClass('active');
    $('.radio[data-input="email"]').removeClass('active');
    $('.radio[data-input="custom"]').removeClass('active');
    $('.error-input').removeClass('error-input');

}

function validate_template_content(data) {

    console.log('           validate_template_content(', data, ')')

    for (var i = templates_input_array.length - 1; i >= 0; i--) {

        var inp = templates_input_array[i];

        if (inp.hasOwnProperty('key')) {

            var key_name = inp.key;

            var data_eval = 'data.' + key_name;

            //console.log(data.content)
            if (typeof data.content != 'undefined' && data.content != 'null' && data.content != null) {

                if (typeof eval(data_eval) != 'undefined' && eval(data_eval) != 'null' && eval(data_eval) != null && data_eval != 'domain') {

                    var data_value = eval(data_eval);

                    console.log('           validate_template_content() - key = ', key_name, ' ; inp_in_data = ', data_value);


                } else {

                    console.log('           validate_template_content() - key = ', key_name, ' ; inp_in_data = ', data_value);
                    console.log('           validate_template_content() - RETURN FALSE - ', key_name);
                    return false;

                }

            } else {

                console.log('           validate_template_content() - RETURN FALSE - content');

                return false;

            }

        }

    }

    return true;


}




input_update_on_blur = function(event) {

    validate_input(this);

    if (!$(this).hasClass('error-input')) {

        for (var i = templates_input_array.length - 1; i >= 0; i--) {

            var inp = templates_input_array[i];

            if (inp.hasOwnProperty('key')) {

                if ($(this).is(inp.selector)) {

                    var id = $('#body').attr('data-page-number');

                    var cur_val = $(this).val();

                    var log_val;


                    if (inp.key.indexOf('content') > -1) {

                        var new_key = inp.key.replace('content.', '');

                        if (user_pages[id].content == null) {
                            user_pages[id].content = {};
                        }

                        user_pages[id].content[new_key] = cur_val;

                        if (new_key == 'offer_h1' || new_key == 'form_head' || new_key == 'descriptor') {

                            var enter_char = new RegExp(String.fromCharCode(10), 'g');
                            user_pages[id].content[new_key] = cur_val.replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>')
                        }

                        if (new_key == 'page_email' && cur_val.length == 0) {
                            user_pages[id].content[new_key] = user_pages[id].content.act_email
                        }

                        if (new_key == 'bg_video' && cur_val != '0') {
                            user_pages[id].content[new_key] = youtube_parser(cur_val);
                        }

                        if (new_key == 'content_video' && cur_val != '0') {
                            user_pages[id].content[new_key] = youtube_parser(cur_val);
                        }

                        log_val = user_pages[id].content[new_key]

                    } else {

                        user_pages[id][inp.key] = cur_val;

                        log_val = user_pages[id][inp.key]

                    }

                    console.log('user_pages_update - index = ', id, ' key = ', inp.key, ' , val = ', log_val);

                }

            }

        }


        var userKey = $('#userKey').val();
        console.log('          update_data() - ', user_pages[id]);

        var url = 'https://atom.dnk.bz/api/v1/page/save?userKey=' + userKey;


        get_json('post', url, user_pages[id], function() {

            console.log('          update_data() - updated');

        }, false, function() {}, true);

    }

}

function bind_input_listening() {

    console.log('       bind_input_listening() - start');

    var selectors = '';

    for (var i = templates_input_array.length - 1; i >= 0; i--) {

        var inp = templates_input_array[i];

        if (inp.hasOwnProperty('key')) {

            selectors += ',' + inp.selector;

        }

    }

    selectors = selectors.substring(1);

    //console.log('       bind_input_listening() - selectors = ',selectors);

    $(selectors).bind('blur', input_update_on_blur);
    //$(selectors).bind('change', input_update_on_blur);

}

function unbind_input_listening() {


    console.log('       unbind_input_listening() - start');

    var selectors = '';

    for (var i = templates_input_array.length - 1; i >= 0; i--) {

        var inp = templates_input_array[i];

        if (inp.hasOwnProperty('key')) {

            selectors += ',' + inp.selector;

        }

    }

    selectors = selectors.substring(1);

    console.log('       unbind_input_listening() - selectors = ', selectors);

    $(selectors).unbind('blur', input_update_on_blur);
    //$(selectors).unbind('change', input_update_on_blur);



}

$(document).ready(function() {


    init_user();

    $(validation_inputs_selectors).on('keyup', function(e) {
        live_validation_input(this);
    });

    $('.button.registration').click(function(e) {
        e.preventDefault();
        $(this).closest('#user-init').attr('data-step', '1');
    });

    $('.button.send_confirm').click(function(e) {
        e.preventDefault();
        var _this = this;
        validate_wrap($(this).closest('.step'), function() {
            send_confirm(function() {

                $(_this).closest('#user-init').attr('data-step', '2');
            })
        });
    });

    $('.button.login-btn').click(function(e) {
        e.preventDefault();
        $('#user-init').arcticmodal('close');
        $('#login').arcticmodal();

    });

    $('.button.send_login').click(function(e) {
        e.preventDefault();
        var _this = this;
        login($(this).closest('#login'), function() {
            $(_this).closest('#login').find('.valid').val('').addClass('error-input');
        });

    });

    $('#errors>.close').click(function() {
        $('#errors').arcticmodal('close');
    });


    $('#upfile1').change(function(e) {
        e.preventDefault();

        upload_img(this, 'png', function(data) {
            var logo = data.response.desktop;

            $('#logo_img').val(logo).trigger('input').trigger('blur');

            console.log('          upload_img_callback - ', logo);
        })

    });

    $('#logo_img').on('input', function() {

        var d = new Date();
        if ($(this).val() != '0') {
            $('#logo_view').css('background-image', 'url(' + $(this).val() + '?' + d.getTime() + ')');
        }

    });

    $('#upfile2').change(function(e) {
        e.preventDefault();

        upload_img(this, 'jpg', function(data) {
            var d = new Date();
            var bg = data.response.desktop;
            var bg_m = data.response.mobile;

            $('#bg_img_d').val(bg).trigger('input').trigger('blur');
            $('#bg_img_m').val(bg_m).trigger('blur');

            console.log('          upload_img_callback - ', bg, bg_m);
            //$('#preview').css('background-image', 'url(' + bg + '?' + d.getTime() + ')');
            //$('.sec7 .block .logo_img').css('background-image','url('+logo+'?'+d.getTime()+')');
        })

    });

    $('#bg_img_d').on('input', function() {

        var d = new Date();
        if ($(this).val() != '0') {
            $('#preview').css('background-image', 'url(' + $(this).val() + '?' + d.getTime() + ')');
        }

    });

    $('.trig').click(function(e) {
        var target = $(this).data('target');
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            if (target == 'logo') {
                $('#preview').attr('data-logo', '1');
                $('#logo_img').val('').trigger('input').trigger('blur');
            } else
            if (target == 'bg_video') {
                $('#bg_video').val('').trigger('blur');
            }
            if (target == 'content_video') {
                $('#content_video').val('');
                $('#template').val('wiv').trigger('blur');
            }
        } else {
            $(this).removeClass('active');
            if (target == 'logo') {
                $('#preview').attr('data-logo', '0');
                $('#logo_img').val('0').trigger('input').trigger('blur');
            } else
            if (target == 'bg_video') {
                $('#bg_video').val('0').trigger('blur');
            }
            if (target == 'content_video') {
                $('#content_video').val('0');
                $('#template').val('wov').trigger('blur');
            }
        }
    });

    $('textarea[name="descriptor"]').on('input', function() {

        var enter_char = new RegExp(String.fromCharCode(10), 'g');

        var descriptor = $(this).val().replace(/^\s+|\s+$/g, '').replace(enter_char, ' <br>');

        $('#preview .descr').html(descriptor);

    });

    $("#slider").slider({
        slide: function(event, ui) {
            console.log(ui);
            $('#bg_shadow').val(ui.value / 100).trigger('input');
        },
        stop: function(event, ui) {
            $('#bg_shadow').trigger('blur');
        }
    });

    $('input[name="bg_shadow"]').on('input', function() {

        $('#preview .bg-shadow').css('opacity', $(this).val());

        $("#slider").slider("value", parseFloat($(this).val()) * 100);

    });

    $('.radio>span').click(function() {
        var wrap = $(this).parent();
        if (!wrap.hasClass('frozen')) {
            if (!wrap.hasClass('active')) {
                wrap.addClass('active');
                if (wrap.attr('data-input') == 'email') {
                    $('#form_email').val('1').trigger('blur');
                } else
                if (wrap.attr('data-input') == 'custom') {
                    $('#form_custom').val('1').trigger('blur');

                    var inp = wrap.find('input');
                    inp.each(function(index, el) {
                        var inp_val = $(this).val();

                        //console.log(inp_val);
                        if (inp_val == '0') {
                            $(this).val('').trigger('blur');
                        }

                    });
                }
            } else {
                wrap.removeClass('active');
                if (wrap.attr('data-input') == 'email') {
                    $('#form_email').val('0').trigger('blur');
                } else
                if (wrap.attr('data-input') == 'custom') {
                    $('#form_custom').val('0').trigger('blur');

                    var inp = wrap.find('input');
                    inp.each(function(index, el) {
                        var inp_val = $(this).val();

                        //console.log(inp_val);
                        if (inp_val == '') {
                            $(this).val('0').trigger('blur');
                        }

                    });
                }

            }
        }

        $('#input_count').val(wrap.parent().find('.radio.active').length);

    });

    $('.button.button_go').click(function(e) {
        e.preventDefault();

        validate_wrap($('#body,#hidden-box'), function() {

            send_full_data(function() {

                console.log('        save() clearCoockie dnk_page_index ')
                setCookie('dnk_page_index','-1',-60);
            });

        });
    });

    $('input[name="phone_p1"],input[name="phone_p2"]').ForceNumericOnly();

    $('input[name="phone_p3"]').mask('999-99-99');

    $('.button.create_new').click(function(e) {
        e.preventDefault();
        create_page();
    });

    // $('#domain').on('blur',function(){
    //     console.log('          input domain');
    //     if ($(this).val().indexOf('http') > -1) {

    //     console.log('          replace');
    //         var regExp = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/
    //         var match = regExp.exec($(this).val());
    //         $(this).val(match[1]);
    //     }
    //     //var new_regExp = /^([\p{Cyrillic}\p{Latin}\d\.-]{1,64})?\.(?:\x{0440}\x{0444}|ru|su|arpa|info|aero|name|[a-z]{3})$/;
    //     //var new_match = new_regExp.exec($(this).val());
    //     //alert(new_match);
    // });

    $('#show_cname .button').click(function(e) {
        e.preventDefault();
        $('#show_cname').hide();
    });

    $('#critical>div').click(function() {
        location.reload();
    });

    $('#logout').click(function(e) {
        e.preventDefault();
        setCookie('dnk_page_index','-1',-60);
        setCookie('dnk_user','-1',-60);
        location.reload();
    });

    $('a.btn_back').click(function(e) {
        e.preventDefault();
        setCookie('dnk_page_index','-1',-60);
        get_user_list($('#userKey').val());
    });
});