export function convertToMinutes(
  input: number,
  type: 'secs' | 'hours' = 'secs',
): number {
  if (type === 'hours') {
    return Math.floor(input * 60);
  }
  return Math.floor(input / 60);
}

export function convertToPercentage(input: number): number {
  return input * 100;
}
