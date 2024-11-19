import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Banner {
  id: string;
  title: string;
  description: string;
  ebookUrl: string;
  isActive: boolean;
}

interface BannerStore {
  banner: Banner | null;
  setBanner: (banner: Banner | null) => void;
}

export const useBannerStore = create<BannerStore>()(
  persist(
    (set) => ({
      banner: null,
      setBanner: (banner) => set({ banner }),
    }),
    {
      name: 'banner-storage',
    }
  )
);