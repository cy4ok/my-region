import React from "react"
import foto from "../../images/icons/foto.png"
import star from  "../../images/icons/star.png"
import clock from  "../../images/icons/clock.png"
import LogoTrack from  "../../images/icons/LogoTrack.png"
import line from "../../images/icons/line.png"

const getStars = () => {
    let content = [];
    for (let i = 0; i < 5; i++) {
    content.push(<img class="p-0.5" src={star} alt="star"/>);
    }
    return content;
     };

const PopRoute = () => {
    return (
       
        <div class="w-auto bg-primary">
                <span class="flex justify-center pt-20 font-jost font-bold text-xl pb-11">Популярные маршруты</span>
                <div class="flex justify-around">
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                </div>
                <div class="flex justify-around">
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                    <div class="pl-8">
                        <img class="pr-8 pt-9 pb-5" src={foto} alt="foto"/>
                        <div class="flex">
                        {getStars()}
                        </div>
                        <span class="flex font-bold text-textSeach font-jost pt-2.5 pb-1">Костромские красоты</span>
                        <span class="flex font-jost text-textRegion text-textRegionColor">Костромская область</span>
                        <div class="flex pt-3 pb-8">
                            <img src={clock} alt="clock"/>
                            <span class="pl-3 text-textCard font-jost" >1 день</span>
                            <img class="px-5" src={line} alt="line"/>
                            <img src={LogoTrack} alt="logoTrack"/>
                            <span class="pl-3 text-textCard font-jost">35 км</span>
                        </div>
                        <button class="bg-bgBtn w-72 h-11 rounded-3xl text-white font-jost font-medium text-base">Подробнее</button>
                    </div>
                </div>
            </div>
    )
}

export default PopRoute