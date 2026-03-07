import styles from '../styles/Footer.module.css';

const Footer = () => {
    return(<>
        <div className={styles.footer}>
            <div className="m-3 text-center">
                <div className="container">
                <div className="row">
                    <div className="col-4"><a href="https://www.linkedin.com/in/kaden-mcentire-5442b8267/">LinkdIn</a></div>
                    <div className="col-4"><a href="../../public/Kaden_McEntire.pdf">resume</a></div>
                    <div className="col-4">kadenmcentire@mail.weber.edu</div>
                </div>
            </div>
            </div>
            
        </div>        
    </>);
}

export default Footer;