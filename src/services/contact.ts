import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ContactFormData {
  name: string;
  position: string;
  email: string;
  details: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Validate required fields
    if (!formData.name.trim()) {
      throw new Error('Please enter your name');
    }
    if (!formData.position.trim()) {
      throw new Error('Please enter your position');
    }
    if (!formData.details.trim()) {
      throw new Error('Please enter project details');
    }

    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      ...formData,
      status: 'new',
      createdAt: serverTimestamp(),
    });

    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    if (error.code === 'permission-denied') {
      throw new Error('Unable to submit form at this time. Please try again later.');
    }
    throw error;
  }
};