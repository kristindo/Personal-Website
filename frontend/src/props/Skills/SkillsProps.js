
import styles from './SkillsProps.module.css';

function SkillsProps({skill}) {
  return (
    <div className = {styles.container}>
      <p className = {styles.skills }>{skill}

      </p>
    
    </div>
  );
}

export default SkillsProps;