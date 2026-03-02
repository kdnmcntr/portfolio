import { NavLink } from "react-router-dom";
import styles from "../styles/MainNavigation.module.css"
const MainNavigation = () => {
    return(<>
        <div className={styles.navbar}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/repetoire">Repetoire</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    </>);
}

export default MainNavigation;