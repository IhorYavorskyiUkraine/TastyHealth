import { motion } from "framer-motion";

import "./Hero.scss";

const Hero = () => {
   return (
      <div className="main">
         <div className="container">
            <motion.section
               className="aboutUs"
               initial={{ y: 150 }}
               whileInView={{ y: 0 }}
               transition={{ duration: 0.3 }}
               viewport={{ once: true }}
            >
               <div className="aboutUs__content">
                  <p className="aboutUs__est text">EST. 2024</p>
                  <h1 className="aboutUs__title title">
                     Our <span>Story</span>
                  </h1>
                  <p className="aboutUs__text text">
                     In those early days when we were just starting out, our
                     team consisted of a few enthusiasts passionate about a
                     healthy lifestyle. We often gathered together, discussing
                     the benefits of proper nutrition and sharing healthy food
                     recipes. Our dream was to create an online resource that
                     would be a reliable guide in the world of healthy eating.
                  </p>
                  <p className="aboutUs__text text">
                     Over time, our project grew, and so did the number of
                     people who shared our vision. We expanded our team,
                     bringing in experienced dieticians and fitness experts. We
                     developed unique tools, such as a calorie calculator, to
                     help people control their diet and achieve their desired
                     results.
                  </p>
                  <p className="aboutUs__text text">
                     Today, we are pleased to welcome you to our website, where
                     you will find not only information about our team but also
                     a wealth of useful materials to help you live well and make
                     the most of your health. Welcome to our community, where
                     caring for your health is our main goal!
                  </p>
               </div>
            </motion.section>
         </div>
      </div>
   );
};

export default Hero;
