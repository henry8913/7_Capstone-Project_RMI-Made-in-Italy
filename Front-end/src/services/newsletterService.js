import api from './api';

const newsletterService = {
  // Iscrizione alla newsletter
  subscribe: async (userData) => {
    try {
      const response = await api.post('/newsletter/iscriviti', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Disiscrizione dalla newsletter
  unsubscribe: async (token) => {
    try {
      const response = await api.post(`/newsletter/disiscrivi/${token}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Aggiorna preferenze newsletter
  updatePreferences: async (token, preferences) => {
    try {
      const response = await api.put(`/newsletter/preferenze/${token}`, preferences);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Verifica stato iscrizione (per utenti autenticati)
  checkSubscription: async (email) => {
    try {
      const response = await api.get(`/newsletter/verifica`, { params: { email } });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default newsletterService;