import f from 'firebase';

var config = {
  apiKey: "AIzaSyBxoDCnKyBuq242mCrVvss12_wHAFP71_s",
  authDomain: "parcel-firebase.firebaseapp.com",
  databaseURL: "https://parcel-firebase.firebaseio.com",
  projectId: "parcel-firebase",
  storageBucket: "parcel-firebase.appspot.com",
  messagingSenderId: "180806040358"
};
f.initializeApp(config);

export default f;

export const database = f.database();
export const auth = f.auth();
export const emailAuth = f.auth.EmailAuthProvider();

console.log(f);
