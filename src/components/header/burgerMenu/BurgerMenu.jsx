import { useState } from "react";
import { Link } from "react-router-dom";

import burgerOpen from "/images/header/burger.png";
import burgerClose from "/images/header/close.png";

import "./BurgerMenu.scss";

const BurgerMenu = () => {
   const [lock, setLock] = useState(false);

   const handleLock = () => {
      setLock(!lock);
      lock
         ? document.body.classList.remove("lock")
         : document.body.classList.add("lock");
   };

   return (
      <div className="burger">
         <button onClick={handleLock} className="burger__icon">
            <img src={burgerOpen} alt="icon" />
         </button>
         <div className={lock ? "burger__overlay" : "burger__overlay hidden"}>
            <div className="burger__header">
               <Link to="/" className="burger__logo">
                  <span>Tasty</span> Health
               </Link>
               <button onClick={handleLock} className="burger__close">
                  <img src={burgerClose} alt="burgerClose" />
               </button>
            </div>
            <div className="burger__main">
               <Link to="/" id="home" className="burger__item">
                  <span className="burger__link">Home</span>
               </Link>
               <Link to="/kcal-calc" id="kcal-calc" className="burger__item">
                  <span className="burger__link">Calorie Counter</span>
               </Link>
               <Link
                  to="/food-and-diet"
                  id="food-and-diet"
                  className="burger__item"
               >
                  <span className="burger__link">Food & Diet</span>
               </Link>
               <Link to="/about-us" id="about-us" className="burger__item">
                  <span className="burger__link">About Us</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default BurgerMenu;
