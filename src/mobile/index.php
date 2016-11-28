<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=480">
        <title>Document</title>
        <link type="image/x-icon" href="favicon.ico" rel="shortcut icon">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400i,600i|PT+Sans+Caption:400,700|Roboto+Slab:700&amp;subset=cyrillic" rel="stylesheet">
        <script>
            if (screen.width <= 750) {
                document.location = "../mobile/" + document.location.search;
            }
        </script>
        <style>
            <?php include('css/head.css');
            ?>
        </style>
        <link href="css/sass/style.css" rel="stylesheet">
        <?php include('../track/head.php'); ?>
    </head>
    <body>
        <div id="maket"></div>
        <header>
            <div>
                <a class="btn_menu_open" href></a>
                <a class="logo" href></a>
                <a class="login" href></a>
                <div class="user">
                    <img class="user_im" src="img/ava.png" alt height="57" width="57">
                    <p class="user_n">Марина Хлебникова</p>
                    <a class="logout" href>Выйти</a>
                </div>
            </div>
        </header>
        <section class="sec1">
            <div>
                <h1>ДНК Бизнеса</h1>
                <span>Для предпринимателей и их бабушек</span>
                <p>Стираем границы между обучением
                    <br>и практикой</p>
                <h2>Все решения по привлечению <br>и взаимодействию с<br> клиентом на одном сервисе</h2>
                <div class="vid">
                    <div class="play"></div>
                </div>
                <h3>ДНК Атом</h3>
                <a class="btn" href>Начать</a>
                <a class="politic" href>Политика конфидицеальности</a>
            </div>
        </section>
        <section class="sec2">
            <div>
                <h2>Пошаговый сервис по <br>созданию потока клиентов <br>и взаимодействия с ними</h2>
                <p>Мы не только решим проблему
                    <br>привлечения клиентов, но и
                    <br> дадим тебе все инструменты для дальнейшего развития
                    <br>твоего бизнеса</p>
                <div class="vid">
                    <div class="play"></div>
                </div>
                <p>Не теряй время на видео,
                    <br>нажимай на кнопку и
                    <br>получи поток клиентов
                    <br>уже сегодня!</p>
                <a class="btn" href>Получить клиентов</a>
            </div>
        </section>
        <section class="sec3">
            <div>
                <h2>Твой сайт <br>уже готов!</h2>
                <h3>Осталось наполнить его информацией</h3>
                <div class="vid">
                    <div class="play"></div>
                </div>
                <p>Напишите свой дескриптор</p>
                <textarea name="discr" placeholder="Введите текст"></textarea>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec4">
            <div>
                <div class="vid_offer">
                    <h2>Самая важная часть вашего <br>сайта это оффер!</h2>
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                </div>
                <div class="offer_top">
                    <div class="block">
                        <div class="vid">
                            <div class="play"></div>
                        </div>
                        <textarea name="discr" placeholder="Что Вы продаете?"></textarea>
                    </div>
                    <div class="block">
                        <div class="vid">
                            <div class="play"></div>
                        </div>
                        <textarea name="discr" placeholder="Что Впокупает клиент?"></textarea>
                    </div>
                    <div class="block">
                        <div class="vid">
                            <div class="play"></div>
                        </div>
                        <textarea name="discr" placeholder="Что получает клиент?"></textarea>
                    </div>
                </div>
                <div class="of_for_block">
                    <h2>Как сформулировать <br>оффер?</h2>
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                    <p>Посмотри примеры 20 офферов, <br>которые дают конверсию <br>более 7,5%</p>
                    <a class="btn" href>Посмотреть примеры офферов</a>
                </div>
                <div class="write_offer">
                    <h2>Напишите здесь свой <br>оффер !</h2>
                    <div class="link">
                        <textarea name="discr" placeholder="Основа"></textarea>
                        <span>Не более 36 символов</span>
                    </div>
                    <div class="link">
                        <textarea name="discr" placeholder="Преимущество"></textarea>
                        <span>Не более 90 символов</span>
                    </div>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec5">
            <div>
                <h2>Введи данные, куда будут <br> приходить звонки и заявки</h2>
                <div class="block">
                    <p>Телефон для заявок:</p>
                    <div class="link">
                        <input type="text" placeholder="Введите номер с кодом">
                    </div>
                </div>
                <div class="block">
                    <p>Почта для заявок:</p>
                    <div class="link">
                        <input type="text" placeholder="Введите Ваш e-mail для заявок">
                    </div>
                </div>
                <div class="block">
                    <p>Почта на сайте:</p>
                    <div class="link">
                        <input type="text" placeholder="Введите Ваш e-mail на сайте">
                        <span>Если почта та же, что и для заявок оставьте поле пустым</span>
                    </div>
                </div>
                <div class="block">
                    <p>Адрес Вашей компании:</p>
                    <div class="link">
                        <input type="text" placeholder="Введите город">
                    </div>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec6">
            <div>
                <h2>Регистрация почты</h2>
                <div class="vid">
                    <div class="play"></div>
                </div>
                <div class="block">
                    <a class="gmail" href>Google почта</a>
                    <a class="yandex" href>Яндекс почта</a>
                    <a class="mail" href>Mail почта</a>
                </div>
                <p>Для продолжения работы необходимо <br>подтвердить электронный адрес, для этого <br>перейдите в свою почту и найдите письмо с <br>отправителем ДНК АТОМ.</p>
                <p>В тексте письма перейдите по ссылке <br> подтверждение и продолжите работу с <br>сервисом.</p>
            </div>
        </section>
        <section class="sec7">
            <div>
                <h2>Есть ли у вашей компании продающее видео?</h2>
                <div class="block">
                    <a class="btn" href>Есть видео</a>
                    <a class="btn" href>Нет видео</a>
                </div>
                <textarea name="discr" placeholder="Вставьте сюда ссылку на видео youtube"></textarea>
                <div class="block">
                    <a class="btn_url" href>Примеры продаюищх видео</a>
                </div>
                <div class="block">
                    <div class="line"></div>
                </div>
                <h2>Есть ли у вашей компании логотип?</h2>
                <div class="block">
                    <a class="btn" href>Да, есть</a>
                    <a class="btn" href>увы, нет</a>
                </div>
                <p>Загрузите Ваш логотип в нужном формате</p>
                <div class="block">
                    <div class="block">
                        <label for>
                            <input type="file"> Загрузить логотип
                        </label>
                        <div class="vid">
                            <div class="play"></div>
                        </div>
                    </div>
                    <div class="block">
                        <span>Так он будет выглядеть:</span>
                        <div class="logo_img"></div>
                    </div>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec8">
            <div>
                <h2>Причина оставить заявку</h2>
                <div class="block">
                    <div class="block">
                        <div class="vid">
                            <div class="play"></div>
                        </div>
                    </div>
                    <div class="block">
                        <textarea name="discr" placeholder="Введите причину, по которой вам будут оставлять заявки"></textarea>
                        <textarea name="discr" placeholder="Введите надпись на кнопке"></textarea>
                    </div>
                </div>
                <h2>Какие данные вы хотите получить от клиента?</h2>
                <div class="block">
                    <a class="r_btn" href>Имя</a>
                    <a class="r_btn" href>Телефон</a>
                    <a class="r_btn active" href>e-mail</a>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec9">
            <div>
                <h2>Осталось выбрать фото / видео фон для сайта вашей</h2>
                <div class="vid">
                    <div class="play"></div>
                </div>
                <div class="block">
                    <p>Ссылка на видео:</p>
                    <textarea name="discr" placeholder="Вставьте сюда ссылку на видео youtube"></textarea>
                </div>
                <div class="block">
                    <p>Загрузить фото:</p>
                    <label for>
                        <input type="file"> Загрузить
                    </label>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec10">
            <div>
                <img src="img/monitor.png" alt height="172" width="172">
                <h2>Настало время посмотреть сайт!</h2>
                <a class="btn" href>Посмотреть сайт</a>
            </div>
        </section>
        <section class="sec11">
            <div class="laptop">
                <div class="site"></div>
            </div>
            <div>
                <h2>Отзывы пользователей DNK ATOM</h2>
                <div class="slider_w">
                    <div class="slider">
                        <div class="slid">
                            <div class="block">
                                <div class="block">
                                    <p>Сайт</p>
                                    <span>www.site.com</span>
                                </div>
                                <div class="block">
                                    <p>Конверсия</p>
                                    <span>348</span>
                                </div>
                                <div class="block">
                                    <p>Цена</p>
                                    <span>29 000 руб.</span>
                                </div>
                            </div>
                            <div class="block">
                                <div class="vid">
                                    <div class="play"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="prev" href></a>
                    <a class="next" href></a>
                </div>
                <div class="block_url">
                    <p>Ссылка на твой сайт:</p>
                    <a class="url_site" href>www.yoursite.com</a>
                </div>
                <div class="block_v">
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                    <p>Подключи сайт к своему домену, привяжи его к СРМ системе
                        <br>и настрой эффективную компанию на Яндекс Директ</p>
                </div>
                <h2>Ты сделаешь все это всего <br>за 1 час И уже сегодня получишь <br>первых клиентов!</h2>
                <div class="block">
                    <div class="line"></div>
                </div>
                <h3>Открой доступ к продолжению пошагового <br>курса по привлечению клиентов в твой <br>бизнес всего за 179 руб. !</h3>
                <div class="block_b">
                    <p>Бонусом ты получишь еще 15 крутых
                        <br>примеров продающих видео и офферов</p>
                    <a class="btn" href>Мне не нужны <br>клиенты</a>
                    <a class="btn" href>Мне нужны клиенты. <br>Продолжить за 179 руб.</a>
                </div>
            </div>
        </section>
        <section class="sec12">
            <div>
                <h2>Привязка сайта к вашему домену</h2>
                <div class="block">
                    <a class="btn" href>Я знаю как это делать</a>
                    <a class="btn" href>Есть домен, не знаю как привязать</a>
                    <a class="btn" href>Нет домена</a>
                </div>
                <p>Добавьте А запись: ХХХ.ХХ.Х.ХХ к вашему домену</p>
                <div class="block">
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                </div>
                <a class="btn_next" href>Следующий шаг</a>
            </div>
        </section>
        <section class="sec13">
            <div>
                <h2>Привязка CRM системы</h2>
                <div class="block">
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                </div>
                <a class="btn_next" href>Привязать CRM систему</a>
            </div>
        </section>
        <section class="sec14">
            <div>
                <h2>Ваша CRM система уже привязана !</h2>
                <div class="block">
                    <div class="vid">
                        <div class="play"></div>
                    </div>
                    <p>С этого момента вам открыт на 1 неделю доступ в CRM систему в
                        <br>вашем личном кабинете</p>
                </div>
                <a class="btn_next" href>Настроить бизнес процессы</a>
            </div>
        </section>
        <div id="hidden-box">
            <div class="popap">
                <div class="close_p"></div>
                <p>Данное поле заполнено
                    <br>некорректно!</p>
            </div>
            <div class="pop" id="login">
                <div>
                    <div class="close"></div>
                    <div class="block">
                        <h2>Войти</h2>
                        <form action>
                            <input name="mail" type="text" placeholder="Введите Ваш e-mail">
                            <input name="password" type="text" placeholder="Введите пароль">
                            <input class="sub" type="submit" value="Войти" placeholder="Войти">
                        </form>
                    </div>
                </div>
            </div>
            <div class="pop" id="menu">
                <div>
                    <div class="close"></div>
                    <div class="block">
                        <a class="menu_a" href>Главная</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Пошаговый сервис</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Твой сайт уже готов</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Написать свой оффер</a>
                    </div>
                    <div class="block">
                        <a class="menu_a active" href>Введите данные куда будут приходить звонки</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Есть ли у Вашей компании видео?</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Причина оставить заявку</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Поставить фото/видео фон</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Твой сайт уже готов</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Отзывы пользователей DNK Atom</a>
                    </div>
                    <div class="block">
                        <a class="menu_a" href>Привязка сайта к Вашему домену</a>
                    </div>
                </div>
            </div>
        </div>
        <?php include('../track/body.php'); ?>
    </body>
</html>