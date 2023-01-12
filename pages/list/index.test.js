import { render, cleanup } from '@testing-library/react';
import List from './index';

describe('List', () => {
  afterEach(cleanup);

  it('render list page', async () => {
    render(<List />);
  });
});