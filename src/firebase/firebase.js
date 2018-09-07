import * as firebase from 'firebase';
var keys = require("./keys");

let config = {}
if(process.env.NODE_ENV === 'production')
    config = keys.production;
else
    config = keys.development;


firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};