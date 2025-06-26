import react from 'react';
import styles from './Education.module.css';

/** Education Component for the main page; 
 *  - Includes props for logo, university, degree, date so that education can be added
 *  without having to create new divs. 
 */
function Education({logo, university, degree, date}) {
  return (
    <div>
      <div className={styles.education}>
        <h3>Education</h3>
        <div className={styles.degree}>
          <img className = {styles.logo} src={logo} alt="Logo"/>
          <div>
            <p className = {styles.university}>{university}</p>
            <p>{degree}</p>
          </div>
          
        <p className={styles.date}>{date}</p>
        </div>

      </div>
    </div>
  );
}

export default Education;
