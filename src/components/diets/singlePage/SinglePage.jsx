import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { useFetchData, useLoading } from "../../../hooks/hooks.jsx";

import Header from "../../header/Header.jsx";
import Footer from "../../footer/Footer.jsx";

import "./SinglePage.scss";

const SinglePage = () => {
   const [data, setData] = useState(null);

   const { id } = useParams();
   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchSingleDiet } = useFetchData();

   const renderDiet = () => {
      const calculateTotalKcal = time => {
         return time.reduce((total, time) => total + time.kcal, 0);
      };

      return (
         <>
            {data?.days.map(day => (
               <motion.div
                  className="singleDiet__item"
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
               >
                  <h2 className="singleDiet__day">{day.day}</h2>
                  <div className="singleDiet__image">
                     <img src={day.image} alt="Diet image" />
                  </div>
                  <div className="singleDiet__diet">
                     {day.time.map(time => (
                        <>
                           <h3 className="singleDiet__time">{`${time.time} (${time.kcal} calories)`}</h3>
                           <ul className="singleDiet__list">
                              {time.food.map((food, i) => {
                                 return (
                                    <li key={i} className="singleDiet__food">
                                       {food.name}
                                    </li>
                                 );
                              })}
                           </ul>
                        </>
                     ))}
                     <p className="singleDiet__total">
                        Total calories: {calculateTotalKcal(day.time)}
                     </p>
                  </div>
               </motion.div>
            ))}
         </>
      );
   };

   const onRequest = () => {
      startLoading();
      setTimeout(() => {
         fetchSingleDiet(id)
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
      <div className="wrapper">
         <Header />
         <main className="main">
            <div className="container">
               <section className="singleDiet">
                  <div className="singleDiet__content">
                     {data && (
                        <h1 className="singleDiet__title title">{data.name}</h1>
                     )}
                     {loading ? <div className="loader"></div> : renderDiet()}
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default SinglePage;
