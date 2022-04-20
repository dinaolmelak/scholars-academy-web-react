import {initializeApp} from 'firebase/app';


var firebaseConfig = {
  apiKey: "AIzaSyCbBLBmbEeLI33ca58WD3-OYK74xqx84MU",
  authDomain: "scholars-academy-26129.firebaseapp.com",
  projectId: "scholars-academy-26129",
  storageBucket: "scholars-academy-26129.appspot.com",
  messagingSenderId: "590333059770",
  appId: "1:590333059770:web:0a402655c78b382c20d883",
  measurementId: "G-B3R97L73QM"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;