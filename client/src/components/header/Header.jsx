import React from "react";
import MainLogo from "../../images/icons/MainLogo.png";
import People from "../../images/icons/people.png";

const Header = () => {
  return (
    <header className="flex items-center justify-around w-auto h-28 bg-primary">
      <div className="flex items-center px-2">
        <img src={MainLogo} className="h-20 " alt="mainLogo" />
        <div className="flex flex-col">
          <span className="text-textBlack text-logoSize font-sans py-1 tracking-widest">мой край</span>
          <span className="text-textBlack font-sans font-normal text-sm">Сервис путешествий по России</span>
        </div>
      </div>
      <div className="flex-row justify-center w-1/3">
        <span className="px-6 font-jost text-black hover:text-gray-400 cursor-pointer">Главная</span>
        <span className="px-6 font-jost text-gray-400 hover:text-black cursor-pointer">Расписание</span>
        <span className="px-6 font-jost text-gray-400 hover:text-black cursor-pointer">Путешествинникам</span>
      </div>
      <div className="flex">
        <button className="px-5 text-gray-400 font-jost">Войти</button>
        <img src={People} alt="people" className=""/>
      </div>
    </header>
  );
};

export default Header
