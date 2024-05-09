import mockAPI from '@/mocks/data';
import { APIResponse } from '@/types/API';

export default async function getMetricsData(): Promise<APIResponse> {
  return Promise.resolve(mockAPI);
}
