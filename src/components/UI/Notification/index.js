import { onMessageListener, requestNotification, requestTokenMessaging } from '@/config/firebase-fcm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Notification() {
    const [notification, setNotification] = useState({ title: '', body: '' });
    const notify = () => toast(<ToastDisplay />);

    function ToastDisplay() {
        return (
            <div>
                <p>
                    <b>{notification?.title}</b>
                </p>
                <p>{notification?.body}</p>
            </div>
        );
    }

    useEffect(() => {
        requestNotification();
        requestTokenMessaging();
        onMessageListener()
            .then((payload) => {
                console.log({ payload });
                setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
            })
            .catch((err) => console.log('failed: ', err));
    }, []);

    useEffect(() => {
        if (notification?.title) {
            notify();
        }
    }, [notification]);

    return <Toaster position="top-right" />;
}

export default Notification;
