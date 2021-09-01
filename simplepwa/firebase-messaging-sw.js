importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC3HOmbMqx6nUu1dFnL1seGnulvHko3kQE",
    authDomain: "simplepwa-a5a3e.firebaseapp.com",
    projectId: "simplepwa-a5a3e",
    storageBucket: "simplepwa-a5a3e.appspot.com",
    messagingSenderId: "1062341546220",
    appId: "1:1062341546220:web:08c517b742d8e6ad3b95c9",
    measurementId: "G-JR8PLMCFQ9"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
messaging.onMessage((payload) => {
    const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
    console.log(`title: ${title}, body ${options.body}`);
});

messaging.onBackgroundMessage(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});