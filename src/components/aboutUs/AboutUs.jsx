import Header from "../header/Header";
import Hero from "./hero/Hero";
import Footer from "../footer/Footer";

const AboutUs = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <Hero />
         </main>
         <Footer />
      </div>
   );
};

export default AboutUs;
