import React from 'react'
import MainLogo from "../images/icons/MainLogo.png"

const mainPage = () => {
    return (
        <div>
            <div class="flex w-auto h-24 bg-primary">
                <div class="flex items-center px-2">
                        <img src={MainLogo} class="h-12"/>
                        <div class="flex flex-col">
                            <span>Мой край</span>
                            <span>Сервис путешествий по России</span>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>

            </div>
            <div class="w-auto h-12 bg-secondary">

            </div>
            <div class="w-auto h-12 bg-red-300">

            </div>            
            <div class="w-auto h-12 bg-red-900">

            </div>
            <div class="w-auto h-12 bg-red-300">

            </div>
        </div>
    )
}

export default mainPage