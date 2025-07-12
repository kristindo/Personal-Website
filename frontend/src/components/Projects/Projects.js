
import styles from './Projects.module.css';

function Projects({project, live, git}) {
  return (
    <div>
    
      <div>
        <div className = {styles.name}>
          <p className = {styles.project}>{project}</p>
          <a href={live}><p className = {styles.live}>live</p></a>
          <a href={git}><p className = {styles.git}>git</p></a>
        </div>
        <div className = {styles.tools}>
          react, css, javascript, html 
        </div>
      </div>
    </div>
  );
}

export default Projects;