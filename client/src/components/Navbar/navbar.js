import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="he">Personal Finance</Link>
            <Link to="/">Home</Link>
            <Link to="/Aboutus">About us</Link>
            <Link to="/Contact">Contact</Link>
            <div className="btn">
                <Link to="/signup">
                    <button className="sign">Sign up</button>
                </Link>

                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
            </div>

        </nav>
    )
}
export default Navbar