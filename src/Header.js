import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.text}>
      <h1 className={styles.title}>An Astronomical Introduction: Exploring the Cosmos through Interactive Education</h1>
      <h2 className={styles.h2}>Welcome to our comprehensive website dedicated to the fascinating world of astronomy. Here, you will embark on an enlightening journey into various captivating realms of this scientific discipline, while also leveraging the abundant visual resources provided for enriching your presentations.</h2>
      </div>
    </header>
  );
}

export default Header;
