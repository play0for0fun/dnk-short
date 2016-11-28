<!DOCTYPE html>
<html lang="ru">
    <head>
        <!-- <script src="https://localhost:4445/livereload.js"></script> -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=980">
        <title>ДНК</title>
        <!-- <link type="image/x-icon" href="favicon.ico" rel="shortcut icon"> -->
        <!-- <script>
            if (screen.width <= 750) {
                document.location = "../mobile/" + document.location.search;
            }
        </script> -->
        <style>
            <?php include('css/head.css');
            ?>
        </style>
        <link type="text/css" href="css/libs.css" rel="stylesheet">
        <link type="text/css" href="css/style.css" rel="stylesheet">
        <link type="text/css" href="css/media.css" rel="stylesheet">
        <link type="text/css" href="css/scripts.css" rel="stylesheet">
    </head>
    <body>
        <!-- <div id="maket"></div> -->
        <section id="body">
            <div>
                <div class="col">
                    <div class="row-5">
                        <p class="label">Название лендинга</p>
                        <input type="text" name="land_name" value="" placeholder="" data-input-type="land_name" class="valid" id="land_name">
                    </div>
                    <div class="row-5">
                        <p class="label">Домен лендинга</p>
                        <input type="text" name="domain" value="" placeholder="" data-input-type="domain" class="valid" id="domain">
                    </div>
                </div>
                <div class="hline"></div>
                <div class="col">
                    <div class="row-5">
                        <p class="label">Заголовок страницы</p>
                        <input type="text" name="page_title" value="" placeholder="" data-input-type="page_title" class="valid" id="page_title">
                        <p class="label">Дескриптор</p>
                        <textarea type="text" name="descriptor" value="" placeholder="" data-input-type="descriptor" class="valid" id="descriptor"></textarea>
                    </div>
                    <div class="row-5">
                        <p class="label">Оффер основа</p>
                        <textarea type="text" name="offer_h1" value="" placeholder="" data-input-type="offer_h1" class="valid" id="offer_h1"></textarea>
                        <p class="label">Оффер преимущество</p>
                        <input type="text" name="offer_h2" value="" placeholder="" data-input-type="offer_h2" class="valid" id="offer_h2">
                    </div>
                </div>
                <div class="hline"></div>
                <div class="col">
                    <div class="row-3">
                        <p class="label">Фон страницы</p>
                        <label for="upfile2" class="button">Загрузить</label>
                        <p class="label">Логотип</p>
                        <div class="trig" data-target="logo"><span>Нет</span><span>Есть</span></div>
                        <div class="trig-wrap">
                            <label for="upfile1" class="button">Загрузить</label>
                        </div>
                    </div>
                    <div class="row-7">
                        <p class="label">Предпросмотр</p>
                        <div class="view" id="preview" data-logo="0">
                            <div class="logo" id="logo_view"></div>
                            <p class="descr"></p>
                            <div class="bg-shadow"></div>
                        </div>
                        <p class="label slider_label">Затемнение фона</p>
                        <div id="slider" class="ui-slider"><span class="ui-slider-handle" style="left:80%"></span></div>
                    </div>
                </div>
                <div class="col">
                    <div class="row-5">
                        <p class="label">Видео на фон</p>
                        <div class="trig" data-target="bg_video"><span>Нет</span><span>Есть</span></div>
                        <div class="trig-wrap">
                            <input type="text" class="youtube valid" data-input-type="bg_video" name="bg_video" id="bg_video" value="0" placeholder="">
                            <span></span>
                        </div>
                    </div>
                    <div class="row-5">
                        <p class="label">Продающее видео</p>
                        <div class="trig" data-target="content_video"><span>Нет</span><span>Есть</span></div>
                        <div class="trig-wrap">
                            <input type="text" class="youtube valid" name="content_video" value="0" data-input-type="video" placeholder="" id="content_video" >
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="hline"></div>
                <div class="col">
                    <div class="row-5">
                        <p class="label">Настройка полей формы</p>
                        <div class="radio active frozen" data-input="name"><span class="span"></span>
                        <p>Имя</p></div>
                        <div class="radio active frozen" data-input="phone"><span class="span"></span>
                        <p>Телефон</p></div>
                        <div class="radio" data-input="email"><span class="span"></span>
                        <p>E-mail</p></div>
                        <div class="radio" data-input="custom"><span class="span"></span>
                        <p>Текстовое поле
                        <span class="custom">
                            <input type="text" name="form_custom_name" data-input-type="input_par_name" value="0" class="valid"  placeholder="Название поля" id="form_custom_name">
                            <input type="text" name="form_custom_plac" value="0" class="valid" data-input-type="input_par_plac" placeholder="Надпись на поле" id="form_custom_plac">
                        </span></p></div>
                    </div>
                    <div class="row-5">
                        <p class="label">Надпись на форме</p>
                        <textarea type="text" id="form_head" name="form_head" class="valid" data-input-type="form_head" placeholder=""></textarea>
                        <p class="label">Надпись на кнопке</p>
                        <input type="text" id="form_button" name="form_button" class="valid" data-input-type="form_button" placeholder="">
                    </div>
                </div>
                <div class="hline"></div>
                <div class="col">
                    <div class="row-5">                        
                        <p class="label">Email на странице</p>
                        <input name="page_email" data-input-type="page_email" type="email" class="valid" placeholder="" id="page_email">
                        <p class="label">Адрес на странице</p>
                        <input type="text" class="valid" name="page_addr" data-input-type="page_addr" placeholder="" id="page_addr">
                    </div>
                    <div class="row-5">                    
                        <p class="label">Email для заявок</p>
                        <input name="act_email" data-input-type="act_email" type="email" class="valid" placeholder="" id="act_email">
                        <p class="label">Телефон для заявок</p>
                        <div class="input">
                            <span>+</span>
                            <input type="text" class="valid iph1" name="phone_p1" data-input-type="ph1" id="phone_p1" value="" placeholder="">
                            <span> (</span>
                            <input type="text" class="valid iph2" name="phone_p2" data-input-type="ph2" id="phone_p2" value="" placeholder="">
                            <span>) </span>
                            <input type="text" class="valid iph3" name="phone_p3" data-input-type="ph3" id="phone_p3"  value="" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row-5">
                        <a href="#" class="button button_go">Сохранить</a>        
                    </div>
                </div>

            </div>
        </section>
        <div id="user-wrap">
            <form id="login" class="login" method="post" action="#">
                <p class="b">Войти</p>
                <input type="text" class="valid" name="login" data-input-type="login" value="" placeholder="Логин">
                <input type="password" class="valid" name="pass" data-input-type="pass" value="" placeholder="Пароль">
                <button type="submit" class="button send_login">Войти</button>
            </form>
            <div id="user-init" data-step="0">
                <div class="step" data-step="0">
                    <a href="#" class="button registration">Регистрация</a>
                    <a href="#" class="button login-btn">Вход</a>
                </div>
                <div class="step" data-step="1">
                    <input type="email" class="valid" data-input-type="email" name="user_email" value="" placeholder="Введите Ваш емейл">
                    <a href="#" class="button send_confirm">Продолжить</a>
                </div>
                <div class="step" data-step="2">
                    <p>Для продолжения, перейдите по ссылке, отправленной на указанный емейл</p>
                </div>
            </div>
            <div id="user-list">
                <div class="list">
                </div>
                <a href="#" class="button create_new">Создать новый</a>
            </div>  
        </div>
        <div id="loading"><div></div></div>
        <div id="show_cname">
            <div>
                <p>Настройте запись DNS вашего домена так, чтобы он указывал на 185.12.94.230<br>(IN A 185.12.94.230)</p>
                <div class="button">ОК</div> 
            </div>
        </div>
        <div id="hidden-box">
            <div id="errors">
                <div class="close"></div>
                <span>Ошибка</span>
                <p></p>
            </div>
            <form enctype="multipart/form-data" action="#">
                <input id="upfile1" type="file" name="file">
            </form>
            <form enctype="multipart/form-data" action="#">
                <input id="upfile2" type="file" name="file">
            </form>
            <input type="hidden" name="logo_img" value="0" data-input-type="logo_img" class="valid" id="logo_img">
            <input type="hidden" name="bg_img_d" data-input-type="bg_img_d" class="valid" value="" id="bg_img_d">
            <input type="hidden" name="bg_img_m" data-input-type="bg_img_m" class="valid" value="" id="bg_img_m">
            <input type="hidden" name="form_custom" id="form_custom" value="0">
            <input type="hidden" name="form_email" id="form_email" value="0">
            <input type="hidden" name="input_count" id="input_count" class="valid" data-input-type="input_count" value="2">
            <input type="hidden" name="bg_shadow" id="bg_shadow" value="0.8">
            <input type="hidden" name="template" id="template" value="wov">
            <input id="userKey" name="userKey" type="hidden" value>
            <input id="pageId" name="pageId" type="hidden" value>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
        <script src="js/init.js"></script>
    </body>
</html>