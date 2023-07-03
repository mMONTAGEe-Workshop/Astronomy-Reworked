import React from 'react';
import styles from './interstellar.module.css';
import Exo from './exoplanet';
import Stellar from './stellar'

function Interstellar() {
    return(
        <>
        <div id="start">
        <h1 className={styles.h1}>Now, let's jump Interstellar</h1>
        <h2 className={styles.h2}>What is a Interstellar space? Interstellar space is the vast, mostly empty expanse between stars in a galaxy. It is composed of extremely low-density matter, primarily hydrogen gas and dust particles. Interstellar space presents challenges for interstellar travel due to its immense distances. Scientists study interstellar space to understand star formation and the evolution of galaxies. </h2>
        <br></br>
        <h2 className={styles.h2}>Scientists define the beginning of interstellar space as the place where the Sun’s constant flow of material and magnetic field stop affecting its surroundings. This place is called the heliopause.</h2>
        <br></br>
        <h2 className={styles.h2}>Interstellar space is punctuated by other star systems, each with its own collection of planets, moons, asteroids, and comets. These systems, like our own Solar System, harbor a diverse array of celestial objects. From distant binary stars locked in gravitational dances to planetary systems teeming with worlds waiting to be explored, the possibilities for discovery seem boundless.</h2>
        <hr></hr>
        <Exo />
        <br></br>
        <hr></hr>
        <h1 className={styles.h1}>A Journey through Stellar Objects: Exploring the Rich Tapestry of Stars</h1>
        <p className={styles.p}>Classifications of Stellar Objects</p>
        <br></br>
        <Stellar />
        </div>
        </>
    )
}

export default Interstellar;