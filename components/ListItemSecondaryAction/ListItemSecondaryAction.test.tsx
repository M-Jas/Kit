// Libs
import React from 'react';
import { render } from '@testing-library/react-native';

// UI
import { Image } from 'react-native';
import ListItemSecondaryAction from './ListItemSecondaryAction';

const onPress = jest.fn();

const MockListItemSecondaryAction = ({ disabled = false }) => (
  <ListItemSecondaryAction
    testID="list-item-secondary-action"
    disabled={disabled}
    onPress={onPress}
  >
    <Image
      source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      style={styles}
    />
  </ListItemSecondaryAction>
);

describe('List Item Secondary Action Component', () => {
  test('renders without error', () => {
    const { getByTestId } = render(<MockListItemSecondaryAction />);
    const component = getByTestId('list-item-secondary-action');

    expect(component).toBeTruthy();
    expect(component.children.length).toBe(1);
  });

  test('press action disabled when disabled prop is passed down', () => {
    const { getByTestId } = render(<MockListItemSecondaryAction disabled />);
    const component = getByTestId('list-item-secondary-action');

    expect(component.props.disabled).toBeTrue();
  });
});

const styles = { width: 48, height: 48, borderRadius: 24 };
