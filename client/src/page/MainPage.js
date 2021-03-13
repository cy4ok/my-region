import React from 'react'
import MainLogo from "../images/icons/MainLogo.png"
import People from "../images/icons/people.png"
import MainMap from "../images/icons/MainMap.png"
import foto from "../images/icons/foto.png"
import star from  "../images/icons/star.png"
import clock from  "../images/icons/clock.png"
import LogoTrack from  "../images/icons/LogoTrack.png"
import line from "../images/icons/line.png"

const mainPage = () => {
    return (
        <div>
            <div class="flex items-center justify-around w-auto h-24 bg-primary">
                <div class="flex items-center px-2">
                        <img src={MainLogo} class="h-12" alt="mainLogo"/>
                        <div class="flex flex-col">
                            <span>Мой край</span>
                            <span>Сервис путешествий по России</span>
                    </div>
                </div>
                <div class="flex-row justify-center">
                    <span>Главная</span>
                    <span>Расписание</span>
                    <span>Путешествинникам</span>
                </div>
                <div class="flex">
                    <button>Войти</button>
                    <img src={People} alt="people"/>
                </div>

            </div>
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
            <div class="w-auto h-12 bg-secondary">
                <span>Отзывы</span>
                <div>

                </div>
            </div>
        </div>
    )
}

export default mainPage