import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage, {
   KcalCalc,
   FoodAndDietPage,
   AboutUsPage,
   NotFoundPage,
} from "./pages";

import "./App.scss";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/kcal-calc",
      element: <KcalCalc />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/food-and-diet",
      element: <FoodAndDietPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/about-us",
      element: <AboutUsPage />,
      errorElement: <NotFoundPage />,
   },
]);
const App = () => {
   return <RouterProvider router={router} />;
};

export default App;
