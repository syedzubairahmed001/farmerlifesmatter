import { StylesProvider } from "@material-ui/core";
import React from "react";

import styles from './Links.module.css';

const Links = (props) => {
  return (
    <div className={styles.container}>
      <h3>Support the movement:</h3>
      <ul className={styles.linksList}>
          <li>
              <a href="https://www.change.org/p/united-nations-we-want-uk-government-and-all-un-bodies-to-see-what-s-happening-in-india-with-punjab" target="_blank">
                  Sign this petition - 1
              </a>
          </li>
          <li>
              <a href="https://www.change.org/p/justice-for-farmers-of-india" target="_blank">
                  Sign this petition - 2
              </a>
          </li>
          <li>
              <a href="https://ctt.ac/mc71E" target="_blank">
                  Tweet with #FarmersProtest
              </a>
          </li>
      </ul>
    </div>
  );
};

export default Links;
