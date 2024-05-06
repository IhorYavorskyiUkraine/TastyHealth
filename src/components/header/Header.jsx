import { NavLink, Link } from "react-router-dom";

import DarkMode from "./darkMode/DarkMode";

import "./Header.scss";

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__menu menu">
               <Link to="/" className="menu__logo">
                  <span>Tasty</span> Health
               </Link>
               <nav className="menu__body">
                  <ul className="menu__list">
                     <li className="menu__item">
                        <NavLink
                           to="/"
                           className="menu__link"
                           activeClassName="link-active"
                        >
                           Home
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           to="/kcal-calc"
                           className="menu__link"
                           activeClassName="link-active"
                        >
                           Calorie Calculator
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           to="/food-and-diet"
                           className="menu__link"
                           activeClassName="link-active"
                        >
                           {" "}
                           Food & Diet
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           to="/about-us"
                           className="menu__link"
                           activeClassName="link-active"
                        >
                           About Us
                        </NavLink>
                     </li>
                  </ul>
               </nav>
               <DarkMode />
            </div>
         </div>
      </header>
   );
};

export default Header;
