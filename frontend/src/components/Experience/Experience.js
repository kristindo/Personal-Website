import styles from './Experience.module.css';

function Experience() {
  return (
    <div>
      <div>
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
    </div>
  );
}

export default Experience;
