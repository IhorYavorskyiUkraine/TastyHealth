import { Link } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
   return (
      <>
         <div className="container">
            <Link to="/" className="back">
               Home
            </Link>
            <div className="error">Page not found</div>
         </div>
      </>
   );
};
export default NotFoundPage;
