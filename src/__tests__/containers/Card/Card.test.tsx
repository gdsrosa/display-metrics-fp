import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardContainer from '@/containers/Card';

describe('Card Container', () => {
  it('should render cards properly', async () => {
    const cards = render(<CardContainer />);

    await screen.findAllByTestId('card');

    const cardsTitle = screen
      .getAllByRole('heading')
      .map(({ textContent }) => textContent);

    expect(cardsTitle).toEqual(['Efficiency', 'Downtime', 'Shift']);
    expect(cards).toMatchSnapshot();
  });
});
