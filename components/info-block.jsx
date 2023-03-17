import styles from './info-block.module.css';

export default function InfoBlock(props) {
  return (
    <div className={styles.container}>      
      {props.title}
      <hr/>

    </div>
  );
}