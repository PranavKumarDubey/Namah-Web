  import axios from 'axios';
  const api = axios.create({
    baseURL: 'https://namah-api.pages.dev/api/',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Optional: Return only data instead of full response
  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );

  export default api;