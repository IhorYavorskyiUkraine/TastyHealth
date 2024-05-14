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
                     <h1 className="singleDiet__title"></h1>
                     {data && <h1>{data.days[0].time[0].food[0].name}</h1>}
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default SinglePage;
