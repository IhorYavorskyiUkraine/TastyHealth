import React, { Suspense } from "react";

import MainPage from "./mainPage/MainPage";

const LazyKcalCalcPage = React.lazy(() => import("./kcalCalkPage/KcalCalkPage"));
const LazyNotFoundPage = React.lazy(() => import("./notFoundPage/NotFoundPage.jsx"));
const LazyFoodAndDietPage = React.lazy(() => import("./foodAndDietPage/FoodAndDietPage"));
const LazyAboutUsPage = React.lazy(() => import("./aboutUsPage/AboutUsPage"));

export const KcalCalc = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyKcalCalcPage />
      </Suspense>
   );
};
export const NotFoundPage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyNotFoundPage />
      </Suspense>
   );
};
export const FoodAndDietPage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyFoodAndDietPage />
      </Suspense>
   );
};
export const AboutUsPage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyAboutUsPage />
      </Suspense>
   );
};

export default MainPage;
