import React from "react";
import styles from "./customButton.module.scss";

const CustomButton = ({ icon }) => {
  return (
    <button type="button" class={`btn ${styles.custom_btn}`}>
      {icon}
    </button>
  );
};

export default CustomButton;
