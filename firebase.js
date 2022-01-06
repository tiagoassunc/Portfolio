import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import firebaseui from "firebase/firebaseui";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBrw4ZaFWV_BmeAZBICseAE8jYBu60MC9c",
  authDomain: "portfolio-1eb88.firebaseapp.com",
  projectId: "portfolio-1eb88",
  storageBucket: "portfolio-1eb88.appspot.com",
  messagingSenderId: "319199048194",
  appId: "1:319199048194:web:33dae126e01c89c4de2d1b",
  measurementId: "G-76ZLQDEDSS",
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
// export const uiAuth = new firebaseui.auth.AuthUI(auth);

/* uiAuth.start("#firebaseui-auth-container", {
  signInOptions: [auth.EmailAuthProvider.PROVIDER_ID],
  // Other config options...
}); */

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("no user");
  }
});
