import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, isSupported, setAnalyticsCollectionEnabled } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyB64GeV_hxfOKzhJwUdoGzyu57k1NNJVc4",
  authDomain: "my-potfolio-9bb62.firebaseapp.com",
  projectId: "my-potfolio-9bb62",
  storageBucket: "my-potfolio-9bb62.firebasestorage.app",
  messagingSenderId: "165345263139",
  appId: "1:165345263139:web:fb93b3fe6618289cd57b96",
  measurementId: "G-W6W4C1JZE2"
};

const app = initializeApp(firebaseConfig);

let analytics = null;

// Ensure Firebase Analytics is only initialized on the client side
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      setAnalyticsCollectionEnabled(analytics, true);
    }
  });
}

export const logCustomEvent = async (event) => {
  if (typeof window === "undefined" || !analytics) return; // Ensure it's client-side and analytics is initialized
  console.log("Logging event:", event);
  logEvent(analytics, event, { platform: "web" });
};
