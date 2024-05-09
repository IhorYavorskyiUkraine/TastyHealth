import { ErrorBoundary } from "react-error-boundary";

import Header from "../header/Header";
import Hero from "./hero/Hero";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import Reviews from "./reviews/Reviews";
import Enjoy from "./enjoy/Enjoy";
import Footer from "../footer/Footer";

const Main = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <Hero />
            <ErrorBoundary
               fallback={
                  <img
                     className="errorBoundary"
                     src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
                  />
               }
            >
               <WhyChooseUs />
            </ErrorBoundary>
            <ErrorBoundary
               fallback={
                  <img
                     className="errorBoundary"
                     src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
                  />
               }
            >
               <Reviews />
            </ErrorBoundary>
            <ErrorBoundary
               fallback={
                  <img
                     className="errorBoundary"
                     src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
                  />
               }
            >
               <Enjoy />
            </ErrorBoundary>
            <Footer />
         </main>
      </div>
   );
};

export default Main;
