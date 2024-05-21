import { ErrorBoundary } from "react-error-boundary";

import Header from "../header/Header";
import Hero from "./hero/Hero";
import Footer from "../footer/Footer";

const Diets = () => {
   return (
      <div className="wrapper">
         <Header />
         <ErrorBoundary
            fallback={
               <img
                  className="errorBoundary"
                  src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
               />
            }
         >
            <Hero />
         </ErrorBoundary>
         <Footer />
      </div>
   );
};

export default Diets;
