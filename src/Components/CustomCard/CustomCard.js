import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";
import ProfileWrapper from "../ProfileWrapper/ProfileWrapper";
import CustomButton from "../CustomButton/CustomButton";
import Stepper from "../Stepper/Stepper";
import styles from "./customCard.module.scss";

const CustomCard = ({ config }) => {
  return (
    <div className={styles.custom_card_wrapper}>
      <div className={styles.card}>
        <CardHeader />
        <div className={`row ${styles.card_body}`}>
          <div className="col-md-6">
            <ProfileWrapper config={config} />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className={`col-6 ${styles.btn_wrapper}`}>
                <CustomButton icon={<i className="fab fa-cc-paypal"></i>} />
              </div>
              <div className={`col-6 ${styles.btn_wrapper}`}>
                <CustomButton icon={<i className="fab fa-cc-visa"></i>} />
              </div>
              <div className={`col-6 ${styles.btn_wrapper}`}>
                <CustomButton icon={<i className="fab fa-cc-mastercard"></i>} />
              </div>
              <div className={`col-6 ${styles.btn_wrapper}`}>
                <CustomButton icon={<i className="fab fa-apple-pay"></i>} />
              </div>
            </div>
          </div>
          <div className={styles.stepper_wrapper}>
            <Stepper config={config} />
          </div>
        </div>
        <div className={styles.card_footer}>
          <CardFooter config={config} />
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
