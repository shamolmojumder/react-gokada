import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footermain}>
          <div className="footer-left">
              <p>Copyright © 2015-2021 • Shamol Mojumder Dipu  •</p>
          </div>
          <div className="footer-right">
          <p> All Rights Reserved</p>
          </div>
        </div>
    );
};

export default Footer;