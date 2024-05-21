import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage, {
   KcalCalcPage,
   DietsPage,
   AboutUsPage,
   NotFoundPage,
   DietsSinglePage,
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
      element: <KcalCalcPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/diets",
      element: <DietsPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/diets/:id",
      element: <DietsSinglePage />,
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
