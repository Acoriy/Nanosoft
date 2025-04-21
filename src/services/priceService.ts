/* eslint-disable @typescript-eslint/no-explicit-any */


import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  writeBatch,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore';
import { toast } from 'sonner';
import { pricingPlans, serviceCategories } from '@/data/pricingData';

// Définition de l'interface Price
export interface Price {
  id?: string;
  title: string;
  price: string;
  currency: string;
  period: string;
  features: string;
  isPopular: boolean;
  category: string;
  createdAt?: any;
  updatedAt?: any;
}

// Données par défaut issues de pricingData
const defaultPricesData: Omit<Price, 'id' | 'createdAt' | 'updatedAt'>[] =
  pricingPlans.map(plan => ({
    title: plan.name,
    price: plan.price.toString(),
    currency: 'LYD',
    period: 'monthly',
    features: plan.features.join(','),
    isPopular: plan.popular,
    category: plan.serviceId
  }));

const MAX_RETRIES = 3;

// Fonction de retry générique
const retryOperation = async <T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = 1000
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying operation in ${delay}ms... (${retries} attempts left)`);
      await new Promise(res => setTimeout(res, delay));
      return retryOperation(operation, retries - 1, delay * 2);
    }
    throw error;
  }
};

// Initialiser les prix par défaut
export const initializeDefaultPrices = async (): Promise<void> => {
  try {
    const pricesRef = collection(db, 'prices');
    const snapshot = await getDocs(pricesRef);

    if (snapshot.empty) {
      const batch = writeBatch(db);
      defaultPricesData.forEach((priceData, idx) => {
        const id = `default-price-${idx + 1}`;
        const ref = doc(db, 'prices', id);
        batch.set(ref, {
          ...priceData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });
      await batch.commit();
      toast.success('Prix par défaut créés ✅');
    }
  } catch (error) {
    console.error('Erreur initialisation par défaut:', error);
    // toast.error('Erreur lors de la création des prix par défaut');
    throw error;
  }
};

// Récupérer tous les prix :
export const getPrices = async (): Promise<Price[]> =>
  retryOperation(async () => {
    const pricesRef = collection(db, 'prices');
    const q = query(pricesRef, orderBy('createdAt', 'desc'));
    let snapshot = await getDocs(q);

    if (snapshot.empty) {
      await initializeDefaultPrices();
      snapshot = await getDocs(q);
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }));
  });

// Récupérer les prix par catégorie
export const getPricesByCategory = async (category: string): Promise<Price[]> =>
  retryOperation(async () => {
    const pricesRef = collection(db, 'prices');
    const allSnapshot = await getDocs(pricesRef);
    if (allSnapshot.empty) await initializeDefaultPrices();

    const q = query(
      pricesRef,
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    let snapshot = await getDocs(q);

    if (snapshot.empty) {
      // Initialisation spécifique si nécessaire
      const categoryDefaults = defaultPricesData.filter(p => p.category === category);
      if (categoryDefaults.length) {
        const batch = writeBatch(db);
        categoryDefaults.forEach((data, idx) => {
          const id = `default-${category}-price-${idx + 1}`;
          const ref = doc(db, 'prices', id);
          batch.set(ref, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        });
        await batch.commit();
        snapshot = await getDocs(q);
      }
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }));
  });

// Abonnement temps réel à tous les prix
export const subscribeToPricesUpdates = (
callback: (prices: Price[]) => void, p0?: (err: any) => void): (() => void) => {
  return onSnapshot(
    query(collection(db, 'prices'), orderBy('createdAt', 'desc')),
    snap => callback(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }))),
    error => {
      console.error('Erreur snapshot prices:', error);
      // toast.error('Erreur de synchronisation des prix');
    }
  );
};

// Abonnement temps réel par catégorie
export const subscribeToPricesByCategory = (
  category: string,
  callback: (prices: Price[]) => void
): (() => void) => {
  return onSnapshot(
    query(
      collection(db, 'prices'),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    ),
    snap => callback(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }))),
    error => {
      console.error(`Erreur snapshot category ${category}:`, error);
      // toast.error('Erreur de synchronisation des prix');
    }
  );
};

// CRUD basiques
export const getPrice = async (id: string): Promise<Price | null> => {
  try {
    const ref = doc(db, 'prices', id);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...(snap.data() as Price) } : null;
  } catch (error) {
    console.error('Erreur getPrice:', error);
    // toast.error('Erreur lors de la récupération du prix');
    return null;
  }
};

export const addPrice = async (price: Price): Promise<string> => {
  try {
    const ref = await addDoc(collection(db, 'prices'), {
      ...price,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    toast.success('Prix ajouté ✅');
    return ref.id;
  } catch (error) {
    console.error('Erreur addPrice:', error);
    // toast.error('Erreur lors de l\u2019ajout du prix');
    throw error;
  }
};

export const updatePrice = async (
  id: string,
  price: Partial<Price>
): Promise<void> => {
  try {
    const ref = doc(db, 'prices', id);
    await updateDoc(ref, { ...price, updatedAt: serverTimestamp() });
    toast.success('Prix mis à jour ✅');
  } catch (error) {
    console.error('Erreur updatePrice:', error);
    // toast.error('Erreur lors de la mise à jour du prix');
    throw error;
  }
};

export const deletePrice = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'prices', id));
    toast.success('Prix supprimé ✅');
  } catch (error) {
    console.error('Erreur deletePrice:', error);
    // toast.error('Erreur lors de la suppression du prix');
    throw error;
  }
};

export const togglePopular = async (
  id: string,
  isPopular: boolean
): Promise<void> => {
  try {
    const ref = doc(db, 'prices', id);
    await updateDoc(ref, { isPopular, updatedAt: serverTimestamp() });
    toast.success(isPopular ? 'Marqué populaire' : 'Démarquéd populaire');
  } catch (error) {
    console.error('Erreur togglePopular:', error);
    // toast.error('Erreur lors de la mise à jour du statut populaire');
    throw error;
  }
};

// Export des catégories de service
export const getServiceCategories = () => serviceCategories;