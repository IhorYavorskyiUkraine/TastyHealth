import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useFetchData, useLoading } from "../../../hooks/hooks";

import arrow from "/images/main/whyChooseUs/arrow.png";

import "./WhyChooseUs.scss";

const WhyChooseUs = () => {
   const [data, setData] = useState(null);

   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchCards } = useFetchData();

   const renderCards = () => {
      const cards = data?.map(item => {
         return (
            <li className="whyChooseUs__card card" key={item.id}>
               <div className="card__image">
                  <img src={item.image} alt="image" />
               </div>
               <h3 className="card__title">{item.title}</h3>
               <p className="card__text">{item.text}</p>
               <Link className="card__link" to={item.link}>
                  Learn more
                  <img src={arrow} alt="arrow" />
               </Link>
            </li>
         );
      });
      return <ul className="whyChooseUs__cards">{cards}</ul>;
   };

   const onRequest = () => {
      startLoading();
      setTimeout(() => {
         fetchCards()
            .then(data => setData(data))
            .catch(error => {
               console.error("Error fetching data:", error);
            })
            .finally(() => stopLoading());
      }, 300);
   };

   useEffect(() => {
      onRequest();
   }, []);

   return (
      <motion.section
         className="whyChooseUs"
         initial={{ y: 150 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 0.3 }}
         viewport={{ once: true }}
      >
         <div className="container">
            <div className="whyChooseUs__content">
               <div className="whyChooseUs__top">
                  <h2 className="whyChooseUs__title title">
                     WHY CHOOSE US <br /> FOR <span>YOUR HEALTHY DIET</span>
                  </h2>
                  <p className="whyChooseUs__text text">
                     Our website offers customised diets based on calorie
                     calculator results, providing a personalised approach to
                     nutrition.
                  </p>
               </div>
               <div className="whyChooseUs__bottom">
                  {loading ? <div className="loader"></div> : renderCards()}
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default WhyChooseUs;
