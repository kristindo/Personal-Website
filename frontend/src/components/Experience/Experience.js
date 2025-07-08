import react from 'react';
import styles from './Experience.module.css';

function Experience({ company, project, date }) {
  return (
    <div>
      <div>
        <div className={styles.company}>Interactive Student Satisfaction Survey</div>
        <div><p>Tools: CakePHP, mySQL, SVGs, HTML/CSS</p></div>
        <div>
          <ul>
            <li>collaborated wtih a team to develop a system for bialik college </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
