import React, { Suspense } from "react";

import MainPage from "./mainPage/MainPage";

const LazyKcalCalcPage = React.lazy(
   () => import("./kcalCalcPage/KcalCalcPage"),
);
const LazyNotFoundPage = React.lazy(
   () => import("./notFoundPage/NotFoundPage.jsx"),
);
const LazyDietsPage = React.lazy(() => import("./dietsPage/DietsPage"));
const LazyDietsSinglePage = React.lazy(
   () => import("./dietsPage/dietsSinglePage/DietsSinglePage"),
);
const LazyAboutUsPage = React.lazy(() => import("./aboutUsPage/AboutUsPage"));

export const KcalCalcPage = () => {
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
export const DietsPage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyDietsPage />
      </Suspense>
   );
};
export const DietsSinglePage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyDietsSinglePage />
      </Suspense>
   );
};
export const TrendySinglePage = () => {
   return (
      <Suspense fallback={<div className="loader"></div>}>
         <LazyTrendySinglePage />
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
