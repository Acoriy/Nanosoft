// Firebase : Mohamed

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  enableIndexedDbPersistence,
  collection,
  getDocs,
  query,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { toast } from "sonner";

// Configuration Firebase
const firebaseConfig = {
  // apiKey: "AIzaSyAE8dYheJ0hIB3c4sYQgev0tASjWNMtufI",
  // authDomain: "nanosoft-website.firebaseapp.com",
  // projectId: "nanosoft-website",
  // storageBucket: "nanosoft-website.firebasestorage.app",
  // messagingSenderId: "675136646663",
  // appId: "1:675136646663:web:ef2b16a8f2c18ef33d44a2",
  // measurementId: "G-YYF4FL80Z3"
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialiser Analytics en production seulement (évite les erreurs en développement)
let analytics = null;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Analytics initialization error:", error);
  }
}
export { analytics };

// Statut de la connexion
let isConnected = false;
let connectionPromise = null;

// Maximum number of connection retries
const MAX_RETRIES = 3;

// Vérifier la connexion à Firestore et créer automatiquement les collections si elles n'existent pas
export const checkFirestoreConnection = async (retryCount = 0) => {
  if (isConnected) return true;

  if (connectionPromise) {
    return connectionPromise;
  }

  // eslint-disable-next-line no-async-promise-executor
  connectionPromise = new Promise(async (resolve) => {
    try {
      console.log(
        `Trying to connect to Firestore (attempt ${retryCount + 1}/${
          MAX_RETRIES + 1
        })...`
      );

      // Vérifier si les collections existent
      const blogsRef = collection(db, "blogs");
      const blogsQuery = query(blogsRef, limit(1));
      const blogsSnapshot = await getDocs(blogsQuery);

      const pricesRef = collection(db, "prices");
      const pricesQuery = query(pricesRef, limit(1));
      const pricesSnapshot = await getDocs(pricesQuery);

      console.log("Firestore connexion réussie ✅");

      isConnected = true;
      resolve(true);
    } catch (error) {
      console.error("Firestore connexion erreur:", error);

      // Retry logic with exponential backoff
      if (retryCount < MAX_RETRIES) {
        const backoffTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
        console.log(`Retrying in ${backoffTime / 1000} seconds...`);

        setTimeout(async () => {
          connectionPromise = null; // Reset the promise for the next attempt
          const result = await checkFirestoreConnection(retryCount + 1);
          resolve(result);
        }, backoffTime);
      } else {
        toast.error(
          "Erreur de connexion à la base de données après plusieurs tentatives"
        );
        console.error(
          "Maximum retries reached. Could not connect to Firestore."
        );
        resolve(false);
      }
    } finally {
      if (isConnected || retryCount >= MAX_RETRIES) {
        connectionPromise = null;
      }
    }
  });

  return connectionPromise;
};

// Activer la persistance hors ligne pour Firestore
const enablePersistence = async () => {
  try {
    await enableIndexedDbPersistence(db);
    console.log("Persistance hors ligne activée ✅");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code === "failed-precondition") {
      console.warn(
        "La persistance Firestore a échoué: Plusieurs onglets ouverts"
      );
    } else if (err.code === "unimplemented") {
      console.warn(
        "La persistance Firestore n'est pas prise en charge par ce navigateur"
      );
    } else {
      console.error("Erreur de persistance Firestore:", err);
    }
  }
};

// Initialiser la persistance de façon asynchrone
enablePersistence().catch((error) => {
  console.error("Erreur lors de l'activation de la persistance:", error);
});

// Connecter aux émulateurs en mode développement
if (import.meta.env.DEV) {
  try {
    // Activer ces lignes l'orsque en utilisez les émulateurs Firebase
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log(
      "Mode développement: les émulateurs Firebase peuvent être configurés si nécessaire."
    );
  } catch (error) {
    console.error("Erreur de connexion aux émulateurs Firebase:", error);
  }
}

// Exporter la fonction de vérification et d'initialisation
export const initializeFirebase = async (silent = false) => {
  try {
    console.log("Initialisation de Firebase...");
    const isConnected = await checkFirestoreConnection();
    console.log(
      `Statut de l'initialisation Firebase: ${
        isConnected ? "Succès ✅" : "Échec ❌"
      }`
    );
    return isConnected;
  } catch (error) {
    console.error("Erreur d'initialisation Firebase:", error);
    if (!silent) {
      toast.error("Erreur d'initialisation Firebase");
    }
    return false;
  }
};

// Fonction d'abonnement pour une synchronisation en temps réel
export const subscribeToCollection = (collectionName, callback) => {
  console.log(`Abonnement à la collection: ${collectionName}`);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  return onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(
        `Données reçues pour ${collectionName}:`,
        data.length,
        "documents"
      );
      callback(data);
    },
    (error) => {
      console.error(`Erreur lors de l'écoute de ${collectionName}:`, error);
      toast.error(`Erreur de synchronisation des données`);
    }
  );
};


// ---------------------------------------------------------------------------------------------------------------------
// import { initializeApp } from 'firebase/app';
// import { 
//   getFirestore, 
//   enableIndexedDbPersistence, 
//   connectFirestoreEmulator,
//   collection,
//   getDocs,
//   query,
//   limit,
//   getDoc,
//   doc,
//   setDoc,
//   writeBatch,
//   serverTimestamp,
//   onSnapshot
// } from 'firebase/firestore';
// import { getStorage, connectStorageEmulator } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// import { toast } from 'sonner';

// // Configuration Firebase
// const firebaseConfig = {
//   // apiKey: "AIzaSyAE8dYheJ0hIB3c4sYQgev0tASjWNMtufI",
//   //   authDomain: "nanosoft-website.firebaseapp.com",
//   //   projectId: "nanosoft-website",
//   //   storageBucket: "nanosoft-website.firebasestorage.app",
//   //   messagingSenderId: "675136646663",
//   //   appId: "1:675136646663:web:ef2b16a8f2c18ef33d44a2",
//   //   measurementId: "G-YYF4FL80Z3"
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//    appId: import.meta.env.VITE_FIREBASE_APP_ID,
//    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// // Initialiser Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// // Initialiser Analytics en production seulement (évite les erreurs en développement)
// let analytics = null;
// if (typeof window !== 'undefined') {
//   try {
//     analytics = getAnalytics(app);
//   } catch (error) {
//     console.error('Analytics initialization error:', error);
//   }
// }
// export { analytics };

// // Statut de la connexion
// let isConnected = false;
// let connectionPromise = null;

// // Maximum number of connection retries
// const MAX_RETRIES = 3;

// // Vérifier la connexion à Firestore et créer automatiquement les collections si elles n'existent pas
// export const checkFirestoreConnection = async (retryCount = 0) => {
//   if (isConnected) return true;
  
//   if (connectionPromise) {
//     return connectionPromise;
//   }

//   // eslint-disable-next-line no-async-promise-executor
//   connectionPromise = new Promise(async (resolve) => {
//     try {
//       console.log(`Trying to connect to Firestore (attempt ${retryCount + 1}/${MAX_RETRIES + 1})...`);
      
//       // Vérifier si les collections existent
//       const blogsRef = collection(db, 'blogs');
//       const blogsQuery = query(blogsRef, limit(1));
//       const blogsSnapshot = await getDocs(blogsQuery);
      
//       const pricesRef = collection(db, 'prices');
//       const pricesQuery = query(pricesRef, limit(1));
//       const pricesSnapshot = await getDocs(pricesQuery);
      
//       console.log('Firestore connexion réussie ✅');
      
//       // Supprimer l'initialisation des données par défaut
//       // if (blogsSnapshot.empty || pricesSnapshot.empty) {
//       //   console.log('Collections vides, initialisation des données par défaut...');
//       //   const { initializeDefaultBlogs } = await import('@/services/blogService');
//       //   const { initializeDefaultPrices } = await import('@/services/priceService');
//       //   try {
//       //     await Promise.all([
//       //       initializeDefaultBlogs(),
//       //       initializeDefaultPrices()
//       //     ]);
//       //     console.log('Données par défaut initialisées avec succès ✅');
//       //   } catch (error) {
//       //     console.error('Erreur lors de l\'initialisation des données par défaut:', error);
//       //     toast.error('Erreur lors de l\'initialisation des données par défaut');
//       //   }
//       // }
      
//       isConnected = true;
//       resolve(true);
//     } catch (error) {
//       console.error('Firestore connexion erreur:', error);
      
//       // Retry logic with exponential backoff
//       if (retryCount < MAX_RETRIES) {
//         const backoffTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
//         console.log(`Retrying in ${backoffTime/1000} seconds...`);
        
//         setTimeout(async () => {
//           connectionPromise = null; // Reset the promise for the next attempt
//           const result = await checkFirestoreConnection(retryCount + 1);
//           resolve(result);
//         }, backoffTime);
//       } else {
//         toast.error('Erreur de connexion à la base de données après plusieurs tentatives');
//         console.error('Maximum retries reached. Could not connect to Firestore.');
//         resolve(false);
//       }
//     } finally {
//       if (isConnected || retryCount >= MAX_RETRIES) {
//         connectionPromise = null;
//       }
//     }
//   });
  
//   return connectionPromise;
// };

// // Activer la persistance hors ligne pour Firestore
// const enablePersistence = async () => {
//   try {
//     await enableIndexedDbPersistence(db);
//     console.log('Persistance hors ligne activée ✅');
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     if (err.code === 'failed-precondition') {
//       console.warn('La persistance Firestore a échoué: Plusieurs onglets ouverts');
//     } else if (err.code === 'unimplemented') {
//       console.warn('La persistance Firestore n\'est pas prise en charge par ce navigateur');
//     } else {
//       console.error('Erreur de persistance Firestore:', err);
//     }
//   }
// };

// // Initialiser la persistance de façon asynchrone
// enablePersistence().catch(error => {
//   console.error('Erreur lors de l\'activation de la persistance:', error);
// });

// // Connecter aux émulateurs en mode développement
// if (import.meta.env.DEV) {
//   try {
//     // Activer ces lignes si vous utilisez les émulateurs Firebase
//     // connectFirestoreEmulator(db, 'localhost', 8080);
//     // connectStorageEmulator(storage, 'localhost', 9199);
//     console.log('Mode développement: les émulateurs Firebase peuvent être configurés si nécessaire.');
//   } catch (error) {
//     console.error('Erreur de connexion aux émulateurs Firebase:', error);
//   }
// }

// // Exporter la fonction de vérification et d'initialisation
// export const initializeFirebase = async (silent = false) => {
//   try {
//     console.log('Initialisation de Firebase...');
//     const isConnected = await checkFirestoreConnection();
//     console.log(`Statut de l'initialisation Firebase: ${isConnected ? 'Succès ✅' : 'Échec ❌'}`);
//     return isConnected;
//   } catch (error) {
//     console.error('Erreur d\'initialisation Firebase:', error);
//     if (!silent) {
//       toast.error('Erreur d\'initialisation Firebase');
//     }
//     return false;
//   }
// };

// // Fonction d'abonnement pour une synchronisation en temps réel
// export const subscribeToCollection = (collectionName, callback) => {
//   console.log(`Abonnement à la collection: ${collectionName}`);
//   const collectionRef = collection(db, collectionName);
//   const q = query(collectionRef);
  
//   return onSnapshot(q, (snapshot) => {
//     const data = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     console.log(`Données reçues pour ${collectionName}:`, data.length, 'documents');
//     callback(data);
//   }, (error) => {
//     console.error(`Erreur lors de l'écoute de ${collectionName}:`, error);
//     toast.error(`Erreur de synchronisation des données`);
//   });
// };


