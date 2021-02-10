import React from "react";

import styles from "./Header.module.css";

const Header = (props) => {
  return <div className={styles.container}>
      <h1 className={styles.heading}>Farmer Life's Matter</h1>
  </div>;
};

export default Header;
