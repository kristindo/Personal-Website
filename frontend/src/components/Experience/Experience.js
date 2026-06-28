import styles from './Experience.module.css';

function Experience() {
  return (
    <div>
      <div>
        <div className={styles.job}>
          <div className={styles.company}>
            <p className = {styles.name}>EY Graduate - </p>{' '}
            <p className={styles.role}> hrt consultant </p>
          </div>
          <div className={styles.date}>mar 2026</div>
        </div>
        <div className={styles.tools_container}>
          {' '}
          hr technologies 
        </div>
      </div>
      <div className={styles.job}>
          <div className={styles.company}>
            <p className = {styles.name}>Interactive Student Satisfaction Survey - </p>{' '}
            <p className={styles.role}> software developer </p>
          </div>
          <div className={styles.date}>mar 2024</div>
        </div>
        <div className={styles.tools_container}>
          {' '}
          cakephp, mysql, svg, css, html
        </div>
    </div>
  );
}

export default Experience;
