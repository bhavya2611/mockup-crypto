import React from "react";
import styles from './toggleButton.module.scss';

const ToggleButton = ({ label, value, setValue }) => {

  const toggleHandler = (event) => {
    setValue(event.target.checked);
  }

  return (
    <div className={styles.toggle_btn_wrapper}>
      <label for="toggleBtn">{label}</label>
      <div className="form-check form-switch" style={{ paddingLeft: "0" }}>
        <input
          onChange={toggleHandler}
          className={`form-check-input ${styles.toggle_btn}`}
          type="checkbox"
          id="toggleBtn"
          checked={value} />
      </div>
    </div>
  );
};

export default ToggleButton;
