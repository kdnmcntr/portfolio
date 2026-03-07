import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import styles from "../styles/Root.module.css";

const RootLayout = () => {
    return(<>
        <div className={styles.flex_wrapper}>
            <div>
                <MainNavigation/>
                <main>
                    <div className="container">
                        <Outlet/>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    </>);
}

export default RootLayout;