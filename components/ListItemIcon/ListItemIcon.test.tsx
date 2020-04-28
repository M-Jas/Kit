// Libs
import React from 'react';
import { render } from '@testing-library/react-native';

// UI
import { Image } from 'react-native';
import ListItemIcon from './ListItemIcon';

describe('List Item Icon Component', () => {
  test('renders without error', () => {
    const { getByTestId } = render(
      <ListItemIcon testID={'list-item-icon'}>
        <Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={styles}
        />
      </ListItemIcon>,
    );

    const component = getByTestId('list-item-icon');

    expect(component).toBeTruthy();
  });
});

const styles = { width: 48, height: 48, borderRadius: 24 };
