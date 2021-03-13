import React from 'react'
import MainLogo from "../images/icons/MainLogo.png"
import People from "../images/icons/people.png"
import MainMap from "../images/icons/MainMap.png"
import foto from "../images/icons/foto.png"
import star from  "../images/icons/star.png"
import clock from  "../images/icons/clock.png"
import LogoTrack from  "../images/icons/LogoTrack.png"
import line from "../images/icons/line.png"
import arrowLeft from "../images/icons/arrowLeft.png"
import arrowRight from "../images/icons/arrowRight.png"
import social from "../images/icons/social.png"

import Header from "../components/header/Header"

const mainPage = () => {
    return (
        <div>
            <Header />
            <div class="flex-none w-auto h-12 bg-secondary">
                <span class="flex justify-center">Подобрать поход или активный тур</span>
                <div class="flex justify-center">
                    <button>Регион</button>
                    <button>Тип похода</button>
                    <button>Сложность</button>
                    <button>Дата</button>
                    <button>Цена</button>
                    <button>Найти</button>
                </div>
            </div>
            <div class="flex justify-center w-auto bg-primary">
                <img src={MainMap} alt="mainMap"/>
            </div>            
            <div class="w-auto bg-primary">
                <span class="flex justify-center">Популярные маршруты</span>
                <div>
                    <div>
                        <img src={foto} alt="foto"/>
                        <div class="flex">
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                        </div>
                        <span>Костромские красоты</span>
                        <span>Костромская область</span>
                        <div class="flex">
                            <img src={clock} alt="clock"/>
                            <span>1 день</span>
                            <img src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span>35 км</span>
                        </div>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
            <div class="w-auto bg-secondary">
                <span>Отзывы</span>
                <div>
                    <img src={arrowLeft} alt="arrowLeft" />
                    <div>
                        <span>Зимний тур в Териберку</span>
                        <span>17.08.21-21.08.21</span>
                        <span>Матвей Миронов</span>
                        <span>Отдохнул отлично, перезагрузился. Тур покупал в последний момент, чтобы убежать на юг из холодной Москвы. Про Египет не знал ничего кроме пирамид. Луксор с его древними храмами вообще оказался для меня полным сюрпризом. </span>
                        <span>Сложность: </span><span>Тяжело</span>
                        <span>Инструктор: </span><span>Понравился</span>
                        <span>Общая оценка: </span><span>Хорошо</span>
                    </div>
                    <div>
                        <span>Зимний тур в Териберку</span>
                        <span>17.08.21-21.08.21</span>
                        <span>Матвей Миронов</span>
                        <span>Отдохнул отлично, перезагрузился. Тур покупал в последний момент, чтобы убежать на юг из холодной Москвы. Про Египет не знал ничего кроме пирамид. Луксор с его древними храмами вообще оказался для меня полным сюрпризом. </span>
                        <span>Сложность: </span><span>Тяжело</span>
                        <span>Инструктор: </span><span>Понравился</span>
                        <span>Общая оценка: </span><span>Хорошо</span>
                    </div>
                    <img src={arrowRight} alt="arrowRight" />
                </div>
            </div>
            <div class="w-auto bg-primary">
                <div>
                    <img src={MainLogo} alt="mainLogo" />
                    <span>г.Москва, ул.Родионова 13, офис 156</span>
                    <span>+7 (982) 234 45 28</span>
                </div>
                <div>
                    <span>Ссылки</span>
                    <span>Маршруты</span>
                    <span>Обучение</span>
                    <span>Личный кабинет</span>
                </div>
                <div>
                    <span>Организациям</span>
                    <span>ООПТ</span>
                    <span>Тарифы</span>
                    <span>Тарифы</span>
                </div>
                <div>
                    <span>Обратная связь</span>
                    <span>Вакансии</span>
                    <span>Контакты</span>
                    <span>Обратная связь</span>
                </div>
                <div>
                    <img src={social} alt="social" />
                    <img src={social} alt="social" />
                    <img src={social} alt="social" />
                    <img src={social} alt="social" />
                    <img src={social} alt="social" />
                </div>
            </div>
        </div>
    )
}

export default mainPage