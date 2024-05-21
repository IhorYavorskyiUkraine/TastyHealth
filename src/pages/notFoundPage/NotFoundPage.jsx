import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
   return (
      <div className="errorPage">
         <div className="container">
            <div className="errorPage__content text">
               <p className="errorPage__text text">Sorry!</p>
               <h1 className="errorPage__title text">Page not found</h1>
               <Link to="/" className="errorPage__back">
                  Home
               </Link>
            </div>
         </div>
      </div>
   );
};
export default NotFoundPage;
