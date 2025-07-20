import { X } from 'lucide-react';
import { useState } from 'react';
import styles from './FormModal.module.css';

function FormModal({ onClose }) {
  const [result, setResult] = useState('');
  const [isClosing, setIsClosing] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'e4ca1635-1f1f-4cfe-8999-498a4b88ce7f');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Email Sent');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); 
  };
  return (
    <div className={`${styles.container} ${isClosing ? styles.closing : ''}`}>
      <div
        className={`${styles.modalcontainer} ${
          isClosing ? styles.closing : ''
        }`}
      >
        <div>
          <button className={styles.close} onClick={handleClose}>
            <X />
          </button>
          <div>
            <h3 className={styles.title}>contact me !</h3>

            <form onSubmit={onSubmit} className={styles.form}>
              <div>
                <label className={styles.email} htmlFor="email">
                  email:
                </label>
                <input
                  className={styles.email_input}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="enter your email"
                  required
                />
              </div>
              <div>
                <label className={styles.message} htmlFor="message">
                  message:
                </label>
                <textarea
                  className={styles.message_input}
                  name="message"
                  id="message"
                  type="text"
                  placeholder="enter your message"
                  required
                />
              </div>

              <button className="button" type="submit">
                {result === 'sending...' ? 'sending...' : 'send'}
              </button>
            </form>
            <div className = {styles.center_text}>
              <p >or</p>
              <p>check out my socials below !</p>
              <div >
                <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kristin-do/"
          target="_blank"
        >
          <img
            className="linked"
            width="44"
            height="44"
            src="linkedin.png"
            alt="linkedin--v1"
          />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.github.com/kristindo/"
          target="_blank"
        >
          <img
            className="git"
            width="44"
            height="44"
            src="git.png"
            alt="linkedin--v1"
          />
        </a>
              </div>
                <div>

        
      </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
