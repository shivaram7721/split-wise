import styles from './SignUp.module.css';
import {FcGoogle} from 'react-icons/fc';
import { useState } from 'react';

function SignUp() {

  const [input, setInput] = useState(0);

  function handleName(e) {
    setInput(e.target.value)
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <div className={styles.logoContainer}>
          {/* logo */}
          <img className={styles.img} src='https://i.pinimg.com/originals/a7/63/5b/a7635b1254e8428b4cdc6f48cee9a459.png' alt='logo'/>
        </div>

        <div className={styles.signupContainer}>
          <p className={styles.introduce}>INTRODUCE YOURSELF</p>
          <span className={styles.nameLabel}>Hi there! My name is</span>
          <input className={styles.inp} type="text" onChange={handleName}/>
          {
            input.length>0 ? (
              <div className={styles.dropInput}>
                <span className={styles.emailLabel}>Here&apos;s my <span style={{fontWeight: "900"}}>email address:</span></span>
                <input className={styles.inpEmail} type="text"/>
                <span className={styles.passwordLabel}>And here&apos;s my <span style={{fontWeight: "900"}}>password:</span></span>
                <input className={styles.inpPassword} type="text"/>

                <p className={styles.robot}><input className={styles.checkbox} type='checkbox'/>I&apos;m not a robot<img className={styles.captcha} src='https://www.drupal.org/files/issues/2022-09-23/recaptcha-project-browser-transparent.png' alt='recaptcha'/></p>
              </div>
            ): null
          }
          <div>
            <button className={styles.signupBtn}>Sign me up!</button><span className={styles.or}>or</span>
            <button className={styles.googleBtn}><span className={styles.googleIcon}><FcGoogle /></span>Sign up with Google</button>
          </div>
          <span className={styles.footText}>By signing up, you accept the Splitwise Terms of Service</span>
        </div>

      </div>
    </div>
  )
}

export default SignUp