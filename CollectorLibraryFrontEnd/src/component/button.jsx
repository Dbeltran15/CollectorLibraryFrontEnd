import React from "react";
import styles from "./button.modules.css";

const DiferentButton = () => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {text}
        </button>
    );
};

export default DiferentButton;