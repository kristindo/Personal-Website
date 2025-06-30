
import styles from './Skills.module.css';
import SkillsProps from '../../props/Skills/SkillsProps';

function Skills() {
  return (
    <div className={styles.container}>
      <SkillsProps skill="react" />
      <SkillsProps skill="node" />
      <SkillsProps skill="angular" />
      <SkillsProps skill="java" />
      <SkillsProps skill="javascript" />
      <SkillsProps skill="sql" />
      <SkillsProps skill="python" />
      <SkillsProps skill="vscode" />
        <SkillsProps skill="pycharm" />
      <SkillsProps skill="git" />
    </div>
  );
}

export default Skills;
