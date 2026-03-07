import picture from '../assets/pfp01.jpg';
import styles from '../styles/About.module.css'

const About = () => {
    return(<>
    <div className="pt-4">
        <h1 className="h1">About me</h1>
    </div>
    <div>
        <img  className={styles.pfp} src={picture}/>
    </div>
    </>);
}

export default About;