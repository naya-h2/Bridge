import { create } from 'zustand';
import { createFilterSlice } from './filterSlice';
import { createAdminSlice } from './adminSlice';

export const useStore = create((...a) => ({
  ...createFilterSlice(...a),
  ...createAdminSlice(...a),
}));
