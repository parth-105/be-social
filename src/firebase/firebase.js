import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB9Nha4kpSuAQaGaw_zUXnkRmsRc-1Tyoo",
	authDomain: "clone-try-b6bc0.firebaseapp.com",
	projectId: "clone-try-b6bc0",
	storageBucket: "clone-try-b6bc0.appspot.com",
	messagingSenderId: "393465673526",
	appId: "1:393465673526:web:152bc7a04611f5e6dde597",
	measurementId: "G-JS7SKNXZ0B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
