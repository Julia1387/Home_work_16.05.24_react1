import cls from "../Header/Header.module.css";
import Logo from "../../../Images/logo.png";
import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className={cls.header}>
      <div className={cls.header_nav}>
        <nav className={cls.nav_bar}>
          <div className={cls.logo_circle}>
            <img src={Logo} alt="Логотип" />
          </div>

          <div className={cls.name_company}>
            <p>Pallas cat studio</p>
          </div>
          <ul className={cls.navbar}>

            <li>
              <Link to={"/home"}>Главная</Link>
              </li>
            <li>
            <Link to={"/about"}>О компании</Link>
            </li>
            <li>
            <Link to={"/modal"}>Модалки</Link>
            </li>
            <li>
            <Link to={"/"}>Контакты</Link>
            </li>
            <li>
            <Link to={"/"}>Партнеры</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
