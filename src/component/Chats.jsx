import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Avatar, ChatEngine } from 'react-chat-engine';
import axios from 'axios';
//loading
import loadingGif from '../assets/Spinner-1s-200px.gif';
import styles from './Chats.module.css';

//component
import Navbar from './Navbar';

//context
import { AuthContext } from '../context/AuthContextProvider';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }
        // check user in chat engine
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "61a58b2b-a17d-4c7b-9933-423708271679",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        }) //create acc in chat engine
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "03609c41-32ef-40a0-9039-4d051f50cf74"

                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logOutHandler = async () => {
        await auth.signOut();
        navigate("/"); 
    }

    if(!user || loading) return (
        <div className={styles.loadingContainer}>
            <img src={loadingGif} alt='loading...'/>
        </div>
    );

    return (
        <div>
           <Navbar LogOutHandler={logOutHandler}/>
           <ChatEngine
           height="calc(100vh - 50px)"
           projectID="61a58b2b-a17d-4c7b-9933-423708271679"
           userName={user.email}
           userSecret={user.uid}
           />
        </div>
    );
};

export default Chats;