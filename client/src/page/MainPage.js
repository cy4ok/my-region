import React from 'react'
import MainLogo from "../images/icons/MainLogo.png"


import social from "../images/icons/social.png"

import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Map from "../components/map/Map"
import PopRoute from "../components/popRoute/PopRoute"
import Reviews from "../components/reviews/Reviews"

const mainPage = () => {
    return (
        <div>
            <Header />
            <Search />
            <Map />
            <PopRoute />
            <Reviews />
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