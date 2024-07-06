
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth,googleAuthProvider } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcfOW2tzVD1IOjeb3ntRLfot3LiL3i7Uk",
    authDomain: "fir-auth-7d90e.firebaseapp.com",
    projectId: "fir-auth-7d90e",
    storageBucket: "fir-auth-7d90e.appspot.com",
    messagingSenderId: "927573442518",
    appId: "1:927573442518:web:e4c054532caa6261f26e77"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'

  const provider = new GoogleAuthProvider();
const googlelogin = documentById("google-login-btn"); 
googlelogin.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
