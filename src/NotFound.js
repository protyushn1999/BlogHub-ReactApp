import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>404</h2>
            <p>Sorry, that page cannot be found</p>
            <Link to="/">Go back to the homepage...</Link>

        </div>
    );
}
 
export default NotFound;