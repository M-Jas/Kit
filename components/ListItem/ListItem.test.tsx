// Libs
import React from 'react';
import { render } from '@testing-library/react-native';

// UI
import ListItem from './ListItem';
import ListItemText from '../ListItemText';

const onPress = jest.fn();

const TestListItem = ({ chevron = false, disabled = false }) => (
  <ListItem
    testID="list-item-component"
    chevron={chevron}
    disabled={disabled}
    onPress={onPress}
  >
    <ListItemText primary="Pickle Rick" secondary="Time Traveler" />
  </ListItem>
);

describe('Kit List Item', () => {
  test('it renders without error', () => {
    const { baseElement } = render(<TestListItem />);

    expect(baseElement).toBeTruthy();
  });

  test('it renders a TouchableOpacity component when `onPress` passed as prop', () => {
    const { getByTestId } = render(<TestListItem />);
    const component = getByTestId('list-item-component');

    expect(component.type).toBe('TouchableOpacity');
  });

  test('press action disabled when disabled prop is passed down', () => {
    const { getByTestId } = render(<TestListItem disabled />);
    const component = getByTestId('list-item-component');

    expect(component.props.disabled).toBeTrue();
  });

  test('is renders a chevron icon when chevron prop is true and has onPress', () => {
    const { getByTestId } = render(<TestListItem chevron />);
    const chevron = getByTestId('list-item-chevron');

    expect(chevron).toBeTruthy();
  });

  describe('children components', () => {
    describe('secondary actions', () => {
      test('renders primary and secondary component ', () => {
        const { getByTestId } = render(<TestListItem />);
        const component = getByTestId('list-item-component');

        expect(component.children.length).toBe(1);
      });
    });

    test('is renders a chevron icon when chevron prop is true and has onPress', () => {
      const { getByTestId } = render(<TestListItem chevron />);
      const chevron = getByTestId('list-item-chevron');

      expect(chevron).toBeTruthy();
    });
  });
});
