import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

import { useFetchData, useLoading } from "../../../hooks/hooks";

import btn from "/images/main/reviews/btn.png";

import "./Reviews.scss";
import "swiper/scss";

const Reviews = () => {
   const [data, setData] = useState(null);

   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchSlides } = useFetchData();

   const renderSlider = () => {
      const slides = data?.map(item => {
         return (
            <SwiperSlide className="slider__slide slider-slide" key={item.id}>
               <div className="slider-slide__image">
                  <img src={item.image} alt="slide" />
               </div>
               <h3 className="slider-slide__name">{item.name}</h3>
               <p className="slider-slide__age">{item.age}</p>
               <p className="slider-slide__text">{item.text}</p>
            </SwiperSlide>
         );
      });
      return (
         <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={35}
            slidesPerView={"auto"}
            pagination={{
               el: ".swiper-pagination",
               type: "fraction",
            }}
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            }}
            className="reviews__slider slider"
         >
            {slides}
         </Swiper>
      );
   };

   const onRequest = () => {
      startLoading();
      setTimeout(() => {
         fetchSlides()
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
         className="reviews"
         initial={{ y: 150 }}
         whileInView={{ y: 0 }}
         transition={{ duration: 0.3 }}
         viewport={{ once: true }}
      >
         <div className="container">
            <div className="reviews__content">
               <div className="reviews__info">
                  <h2 className="reviews__title">
                     What Are People Saying <span>About Us</span>
                  </h2>
                  <p className="reviews__text">
                     We are very pleased if you are satisfied with our service,
                     let's read the clean reviews from customers who have used
                     our products.
                  </p>
               </div>
               {loading ? <div className="loader"></div> : renderSlider()}
               <div className="reviews__buttons">
                  <button className="swiper-button-prev">
                     <img src={btn} alt="btn" />
                  </button>
                  <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                     <span className="swiper-pagination-current"></span>/
                     <span className="swiper-pagination-total"></span>
                  </div>
                  <button className="swiper-button-next">
                     <img src={btn} alt="btn" />
                  </button>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Reviews;
