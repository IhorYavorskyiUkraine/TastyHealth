import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useFetchData, useLoading } from "../../../hooks/hooks";

import "./Enjoy.scss";

const Enjoy = () => {
   const [data, setData] = useState(null);

   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchMenu } = useFetchData();

   const renderMenu = () => {
      const menu = data?.map(item => {
         return (
            <Link to={item.link} className="menu__item" key={item.id}>
               <div className="menu__image">
                  <img src={item.image} alt="itemImage" />
                  <p className="menu__name">{item.name}</p>
               </div>
            </Link>
         );
      });
      return <div className="enjoy__menu menu">{menu}</div>;
   };

   const onRequest = () => {
      startLoading();
      setTimeout(() => {
         fetchMenu()
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
         className="enjoy"
         initial={{ y: 150 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 0.3 }}
         viewport={{ once: true }}
      >
         <div className="container">
            <div className="enjoy__content">
               <p className="enjoy__label">DIETS THAT MAKES YOU FALL IN LOVE</p>
               <h2 className="enjoy__title title">
                  <span>ENJOY</span> THE BEST DIETS
               </h2>
               {loading ? <div className="loader"></div> : renderMenu()}
            </div>
         </div>
      </motion.section>
   );
};

export default Enjoy;
