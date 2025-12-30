import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

/**
 * Custom hook for fetching data
 * 
 * @param {string} endpoint - API endpoint
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
      const response = await api.get(endpoint, { headers });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch data');
      console.error(`Error fetching ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(headers)]); // Stringify to compare object values

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [fetchData, enabled]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;