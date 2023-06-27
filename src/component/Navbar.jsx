import React from 'react';

//style
import styles from "./Navbar.module.css";
const Navbar = ({LogOutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h2 className={styles.logoTxt}>Teras</h2>
            </div>
            <div className={styles.logOutBtn} onClick={LogOutHandler}>
                Log out
            </div>
        </div>
    );
};

export default Navbar;