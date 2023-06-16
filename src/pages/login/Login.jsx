import React from 'react';
import styles from './Login.module.css';
import { Navbar } from '../../components/Navbar/Navbar';

function Login() {
  return (
    <>
      <Navbar />
     
      <div className={styles.loginBackground}>
        <div className={styles.loginContent}>
          <div className={styles.loginContainer}>
          {/* <div className={styles.formContainer}> */}
            <form className={styles.loginForm}>
             
              <div className={styles.loginText}>
                <p className={styles.loginTitle}>Log in</p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email address</label>
                <input type='text' name='email' required className={styles.loginInput}/>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <input type='password' name='password' required className={styles.loginInput} />
              </div>
              <div className={styles.loginBtn}>
                <button className={`${styles.login} ${styles.btnStyle}`}>Log in</button>
              </div>
              <div className={styles.reset}>
                <p className={styles.forgotPassword}>Forgot your password?</p>
              </div>
              <div className={styles.reset}>
               or
              </div>

              <div className={styles.googleAuth}>
                <button className={`${styles.googleLogin} ${styles.btnStyle}`}>Sign in with Google</button>
              </div>
              
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Login