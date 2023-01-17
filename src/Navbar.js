import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="greet">
                <Link to = '/'>Bloghub</Link>
                
            </div>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/create">New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;