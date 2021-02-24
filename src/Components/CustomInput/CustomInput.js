import React from "react";
import styles from './customInput.module.scss';

const CustomInput = ({ label, placeholder, value, setValue }) => {

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className={styles.custom_input_wrapper}>
      <label>{label.toUpperCase()}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={changeHandler} />
    </div>
  );
};

export default CustomInput;
