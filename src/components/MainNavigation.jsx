import { NavLink } from "react-router-dom";
import styles from "../styles/MainNavigation.module.css"
const MainNavigation = () => {
    return(<>
        <div className={styles.navbar}>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <span className="navbar-brand">Kaden's Portfolio</span>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-nav"> 
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
                </div>
            </nav>
        </div>
        
    </>);
}

export default MainNavigation;