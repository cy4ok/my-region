import React from "react";
import MainLogo from "../../images/icons/MainLogo.png";
import People from "../../images/icons/people.png";

const Header = () => {
  return (
    <header class="flex items-center justify-around w-auto h-28 bg-primary">
      <div class="flex items-center px-2">
        <img src={MainLogo} class="h-20 " alt="mainLogo" />
        <div class="flex flex-col">
          <span class="text-textBlack text-logoSize font-sans py-1">мой край</span>
          <span class="text-textBlack font-sans font-normal text-sm">Сервис путешествий по России</span>
        </div>
      </div>
      <div class="flex-row justify-center w-1/3">
        <span class="px-6 font-jost text-black hover:text-gray-400 cursor-pointer">Главная</span>
        <span class="px-6 font-jost text-gray-400 hover:text-black cursor-pointer">Расписание</span>
        <span class="px-6 font-jost text-gray-400 hover:text-black cursor-pointer">Путешествинникам</span>
      </div>
      <div class="flex">
        <button class="px-5 text-gray-400 font-jost">Войти</button>
        <img src={People} alt="people" class=""/>
      </div>
    </header>
  );
};

export default Header;