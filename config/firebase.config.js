import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyBpQItVMqDXRfJsceSXkirOOIWXyBjZyq0",
    authDomain: "chat-application-61891.firebaseapp.com",
    projectId: "chat-application-61891",
    storageBucket: "chat-application-61891.appspot.com",
    messagingSenderId: "662536054878",
    appId: "1:662536054878:web:d51affd821da0e711c2ccf"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB }