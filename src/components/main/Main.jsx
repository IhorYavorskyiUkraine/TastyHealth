import { ErrorBoundary } from "react-error-boundary";

import Header from "../header/Header";
import Hero from "./hero/Hero";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

const Main = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <div className="container">
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
            </div>
         </main>
      </div>
   );
};

export default Main;
