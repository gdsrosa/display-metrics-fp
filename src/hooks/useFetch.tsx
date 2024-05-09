import { useEffect, useState } from 'react';
import { Metrics } from '@/types/API';
import getMetricsData from '@/api';

export default function useFetch() {
  const [data, setData] = useState<Metrics[]>([]);

  useEffect(() => {
    async function getMetrics() {
      const response = await getMetricsData();
      setData(response.data);
    }
    getMetrics();
  }, []);

  return { data };
}
