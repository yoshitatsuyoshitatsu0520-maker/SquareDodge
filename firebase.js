const firebaseConfig = {

    apiKey: "AIzaSyDw6168-z0NDRsx0as69tiinN-XACrh1n0",

    authDomain: "square-dodge-9875e.firebaseapp.com",

    projectId: "square-dodge-9875e",

    storageBucket: "square-dodge-9875e.firebasestorage.app",

    messagingSenderId: "809727267434",

    appId: "1:809727267434:web:fa53d3ed8fa8774f68f013"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// グローバル公開
window.db = db;