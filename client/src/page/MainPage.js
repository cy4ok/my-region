import React from 'react'
import MainLogo from "../images/icons/MainLogo.png"

import arrowLeft from "../images/icons/arrowLeft.png"
import arrowRight from "../images/icons/arrowRight.png"
import social from "../images/icons/social.png"

import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Map from "../components/map/Map"
import PopRoute from "../components/popRoute/PopRoute"

const mainPage = () => {
    return (
        <div>
            <Header />
            <Search />
            <Map />
            <PopRoute />
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