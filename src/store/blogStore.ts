import { create } from 'zustand';
import { BlogPost } from '../types/blog';
import { createBlogPost, updateBlogPost, deleteBlogPost, getBlogPosts } from '../services/blog';

interface BlogStore {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  updatePost: (id: string, updatedPost: Partial<BlogPost>) => Promise<void>;
  getRecentPosts: () => BlogPost[];
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    try {
      set({ loading: true, error: null });
      const posts = await getBlogPosts();
      set({ posts, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  addPost: async (post) => {
    try {
      set({ loading: true, error: null });
      const newPost = await createBlogPost(post);
      set(state => ({ 
        posts: [newPost, ...state.posts],
        loading: false 
      }));
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  deletePost: async (id) => {
    try {
      set({ loading: true, error: null });
      await deleteBlogPost(id);
      set(state => ({
        posts: state.posts.filter(post => post.id !== id),
        loading: false
      }));
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  updatePost: async (id, updatedPost) => {
    try {
      set({ loading: true, error: null });
      await updateBlogPost(id, updatedPost);
      set(state => ({
        posts: state.posts.map(post =>
          post.id === id ? { ...post, ...updatedPost } : post
        ),
        loading: false
      }));
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  getRecentPosts: () => get().posts.slice(0, 4)
}));