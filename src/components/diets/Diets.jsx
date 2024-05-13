import { Link } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import loseImg from "/images/main/enjoy/1.jpg";
import MaintainImg from "/images/main/enjoy/2.jpg";
import GainImg from "/images/main/enjoy/3.jpg";

import "./Diets.scss";

const FoodAndDiet = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <div className="container">
               <section className="diets">
                  <div className="diets__categories category">
                     <div className="category__wrapper">
                        <article className="category-lose">
                           <h2 className="category-lose__title category-title">
                              Lose Weight
                           </h2>
                           <Link
                              className="category-lose__link"
                              to="/diets/lose"
                           >
                              <img
                                 className="category-lose__image category-image"
                                 src={loseImg}
                                 alt="LoseWeightImage"
                              />
                           </Link>
                        </article>
                        <article className="category-maintain">
                           <h2 className="category-maintain__title category-title">
                              Maintain Weight
                           </h2>
                           <Link
                              className="category-maintain__link"
                              to="/diets/maintain"
                           >
                              <img
                                 className="category-maintain__image category-image"
                                 src={MaintainImg}
                                 alt="MaintainWeightImage"
                              />
                           </Link>
                        </article>
                        <article className="category-gain">
                           <h2 className="category-gain__title category-title">
                              Gain Weight
                           </h2>
                           <Link
                              className="category-gain__link"
                              to="/diets/gain"
                           >
                              <img
                                 className="category-gain__image category-image"
                                 src={GainImg}
                                 alt="GainWeightImage"
                              />
                           </Link>
                        </article>
                     </div>
                  </div>
               </section>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default FoodAndDiet;
