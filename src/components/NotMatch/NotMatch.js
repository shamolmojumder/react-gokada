import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotMatch.module.css';

const NotMatch = () => {
    return (
        <div>
            <div className={styles.notmatch} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <h1>404</h1>
                <h4>Page not found</h4>
                <strong> <Link to='/'>Home page</Link> </strong>
            </div>
        </div>
    );
};

export default NotMatch;