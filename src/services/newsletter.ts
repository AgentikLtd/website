import { collection, addDoc, getDocs, query, where, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  status: 'active' | 'unsubscribed';
}

export const subscribeToNewsletter = async (email: string) => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    // Check if email already exists
    const q = query(collection(db, 'newsletter_subscriptions'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      if (doc.data().status === 'active') {
        throw new Error('This email is already subscribed');
      } else {
        // Reactivate subscription
        await updateDoc(doc.ref, {
          status: 'active',
          resubscribedAt: serverTimestamp()
        });
        return { success: true };
      }
    }

    // Add new subscription
    await addDoc(collection(db, 'newsletter_subscriptions'), {
      email,
      subscribedAt: serverTimestamp(),
      status: 'active'
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);
    if (error.code === 'permission-denied') {
      throw new Error('Unable to subscribe at this time. Please try again later.');
    }
    throw error;
  }
};

export const unsubscribeFromNewsletter = async (email: string) => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    // Find subscription
    const q = query(collection(db, 'newsletter_subscriptions'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      throw new Error('Email not found in our subscription list');
    }

    // Update subscription status
    const docRef = querySnapshot.docs[0].ref;
    await updateDoc(docRef, {
      status: 'unsubscribed',
      unsubscribedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error unsubscribing from newsletter:', error);
    if (error.code === 'permission-denied') {
      throw new Error('Unable to process your request. Please try again later.');
    }
    throw error;
  }
};