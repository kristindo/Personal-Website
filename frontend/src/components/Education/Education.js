
import styles from './Education.module.css';

/** Education Component for the main page;
 *  - Includes props for logo, university, degree, date so that education can be added
 *  without having to create new divs.
 */
function Education({ logo, university, degree, date, children }) {

  
  return (
    <div className = {styles.toggle}>
      <div className={styles.education}>
        <div className={styles.degree}>
          
          <img className={styles.logo} src={logo} alt="Logo" />
          <div>
            <p className={styles.university}>{university}</p>
            <p>{degree}</p>
          </div>

          <p className={styles.date}>{date}</p>
        </div>

      </div>
    

      </div>


  );
}

export default Education;


