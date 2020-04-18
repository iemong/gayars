import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyDS6WXNbiA6I6TLy5NOIxlSCAy7GMgQqlI',
    authDomain: 'gayars-2e715.firebaseapp.com',
    databaseURL: 'https://gayars-2e715.firebaseio.com',
    projectId: 'gayars-2e715',
    storageBucket: 'gayars-2e715.appspot.com',
    messagingSenderId: '712967542615',
    appId: '1:712967542615:web:08c3665ef3f455a9a95012',
    measurementId: 'G-G4D3YX96JG',
}

// Initialize Firebase
export const project = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
export const database = firebase.database()
