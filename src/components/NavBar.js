import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import './NavBar.css';

const NavBar = () => {
    const { logout } = useLogout()

    return (
        <nav className={'navbar'}>
            <ul>
                <li className={'title'}>myMoney</li>

                <li><Link to="/log-in">Login</Link></li>
                <li><Link to="/sign-up">Signup</Link></li>

                <li>
                    <button className="btn" onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
