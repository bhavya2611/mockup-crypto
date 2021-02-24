import React, { useState } from "react";
import CustomInput from '../CustomInput/CustomInput';
import avatar from '../../Assets/avatar.jpg';
import styles from './profileWrapper.module.scss';

const ProfileWrapper = ({ config }) => {

  const [email, setEmail] = useState(config.email);
  const [phone, setPhone] = useState(config.phone);
  const [location, setLocation] = useState(config.location);

  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <div className={styles.info}>
          <span className={styles.name}>{config.name}</span>
          <span className={styles.description}>{config.description}</span>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input_wrapper}>
          <CustomInput
            label="Email"
            placeholder="Email"
            value={email}
            setValue={setEmail} />
        </div>
        <div className={styles.input_wrapper}>
          <CustomInput
            label="Phone"
            placeholder="Phone"
            value={phone}
            setValue={setPhone} />
        </div>
        <div className={styles.input_wrapper}>
          <CustomInput
            label="Location"
            placeholder="Location"
            value={location}
            setValue={setLocation} />
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
