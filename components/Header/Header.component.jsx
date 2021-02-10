import React from "react";

import styles from "./Header.module.css";

const Header = (props) => {
  return <div className={styles.container}>
      <h1 className={styles.heading}>Farmer Lives Matter</h1>
  </div>;
};

export default Header;
