import React from 'react'
import logo from './logo.svg'
import styles from './App.module.css'

const App = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={styles.AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        I love React {process.env.REACT_APP_SECRET_CODE}
      </a>
    </header>
  </div>
)

export default App
