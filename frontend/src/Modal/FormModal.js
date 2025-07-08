import { X } from 'lucide-react';
import { useState } from 'react';
import styles from './FormModal.module.css';


function FormModal({ onClose }) {

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Match this duration with the CSS animation duration
  }
  return (
    <div className={styles.container}>
     <div
        className={`${styles.modalcontainer} ${isClosing ? styles.closing : ''}`}
      >
        <div>
          <button className={styles.close} onClick={handleClose}>
            <X />
          </button>
          <div>
            <h3 className = {styles.title}>contact me !</h3>
            <form>
              <input type="email" placeholder="enter your email" required />
              <input type="text" placeholder="enter your message" required />
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
