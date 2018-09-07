exports.development = {
    apiKey: "AIzaSyDXGacTNyG9idn0_vXiY2b8GHaB9zIw5bM",
    authDomain: "personalplannerdev.firebaseapp.com",
    databaseURL: "https://personalplannerdev.firebaseio.com",
    projectId: "personalplannerdev",
    storageBucket: "personalplannerdev.appspot.com",
    messagingSenderId: "1040336045050"
};

exports.production = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};