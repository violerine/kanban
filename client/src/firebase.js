import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBcTjswy0R5VFOOp0Gr7frUPVE-N70oMDg",
    authDomain: "kanban-69084.firebaseapp.com",
    databaseURL: "https://kanban-69084.firebaseio.com",
    projectId: "kanban-69084",
    storageBucket: "kanban-69084.appspot.com",
    messagingSenderId: "1015358827644"
  };
  firebase.initializeApp(config);

export const Database = firebase.database()
