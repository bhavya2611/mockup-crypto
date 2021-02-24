import React from 'react';
import styles from './stepper.module.scss';

const Stepper = ({ config }) => {
    return (
        <div className={styles.stepper}>
            <div className={`${styles.tile}`}>
                <i className={`fas fa-check ${styles.check}`}></i>
                <span className={styles.value}>{config.address_1.line1}</span>
                <span className={styles.label}>{config.address_1.line2}</span>
            </div>
            <div className={styles.divider}></div>
            <div className={`${styles.tile}`}>
                <i class={`fas fa-map-marker-alt ${styles.marker}`}></i>
                <span className={styles.value}>{config.address_2.line1}</span>
                <span className={styles.label}>{config.address_2.line2}</span>
            </div>
        </div>
    )
}

export default Stepper;
