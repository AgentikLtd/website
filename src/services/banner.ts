import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Banner {
  id: string;
  title: string;
  description: string;
  ebookUrl: string;
  isActive: boolean;
}

export const createBanner = async (banner: Omit<Banner, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'banners'), {
      ...banner,
      createdAt: serverTimestamp(),
    });
    return { id: docRef.id, ...banner };
  } catch (error) {
    console.error('Error creating banner:', error);
    throw error;
  }
};

export const updateBanner = async (id: string, updates: Partial<Banner>) => {
  try {
    await updateDoc(doc(db, 'banners', id), updates);
  } catch (error) {
    console.error('Error updating banner:', error);
    throw error;
  }
};

export const deleteBanner = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'banners', id));
  } catch (error) {
    console.error('Error deleting banner:', error);
    throw error;
  }
};

export const getBanners = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'banners'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Banner[];
  } catch (error) {
    console.error('Error getting banners:', error);
    throw error;
  }
};

export const submitEbookDownload = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      email,
      status: 'new',
      createdAt: serverTimestamp(),
      isBannerSubmission: true,
      type: 'ebook_download'
    });
    return { id: docRef.id };
  } catch (error) {
    console.error('Error submitting ebook download:', error);
    throw error;
  }
};