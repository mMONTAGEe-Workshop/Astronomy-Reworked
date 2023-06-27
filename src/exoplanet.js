import React from 'react';
import styles from './exoplanet.module.css';
import 'bootstrap/dist/css/bootstrap.css';


function Exo() {
    return(
        <>
        <div>
            <h1>Exoplanet</h1>
            <p className={styles.p}>An exoplanet, also known as an extrasolar planet, refers to a planet that orbits a star outside our Solar System. These distant celestial bodies come in various sizes, compositions, and orbits, and their discovery has expanded our understanding of planetary systems beyond our own. Exoplanets can be rocky, like Earth, or gaseous, like Jupiter, and they offer valuable insights into the formation and diversity of planets throughout the universe. Detecting and studying exoplanets is a significant area of research as scientists explore the possibilities of habitable environments and the potential for finding signs of extraterrestrial life.</p>
        </div>
        <div className={styles.header}>
            <section>
            </section>
        </div>
        <div>
            <p className={styles.p}>The first exoplanets were discovered in the 1990s and since then we’ve identified thousands using a variety of detection methods. It’s pretty rare for astronomers to see an exoplanet through their telescopes the way you might see Saturn through a telescope from Earth. That’s called direct imaging, and only a handful of exoplanets have been found this way (and these tend to be young gas giant planets orbiting very far from their stars).</p>
            <p className={styles.p}>Most exoplanets are found through indirect methods: measuring the dimming of a star that happens to have a planet pass in front of it, called the transit method, or monitoring the spectrum of a star for the tell-tale signs of a planet pulling on its star and causing its light to subtly Doppler shift. Space telescopes have found thousands of planets by observing “transits,” the slight dimming of light from a star when its tiny planet passes between it and our telescopes. Other detection methods include gravitational lensing, the so-called “wobble method.”</p>
            <p className={styles.p}>Webpage below is NASA's archive of exoplanets, updated in real time with each new entry</p>
        </div>
        <hr></hr>
        <iframe src="https://exoplanets.nasa.gov/discovery/discoveries-dashboard/" scrolling="no" position="absolute" top="1000px" left="10px" width="1500px" height="1280px" border=" solid 3px" color="#b483eb" border-radius="8px" box-shadow="0 0 2px  #b483eb , 0 0 2px   #b483eb, 0 0 4px  #b483eb"></iframe>
        <hr></hr>
        <div>
            <h1>Exoplanet classification</h1>
            <p className={styles.p}>Exoplanets can be classified into various categories based on their characteristics, including hot Jupiters, super-Earths, mini-Neptunes, Earth-like planets, Rogue planets, hot Neptunes, and terrestrial planets.</p>
        </div>
<br></br>
<hr></hr>
    <div className={styles.hjupiter} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Hot Jupiter</h3>
        <p className={styles.p2}>Hot Jupiters are a type of exoplanet characterized by their large size, similar to that of Jupiter, and their close proximity to their host stars. These gas giants have short orbital periods, often completing orbits in just a few days or weeks. Due to their proximity to their stars, they experience extreme temperatures, making them hot and inhospitable to life as we know it. Hot Jupiters have provided valuable insights into planetary migration and the dynamics of planetary systems.</p>
    </div>
  </div>
</div>
<div className={styles.superearth} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Super Earth</h3>
      <p className={styles.p2}>Super-Earths are rocky exoplanets that have a larger mass and size than our Earth but are smaller than gas giants like Neptune. They can have a wide range of compositions, including rocky, icy, or a combination of both. Super-Earths offer intriguing possibilities for diverse planetary environments, and scientists study them to better understand the formation and structure of terrestrial planets in different conditions.</p>
    </div>
  </div>
</div>
<div className={styles.minineptune} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Mini Neptune</h3>
      <p className={styles.p2}>Mini-Neptunes are exoplanets that possess a composition similar to Neptune but are smaller in size. They are often characterized by a significant amount of gas or volatile compounds in their atmospheres. Mini-Neptunes provide valuable insights into the diversity of planetary compositions and the transition between rocky and gaseous worlds. Understanding their atmospheric properties helps scientists unravel the complex interactions between planets and their host stars.</p>
      </div>
  </div>
</div>
<div className={styles.elw} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Earth-Like Planets</h3>
      <p className={styles.p2}>Earth-like planets are exoplanets that share similar characteristics to our own planet Earth. They have a rocky composition and may exist within the habitable zone of their host star, where conditions could allow the presence of liquid water on their surfaces. Earth-like planets are of immense interest in the search for extraterrestrial life, as their potential habitability raises the possibility of finding environments conducive to supporting life as we know it.</p>
    </div>
  </div>
</div>
<div className={styles.rogue} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Rogue Planets</h3>
      <p className={styles.p2}>Rogue planets, also known as free-floating planets, are intriguing celestial objects that wander through space without being gravitationally bound to any star. These solitary wanderers exist in a state of independence, untethered by the gravitational pull of a parent star. Rogue planets can be rocky or gas giants, and their study contributes to our understanding of planetary formation processes and the potential for habitable environments outside traditional star-bound systems.</p>
    </div>
  </div>
</div>
<div className={styles.hneptune} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Hot Neptunes</h3>
      <p className={styles.p2}>Hot Neptunes are similar to hot Jupiters but have a composition more akin to Neptune, with a significant amount of gas and volatile compounds in their atmospheres. They share the characteristic of being close to their host stars, resulting in high temperatures and inhospitable conditions. Studying hot Neptunes helps scientists explore the diversity of exoplanet atmospheres and the impact of stellar proximity on planetary </p>
    </div>
  </div>
</div>
<div className={styles.terra} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>Terrestrial Planets</h3>
      <p className={styles.p2}>Terrestrial planets are rocky exoplanets that share similar characteristics to the inner planets of our own Solar System, such as Mercury, Venus, Earth, and Mars. They have solid surfaces and are composed predominantly of silicate rocks and metals. Terrestrial planets offer insights into the potential for rocky, Earth-like worlds elsewhere in the universe and serve as targets of interest in the search for life beyond our Solar System.</p>
    </div>
  </div>
</div>
<div className={styles.exomoon} class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3 className={styles.h3}>ExoMoon</h3>
      <p className={styles.p}>Exomoons are natural satellites that orbit planets beyond our Solar System. They come in various sizes and compositions, and their presence provides insights into the dynamics and evolution of planetary systems. Detecting exomoons poses challenges, but ongoing research aims to improve detection methods. The study of exomoons expands our understanding of diverse planetary systems and the potential for habitable environments beyond Earth.</p>
    </div>
  </div>
</div>
        </>
    )
}

export default Exo;