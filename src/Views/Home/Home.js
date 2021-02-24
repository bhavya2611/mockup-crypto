import React from "react";
import CustomCard from '../../Components/CustomCard/CustomCard';
import { CONFIGS } from "../../Utils/Config";
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      {CONFIGS.map((config, index) => (
        <div key={index} className={styles.card_wrapper}>
          <CustomCard config={config} />
        </div>
      ))}
    </div>
  );
};

export default Home;
