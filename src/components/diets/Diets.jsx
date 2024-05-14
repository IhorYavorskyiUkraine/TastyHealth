import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchData, useLoading } from "../../hooks/hooks";
import { motion } from "framer-motion";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Diets.scss";

const Diets = () => {
   const [data, setData] = useState(null);

   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchDiets } = useFetchData();

   const renderDiets = () => {
      const diets = data?.map(item => {
         return (
            <Link
               to={`/diets/${item.id}`}
               className="diets__item"
               key={item.id}
            >
               <img src={item.image} className="diets__image" alt="item.img" />
               <h3 className="diets__name text">{item.name}</h3>
               <p className="diets__user text">By {item.user}</p>
            </Link>
         );
      });

      return <ul className="diets__list">{diets}</ul>;
   };

   const onRequest = () => {
      startLoading();
      setTimeout(() => {
         fetchDiets()
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
               <motion.section
                  className="diets"
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
               >
                  {loading ? <div className="loader"></div> : renderDiets()}
               </motion.section>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default Diets;
