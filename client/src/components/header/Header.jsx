import React from "react"
import MainLogo from "../../images/icons/MainLogo.png"
import People from "../../images/icons/people.png"

const Header = () => {
  return (
    <div class="flex items-center justify-around w-auto h-24 bg-primary">
      <div class="flex items-center px-2">
        <img src={MainLogo} class="h-12" alt="mainLogo" />
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
        <img src={People} alt="people" />
      </div>
    </div>
  )
}

export default Header
