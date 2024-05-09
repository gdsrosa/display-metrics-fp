import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import TableContainer from '@/containers/Table';

describe('Table Container', () => {
  it('should render table with data that is passed', async () => {
    const table = render(<TableContainer />);

    await screen.findByTestId('table');

    expect(table).toMatchSnapshot();
  });
});
