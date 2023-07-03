import React from 'react';
import Sections from './sections';
import styles from './solarsystem.module.css';

function Solarsystem() {
  return (
    <div id="start">
      <h1 className={styles.h1}>Let's start from Solar System!.</h1>
      <h2 className={styles.h2}>a captivating realm that extends far beyond our planet's boundaries. Picture yourself embarking on a cosmic journey, surrounded by celestial wonders and enigmatic entities. Today, we delve into the mysteries of our cosmic neighborhood, where planets, moons, asteroids, and comets intertwine in an intricate dance. Join me as we unravel the secrets of the Solar System and uncover its awe-inspiring beauty!</h2>
      <Sections />
    </div>
  );
}

export default Solarsystem;
