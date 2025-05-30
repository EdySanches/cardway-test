import { useEffect, useState } from 'react';

export function useFetch<T = any>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    setLoading(true);
    setError(null);
    setData(null);
    fetch(url, options)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (isMounted) setData(json);
      })
      .catch((err) => {
        if (isMounted) setError(err.message || 'Unknown error');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
} 