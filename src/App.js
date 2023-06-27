import React from 'react';
import Header from './Header';
import styles from './app.module.css';
import Solarsystem from './solarsystem';
import Interstellar from './interstellar';

function AstronomyPresentation() {
  return (
    <>
    <div className={styles.div1} id="start">
      <Header />
      <hr></hr>
      <h1 className={styles.h1}>Astronomy as a Science</h1>
      <br></br>
      <h2 className={styles.h2}>The awe-inspiring science that unravels the mysteries of the cosmos. With its eyes fixed on the heavens,</h2>
      <h2 className={styles.h2}>astronomy examines celestial objects and their intricate dance across the vast expanse of space. It plays a pivotal role in our quest to comprehend the universe's origins, compositions, and behaviors.</h2>
      <h2 className={styles.h2}>Through careful observation and analysis of light and other forms of radiation, astronomers decipher the secrets held by stars, planets, galaxies, and the universe itself. </h2>
      <h2 className={styles.h2}>By studying these cosmic phenomena, astronomy sheds light on fundamental questions about our place in the cosmos and fuels our insatiable curiosity about the nature of existence.</h2>
      <hr></hr>
      <Solarsystem />
      <hr></hr>
      <Interstellar />
    </div>
    </>
  );
}

export default AstronomyPresentation;
