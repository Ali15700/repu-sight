import { create } from "zustand";
import { fetchData } from "../api/apiClient";

const useDataStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getData: async (query) => {
    set({ loading: true, error: null });
    try {
      const result = await fetchData(query);
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useDataStore;
