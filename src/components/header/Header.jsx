import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

import DarkMode from "./darkMode/DarkMode";
import BurgerMenu from "./burgerMenu/BurgerMenu";

import "./Header.scss";

const Header = () => {
   return (
      <motion.header
         className="header"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
      >
         <div className="container">
            <div className="header__menu menu">
               <Link to="/" className="menu__logo">
                  <span>Tasty</span> Health
               </Link>
               <nav className="menu__body">
                  <ul className="menu__list">
                     <li className="menu__item">
                        <NavLink to="/" className="menu__link">
                           Home
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink to="/kcal-calc" className="menu__link">
                           Calorie Calculator
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink to="/food-and-diet" className="menu__link">
                           Food & Diet
                        </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink to="/about-us" className="menu__link">
                           About Us
                        </NavLink>
                     </li>
                  </ul>
               </nav>
               <div className="menu__buttons">
                  <DarkMode />
                  <BurgerMenu />
               </div>
            </div>
         </div>
      </motion.header>
   );
};

export default Header;
