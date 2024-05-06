import { useState } from "react";
import { Link } from "react-router-dom";

import burgerOpen from "/images/header/burger/burger.png";
import burgerClose from "/images/header/burger/close.png";
import burgerLogo from "/images/header/burger/burgerLogo.png";

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
      <>
         <div className="burger">
            <button onClick={handleLock} className="burger__icon">
               <img src={burgerOpen} alt="icon" />
            </button>
            <div
               className={lock ? "burger__overlay" : "burger__overlay hidden"}
            >
               <div className="burger__header">
                  <div className="burger__logo">
                     <img
                        className="burger__img"
                        src={burgerLogo}
                        alt="burgerLogo"
                     />
                  </div>
                  <button onClick={handleLock} className="burger__close">
                     <img src={burgerClose} alt="burgerClose" />
                  </button>
               </div>
               <div className="burger__main">
                  <Link to="/about" id="about" className="burger__item">
                     <span className="burger__link">About</span>
                  </Link>
                  <Link to="/pricing" id="pricing" className="burger__item">
                     <span className="burger__link">Pricing</span>
                  </Link>
                  <Link to="/blog" id="blog" className="burger__item">
                     <span className="burger__link">Blog</span>
                  </Link>
                  <Link to="/events" id="events" className="burger__item">
                     <span className="burger__link">Events</span>
                  </Link>
               </div>
               <div className="burger__footer">
                  <Link to="/" className="burger__singup btn">
                     <span>Sign Up</span>
                  </Link>
                  <Link to="/" className="burger__login btn">
                     <span>Log In</span>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default BurgerMenu;
