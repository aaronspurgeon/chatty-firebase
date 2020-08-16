import firebase from "firebase";

const config = {
  apiKey: "AIzaSyANvHuaXxldAlYggzflgkHmoZKeGnFqNrM",
  authDomain: "chatty-app-8839c.firebaseapp.com",
  databaseURL: "https://chatty-app-8839c.firebaseio.com",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
