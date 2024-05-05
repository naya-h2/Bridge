import { create } from 'zustand';
import { createFilterSlice } from './filterSlice';

export const useStore = create((...a) => ({
  ...createFilterSlice(...a),
}));
