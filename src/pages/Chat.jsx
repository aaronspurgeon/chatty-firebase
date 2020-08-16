import React, { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { db } from '../services/firebase';

export default function Chat() {
    const [user, setUser] = useState(auth().currentUser)
    const [chatData, setChatData] = useState({
        chats: [],
        content: '',
        readError: null,
        writeError: null
    })

    useEffect(() => {
        setChatData({ readError: null });
        db.ref('chats').on('value', snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
                chats.push(snap.val())
            })
            setChatData({ chats })
        })
    }, [])

    console.log(chatData)


    return (
        <div>
            <h1>idk if it worked?</h1>
        </div>
    )
}
