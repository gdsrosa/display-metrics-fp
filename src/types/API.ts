export type Metrics = {
  id: string;
  label: string;
  value: number | string;
  type: 'percentage' | 'number' | 'secs' | 'hours';
  description: string;
  category: 'efficiency' | 'shift' | 'downtime';
};

export type APIResponse = {
  data: Metrics[];
};
