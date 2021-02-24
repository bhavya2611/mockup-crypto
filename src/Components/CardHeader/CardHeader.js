import React from 'react';
import ToggleButton from '../ToogleButton/ToggleButton';
import styles from './cardHeader.module.scss';

const CardHeader = () => {

    const [hideInfo, setHideInfo] = React.useState(false);

    return (
        <div className={styles.card_header}>
            <span className={styles.title}>PASSENGER INFO</span>
            <ToggleButton value={hideInfo} setValue={setHideInfo} label="Hide information" />
        </div>
    )
}

export default CardHeader;
