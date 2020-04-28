// Libs
import React from 'react';
import { render } from '@testing-library/react-native';

// UI
import Separator from './Separator';

// Mocks
import { globalMocks } from '@test/consts';

describe('Separator', () => {
  afterEach(() => {
    // Resets
    globalMocks.mockUseStyles.mockClear();
  });

  it('renders without error', () => {
    render(<Separator />);
  });

  it('should call useStyles with its props', () => {
    render(<Separator />);

    expect(globalMocks.mockUseStyles).toHaveBeenCalledTimes(1);
  });
});
