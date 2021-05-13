import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../redux/actions";

export default function AdminNavigation() {
    const dispatch = useDispatch();

    const Logout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    return (
        <div className="link-container admin">
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link onClick={(e) => Logout(e)}>Logout</Link>
        </div>
    );
}
