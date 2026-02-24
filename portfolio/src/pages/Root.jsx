import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import styles from "../styles/Root.module.css";

const RootLayout = () => {
    return(<>
        <MainNavigation/>
        <main className={styles.main}>
            <Outlet/>
        </main>
    </>);
}

export default RootLayout;