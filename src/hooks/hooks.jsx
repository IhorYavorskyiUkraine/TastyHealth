import { useState } from "react";

const useFetchData = () => {
   const fetchTables = async () => {
      try {
         const response = await fetch("http://localhost:3001/whyChooseUs");
         const tablesData = await response.json();
         return tablesData;
      } catch (error) {
         console.error("Error", error);
      }
   };

   const fetchSlides = async () => {
      try {
         const response = await fetch("http://localhost:3001/sliderSlides");
         const tablesData = await response.json();
         return tablesData;
      } catch (error) {
         console.error("Error", error);
      }
   };

   const fetchMenu = async () => {
      try {
         const response = await fetch("http://localhost:3001/menu");
         const tablesData = await response.json();
         return tablesData;
      } catch (error) {
         console.error("Error", error);
      }
   };

   const fetchLose = async () => {
      try {
         const response = await fetch("http://localhost:3001/lose");
         const tablesData = await response.json();
         return tablesData;
      } catch (error) {
         console.error("Error", error);
      }
   };

   return {
      fetchTables,
      fetchSlides,
      fetchMenu,
      fetchLose,
   };
};

const useLoading = () => {
   const [loading, setLoading] = useState(false);

   const startLoading = () => {
      setLoading(true);
   };

   const stopLoading = () => {
      setLoading(false);
   };

   return { loading, startLoading, stopLoading };
};

export { useFetchData, useLoading };
