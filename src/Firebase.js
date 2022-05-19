import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWZ1IiexSS0pHn8Hdoj69Fn2GSfDJyukw",
  authDomain: "hackathon4-cd11c.firebaseapp.com",
  projectId: "hackathon4-cd11c",
  storageBucket: "hackathon4-cd11c.appspot.com",
  messagingSenderId: "724396620510",
  appId: "1:724396620510:web:549428e0ef8ea53cb5604f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
