import projects from '../data/projects.json';
import styles from '../styles/Projects.module.css';

const Projects = () => {
    const cards = projects.map(project => {
        return (<>
        <div className={`col-lg-4 col-md-6 col-sm-12 ${styles.container}`}>
            <div className={styles.card}>
                <div className={styles.card_body}>
                    <h3 className={styles.card_title}>{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                    <a href={project.github}><button className={styles.button}>See github</button></a>
                </div>
            </div>
        </div>
        </>);
    });

    return(<>
    <div className="pt-4">
        <h1 className="h1">Kaden's Projects</h1>
    </div>
    <div className="row pb-4">
        {cards}
    </div>
    
    </>);
}

export default Projects;

//`col-lg-4 col-md-6 col-sm-12`