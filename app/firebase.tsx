// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FireBase_Api_key ,
    authDomain: "x-clone-424712.firebaseapp.com",
    projectId: "x-clone-424712",
    storageBucket: "x-clone-424712.appspot.com",
    messagingSenderId: "375424742611",
    appId: "1:375424742611:web:099ed4c5bf660569c0d026",
    measurementId: "G-K8WCMVTELP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
