import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

import styles from './Login.module.css';

//icon
import google from "../assets/google-logo.png";

const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginCard}>
                <h2>Welcome to Teras</h2>
            
                <div 
                className={styles.button} 
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={ google } alt='google'/> sign in with google
                </div>
            </div>
        </div>
    );
};

export default Login;