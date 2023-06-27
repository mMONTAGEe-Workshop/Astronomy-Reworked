import React from 'react'
import styles from './stellar.module.css'
import 'bootstrap/dist/css/bootstrap.css';

function Stellar() {
    return(
        <>
        <div className={styles.mainseq} class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h3 className={styles.h3}>Main Sequence Stars</h3>
                    <p className={styles.p}>Main sequence stars are the most common type of stars in the universe. They range in size from small, cool, and dim red dwarfs to large, hot, and luminous blue giants. Main sequence stars, including our Sun, generate energy through nuclear fusion at their cores, where hydrogen atoms fuse to form helium. Their lifespan and characteristics depend on their mass, with higher-mass stars having shorter lifespans and brighter appearances.</p>
                </div>
            </div>
        </div>
        <div className={styles.redgiant} class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h3 className={styles.h3}>Red Giant</h3>
                    <p className={styles.p}>Red giants are evolved stars that have exhausted the hydrogen fuel in their cores. As a result, they expand and cool, becoming larger and redder in appearance. Red giants can be significantly larger than main sequence stars, and they play a crucial role in the production and distribution of heavy elements through processes like stellar nucleosynthesis. Eventually, red giants shed their outer layers, forming beautiful planetary nebulae.</p>
                </div>
            </div>
        </div>
        <div className={styles.whitedw} class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h3 className={styles.h3}>White Dwarf</h3>
                    <p className={styles.p}>White dwarfs are the remnants of low to medium-mass stars that have exhausted their nuclear fuel. These incredibly dense and hot stellar remnants are about the size of Earth but contain a mass comparable to that of the Sun. White dwarfs gradually cool over billions of years and are no longer capable of nuclear fusion. Their eventual fate is to fade into black dwarfs, although none have yet been observed.</p>
                </div>
            </div>
        </div>
        <div className={styles.neutronst} class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h3 className={styles.h3}>Neutron, Magnetar and Pulsar Stars</h3>
                    <p className={styles.p}>Neutron stars are the collapsed cores of massive stars that underwent a supernova explosion. They are incredibly dense, with a mass greater than that of the Sun packed into a sphere about the size of a city. Neutron stars exhibit extreme magnetic fields and often spin rapidly, emitting beams of radiation that can be observed as pulsars. They are important objects for studying extreme physics and gravitational interactions.</p>
                    <p className={styles.p}>Magnetars are a rare type of neutron star known for their exceptionally strong magnetic fields. These magnetic fields are among the most powerful in the known universe, billions of times stronger than those of typical neutron stars.</p>
                    <p className={styles.p}>Pulsars are highly magnetized, rotating neutron stars that emit beams of electromagnetic radiation. As the star rotates, these beams sweep across space like cosmic lighthouses, producing regular pulses of radiation that can be detected from Earth.</p>
                </div>
            </div>
        </div>
        <div className={styles.blackhole} class="container">
            <div class="row">
                <div class="col-sm-4">
                    <h3 className={styles.h3}>Black Hole</h3>
                    <p className={styles.p}>Black holes are regions of spacetime with such intense gravitational forces that nothing, not even light, can escape their grasp. They form from the remnants of massive stars that have undergone a supernova explosion, leaving behind an incredibly dense singularity. Surrounding the singularity is an event horizon, the point of no return. Black holes play a fundamental role in our understanding of general relativity and the nature of spacetime.</p>
                    <h3 className={styles.h3}>Quasar</h3>
                    <p className={styles.p}>short for quasi-stellar objects, are incredibly luminous and distant celestial objects. Powered by supermassive black holes at the centers of galaxies, they emit intense energy across the electromagnetic spectrum. Quasars provide valuable insights into the early universe, black hole growth, and galaxy evolution. Their study helps us understand the dynamics of matter accretion and the formation of cosmic structures.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Stellar;