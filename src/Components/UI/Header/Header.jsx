import cls from "../Header/Header.module.css";
import Logo from "../../../Images/logo.png";
import React from "react";

function Header() {
  return (
    <header>
      <div className={cls.header_nav}>
        <nav className={cls.nav_bar}>
          <div className={cls.logo_circle}>
            <img src={Logo} alt="Логотип" />
          </div>

          <div className={cls.name_company}>
            <p>Pallas cat studio</p>
          </div>
          <ul>
            <li>Главная</li>
            <li>О компании</li>
            <li>Модалки</li>
            <li>Контакты</li>
            <li>Партнеры</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
