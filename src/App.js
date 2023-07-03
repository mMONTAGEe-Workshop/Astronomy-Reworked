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
      <hr></hr>
      <h1 className={styles.h1}>Exoplanet Habitability: Exploring the Goldilocks Zone and Conditions for Life</h1>
      <div className={styles.divone}>
      <h2 className={styles.h2}>1.1 Overview of Exoplanet Habitability:</h2>
      <p className={styles.p}>The discovery of thousands of exoplanets beyond our Solar System has sparked a profound curiosity about the possibility of life existing elsewhere in the universe. The concept of exoplanet habitability lies at the heart of this exploration, as it seeks to identify planets that could potentially support life as we know it. By studying the conditions necessary for habitability, scientists aim to unravel the mysteries surrounding the existence of extraterrestrial life forms and expand our understanding of the diversity of planetary systems.</p>
      <h2 className={styles.h2}>1.2 Definition of the Goldilocks Zone:</h2>
      <p className={styles.p}>Central to the discussion of exoplanet habitability is the concept of the Goldilocks Zone, also known as the habitable zone. The Goldilocks Zone refers to the region around a star where conditions are just right for the existence of liquid water on the surface of a planet. It is a narrow range of distances from a star where a planet is neither too close, resulting in extreme heat, nor too far, leading to extreme cold. The presence of liquid water is considered a crucial prerequisite for the emergence and sustenance of life as we know it.</p>
      <h2 className={styles.h2}>1.3 Significance of the Goldilocks Zone:</h2>
      <p className={styles.p}>The identification of exoplanets within the Goldilocks Zone is significant for several reasons. First and foremost, liquid water is regarded as a fundamental ingredient for life on Earth, serving as a solvent and facilitating biochemical reactions necessary for living organisms. Therefore, planets residing in the habitable zone hold promise for the potential existence of Earth-like conditions conducive to life.</p>
      <h2 className={styles.h2}>1.4 Motivation for the Search for Habitable Exoplanets:</h2>
      <p className={styles.p}>The search for habitable exoplanets arises from our innate curiosity about the possibility of life beyond our planet. It is fueled by the desire to understand whether life is a rare occurrence unique to Earth or a widespread phenomenon in the cosmos. By investigating exoplanet habitability, scientists seek to uncover the conditions necessary for life and gain insights into the range of environments that can support the emergence and evolution of living organisms.</p>
      </div>
      <div className={styles.divtwo}>
      <h2 className={styles.h2}>2.2 Influence of Planetary Characteristics on Habitability:</h2>
      <p className={styles.p}>The habitability of an exoplanet is not solely determined by its location within the Goldilocks Zone; rather, a combination of planetary characteristics plays a crucial role in determining its potential to support life. Here, we explore the influence of various planetary factors on habitability:</p>
      <li className={styles.li}>Size and Mass:
        <p className={styles.p}>The size and mass of a planet are essential factors in determining its habitability. Larger planets with higher mass can retain a thicker atmosphere, which helps regulate temperature and protect against harmful radiation. Additionally, a planet's size affects its gravitational pull, which influences its ability to retain an atmosphere and potentially sustain liquid water on its surface.</p>
      </li>
      <li className={styles.li}>Atmosphere Composition:
        <p className={styles.p}>The composition of an exoplanet's atmosphere is crucial for habitability. The presence of certain gases, such as carbon dioxide, methane, and water vapor, can contribute to a greenhouse effect, trapping heat and maintaining a stable temperature range. However, an excessive greenhouse effect can lead to extreme heat, while an insufficient one can result in extreme cold. The balance of greenhouse gases is vital for maintaining a suitable climate for life.</p>
      </li>
      <li className={styles.li}>Surface Conditions:
        <p className={styles.p}>The conditions on a planet's surface, including temperature, pressure, and the presence of liquid water, greatly impact habitability. A temperature range that allows for the existence of liquid water is essential, as water is a universal solvent and a vital component for life as we know it. The pressure at the surface affects the boiling and freezing points of water, influencing its availability in liquid form.</p>
      </li>
      </div>
    </div>
    </>
  );
}

export default AstronomyPresentation;
