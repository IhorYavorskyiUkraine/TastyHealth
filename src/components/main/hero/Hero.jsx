import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bg from "/images/main/hero/bg.png";

import "./Hero.scss";

const Hero = () => {
   return (
      <motion.section
         className="hero"
         initial={{ y: 150 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.3 }}
      >
         <div className="hero__content">
            <div className="hero__column">
               <div className="hero__info">
                  <p className="hero__best">#1 Best Calorie Calculator!</p>
                  <h1 className="hero__title">
                     <span>Count Calories And</span> Lose Weight!
                  </h1>
                  <p className="hero__text text">
                     Count calories, lose weight wisely!
                  </p>
                  <Link className="hero__link" to="/kcal-calc">
                     <span>Lose Weight</span>
                  </Link>
                  <div className="hero__counters counters">
                     <div className="counters__customers">
                        <p className="counters__number">5.000+</p>
                        <p className="counters__text">Customer</p>
                     </div>
                     <div className="counters__ratings">
                        <p className="counters__number">1.000+</p>
                        <p className="counters__text">Ratings</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="hero__column">
               <div className="hero__image">
                  <img src={bg} alt="bg" />
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Hero;
