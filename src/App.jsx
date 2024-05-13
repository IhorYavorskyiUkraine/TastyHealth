import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage, {
   KcalCalcPage,
   DietsPage,
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
      element: <KcalCalcPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: "/diets",
      element: <DietsPage />,
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
