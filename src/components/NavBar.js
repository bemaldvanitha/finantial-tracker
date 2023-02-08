import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";
import './NavBar.css';

const NavBar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <nav className={'navbar'}>
            <ul>
                <li className={'title'}>myMoney</li>

                { !user && (
                    <>
                        <li><Link to="/log-in">Login</Link></li>
                        <li><Link to="/sign-up">Signup</Link></li>
                    </>
                )}

                { user && (
                    <>
                        <li>
                            hello , { user.displayName }
                        </li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                ) }
            </ul>
        </nav>
    )
}

export default NavBar;
