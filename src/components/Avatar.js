import React from "react";
import styles from "../styles/Avatar.module.css";
import icon from "../assets/icon.jpg";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={icon}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;