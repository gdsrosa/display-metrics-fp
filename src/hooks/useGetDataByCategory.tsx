import { useCallback } from 'react';

import { parseAPIReponseData } from '@/api/parseAPIResponseData';
import useFetch from './useFetch';

export default function useGetDataByCategory() {
  const { data } = useFetch();
  const parsedData = parseAPIReponseData({ data });

  const getCategorizedParsedDataBy = useCallback(
    (cty: string) => {
      return parsedData.filter(({ category }) => category === cty);
    },
    [parsedData],
  );

  const getCategorizedRawDataBy = useCallback(
    (cty: string) => {
      return data.filter(({ category }) => category === cty);
    },
    [data],
  );

  return { getCategorizedParsedDataBy, getCategorizedRawDataBy };
}
