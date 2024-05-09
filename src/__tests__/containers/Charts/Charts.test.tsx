import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import ChartsContainer from '@/containers/Charts';

vi.mock('react-chartjs-2');

describe('Charts Container', () => {
  it('should render charts with data that is passed', async () => {
    const { container } = render(<ChartsContainer />);

    expect(container).toMatchSnapshot();
  });
});
