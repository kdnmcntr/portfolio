import picture from '../assets/pfp01.jpg';
import styles from '../styles/About.module.css'

const About = () => {
    return(<>
    <div className="pt-4">
        <h1 className="h1">About me</h1>
    </div>
    <br/>
    <div className={styles.container}>
        <div className="p-3">
            <img  className={styles.pfp} src={picture}/>
        </div>
        <div className="p-3 fs-4">
            <p>
                I am a computer science student at Weber State University. I like programming and learning about computers in general. 
                I have experience programming in Java, C, C++, C#, Python, Rust, and other programming languages.
                I am also a classically trained pianist with over 21 years of experience. 
                I enjoy learning foreign languages and am fluent in Spanish. I have also learned a small amount of French, German, and Turkish.
            </p>
        </div>
    </div>
    
    </>);
}

export default About;