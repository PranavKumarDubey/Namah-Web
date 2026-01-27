import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

/**
 * Custom hook for fetching data
 * 
 * @param {string} endpoint - API endpoint (e.g., 'aarti.json')
 * @param {object} options - { enabled: true, headers: {} }
 * @returns {object} - { data, loading, error, refetch }
 */
function useFetch(endpoint, options = {}) {
  const { enabled = true, headers = {} } = options;
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // ✅ FIX: api interceptor already returns response.data
      // So we don't need to access .data again
      const response = await api.get(endpoint, { headers });
      setData(response); // ✅ Direct response (not response.data)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch data');
      console.error(`Error fetching ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(headers)]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [fetchData, enabled]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;