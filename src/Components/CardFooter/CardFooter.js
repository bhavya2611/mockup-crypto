import React from 'react';
import styles from './cardFooter.module.scss';

const CardFooter = ({ config }) => {
    return (
        <div className={styles.card_footer}>
            <div className="row">
                {config.metrics.map((pair, index) => (
                    <div key={index} className={`col-3 ${styles.tile}`}>
                        <span className={styles.value}>{pair.value}</span>
                        <span className={styles.label}>{pair.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardFooter;
