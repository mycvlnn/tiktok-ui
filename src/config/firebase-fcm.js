// Cấu hình những gì liên quan đến cloud messasing của firebase phục vụ cho việc push notify
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export const vapidKey = 'BJOoaPqZEdb4Jr5DyaRJx668JHSmYglyRDZ9HR3r8-z_8SbpxsUKZmvakx8O40jiV3PDXaVds4ybq4P2ONsDXXI';

const configFirebase = {
    apiKey: 'AIzaSyChC7f5Ipr-paHNYc5UymgUQprOLaU3_uQ',
    authDomain: 'notification-demo-9e464.firebaseapp.com',
    projectId: 'notification-demo-9e464',
    storageBucket: 'notification-demo-9e464.appspot.com',
    messagingSenderId: '1020458167385',
    appId: '1:1020458167385:web:c7859ececab562a30f5548',
    measurementId: 'G-2BW5W3V4LX',
};

initializeApp(configFirebase);

// Xử lý trong trường hợp không support => trả về null
const messagingHandler = () => {
    try {
        return getMessaging();
    } catch {
        return null;
    }
};

const messaging = messagingHandler();

export const requestTokenMessaging = () => {
    return getToken(messaging, { vapidKey })
        .then((currentToken) => {
            if (currentToken) {
                console.log('Registration token: ', currentToken);
                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log('payload', payload);
            resolve(payload);
        });
    });
};

export function requestNotification() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            alert('Notification permission rejected.');
        }
    });
}
