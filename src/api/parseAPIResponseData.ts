import { APIResponse, Metrics } from '@/types/API';
import { convertToMinutes, convertToPercentage } from '@/utils/numbers';
import { capitalize } from '@/utils/strings/capitalize';

function formatValue(type: string, value: number | string): string | number {
  if (type === 'hours') {
    return `${value} hours`;
  } else if (type === 'secs') {
    return `${convertToMinutes(Number(value))} minutes`;
  } else if (type === 'percentage') {
    return `${convertToPercentage(Number(value))}%`;
  } else {
    return value;
  }
}

export function parseAPIReponseData(response: APIResponse): Metrics[] {
  if (!response) return [];

  return response.data.map(
    ({ id, label, type, category, description, value }) => ({
      id,
      label: capitalize(label),
      type,
      category,
      description,
      value: formatValue(type, value),
    }),
  );
}
