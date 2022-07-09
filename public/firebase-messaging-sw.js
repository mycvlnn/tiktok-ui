/* eslint-disable no-undef */

import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
// Xử lý những gì liên quan đến service worker

initializeApp({
    apiKey: 'AIzaSyChC7f5Ipr-paHNYc5UymgUQprOLaU3_uQ',
    authDomain: 'notification-demo-9e464.firebaseapp.com',
    projectId: 'notification-demo-9e464',
    storageBucket: 'notification-demo-9e464.appspot.com',
    messagingSenderId: '1020458167385',
    appId: '1:1020458167385:web:c7859ececab562a30f5548',
    measurementId: 'G-2BW5W3V4LX',
});

const messaging = getMessaging();

onBackgroundMessage(messaging, function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Hello F8';
    const notificationOptions = {
        body: 'My name Chris. I am from F8',
        icon: 'https://picsum.photos/100',
    };

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle, notificationOptions);
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('notificationclick', function (event) {
        console.log('On notification click: ', event.notification.tag);
        event.notification.close();

        // This looks to see if the current is already open and
        // focuses if it is
        event.waitUntil(
            clients
                .matchAll({
                    type: 'window',
                })
                .then(function (clientList) {
                    for (const client of clientList) {
                        if (client.url === '/' && 'focus' in client) return client.focus();
                    }
                    if (clients.openWindow) return clients.openWindow('/');
                }),
        );
    });
});
