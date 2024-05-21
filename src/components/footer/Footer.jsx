import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import location from "/images/footer/location.png";
import mail from "/images/footer/mail.png";
import call from "/images/footer/call.png";

import twitter from "/images/footer/twitter.png";
import linkedin from "/images/footer/linkedin.png";
import instagram from "/images/footer/instagram.png";

import "./Footer.scss";

const Footer = () => {
   return (
      <motion.footer
         className="footer"
         initial={{ y: 150 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 0.3 }}
         viewport={{ once: true }}
      >
         <div className="container">
            <div className="footer__content">
               <div className="footer__column">
                  <div className="footer__logo">
                     <p>
                        <span>TASTY</span> HEALTH
                     </p>
                  </div>
                  <p className="footer__text">
                     Count calories, lose weight wisely!
                  </p>
                  <p className="footer__copyright">©Copyright Tasty Health</p>
               </div>
               <div className="footer__column">
                  <h4 className="footer__title">Feature</h4>
                  <ul className="footer__items">
                     <li className="footer__item">
                        <Link to="/" className="footer__link">
                           Home
                        </Link>
                     </li>
                     <li className="footer__item">
                        <Link to="/diets" className="footer__link">
                           Diets
                        </Link>
                     </li>
                     <li className="footer__item">
                        <Link to="/about-us" className="footer__link">
                           About Us
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="footer__column">
                  <h4 className="footer__title">Get in Touch</h4>
                  <ul className="footer__items">
                     <li className="footer__item">
                        <img className="footer__icon" src={location} alt="" />
                        <Link to="/" className="footer__link">
                           54 Pushkinska Street, Odesa
                        </Link>
                     </li>
                     <li className="footer__item">
                        <img className="footer__icon" src={mail} alt="" />
                        <Link
                           to="mailto:yapazhiloyigogosha@gmail.com"
                           className="footer__link"
                        >
                           yapazhiloyigogosha@gmail.com
                        </Link>
                     </li>
                     <li className="footer__item">
                        <img className="footer__icon" src={call} alt="" />
                        <Link to="tel: +380961231212" className="footer__link">
                           +380 96-123-12-12
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="footer__column">
                  <ul className="footer__socialLinks">
                     <li className="footer__socialLink">
                        <Link to="/" className="footer__image">
                           <img src={twitter} alt="" />
                        </Link>
                     </li>
                     <li className="footer__socialLink">
                        <Link to="/" className="footer__image">
                           <img src={linkedin} alt="" />
                        </Link>
                     </li>
                     <li className="footer__socialLink">
                        <Link to="/" className="footer__image">
                           <img src={instagram} alt="" />
                        </Link>
                     </li>
                  </ul>
                  <p className="footer__follow">Follow our social media.</p>
               </div>
            </div>
         </div>
      </motion.footer>
   );
};

export default Footer;
