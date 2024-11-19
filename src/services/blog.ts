import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { BlogPost } from '../types/blog';

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'date'>) => {
  try {
    const docRef = await addDoc(collection(db, 'blog_posts'), {
      ...post,
      date: serverTimestamp(),
    });
    return { id: docRef.id, ...post, date: new Date().toISOString() };
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
  try {
    await updateDoc(doc(db, 'blog_posts', id), updates);
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

export const deleteBlogPost = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'blog_posts', id));
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

export const getBlogPosts = async () => {
  try {
    const q = query(collection(db, 'blog_posts'), orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate?.()?.toISOString() || new Date().toISOString()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};