import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import styles from "../styles/Root.module.css";

const RootLayout = () => {
    return(<>
        <MainNavigation/>
        <main className={styles.main}>
            <Outlet/>
        </main>
        <Footer/>
    </>);
}

export default RootLayout;