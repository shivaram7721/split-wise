import React, { useState } from 'react';
import styles from './Login.module.css';
import { Navbar } from '../../components/Navbar/Navbar';

function Login() {
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });

  const [loginError, setLoginError] = useState('');
  const [isError, setIsError] = useState(false);


  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));

  }

  function submitHandler(e) {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      setLoginError('Whoops! We couldn’t find an account for that email address and password. ')
      setIsError(true);
    } else {
      setLoginError('');
      setIsError(false)
    }
    // setLoginError('')

  }

  return (
    <>
      <Navbar />
      {
        isError && <div className={styles.error}>
          <p className={styles.errorMessage}> {loginError}</p>
        </div>
      }


      <div className={styles.loginBackground}>
        <div className={styles.loginContent}>
          <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={submitHandler}>
              <div className={styles.loginText}>
                <p className={styles.loginTitle}>Log in</p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email address</label>
                <input
                  type="text"
                  name="email"
                  required
                  className={styles.loginInput}
                  value={inputData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={inputData.password}
                  className={styles.loginInput}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.loginBtn}>
                <button className={`${styles.login} ${styles.btnStyle}`}>Log in</button>
              </div>

              <div className={styles.reset}>
                <p className={styles.forgotPassword}>Forgot your password?</p>
              </div>

              <div className={styles.reset}>or</div>

              <div className={styles.googleAuth}>
                <button className={`${styles.googleLogin} ${styles.btnStyle}`}>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
