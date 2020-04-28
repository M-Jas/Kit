// Libs
import React from 'react';
import { render } from '@testing-library/react-native';

// UI
import { View } from 'react-native';
import ListItemText from './ListItemText';

describe('list item text component', () => {
  test('it renders without error', () => {
    const { container } = render(<ListItemText />);

    expect(container).toBeTruthy();
  });

  test('should render with no children', () => {
    const { getByTestId } = render(
      <ListItemText testID="component-list-item-text" />,
    );
    const component = getByTestId('component-list-item-text');

    expect(component.children.length).toBe(0);
  });

  describe('prop: primary', () => {
    test('should render primary text', () => {
      const { getByText } = render(<ListItemText primary={'Pickle Rick'} />);
      const primaryComponent = getByText('Pickle Rick');

      expect(primaryComponent).toBeTruthy();
      expect(primaryComponent.type).toBe('Text');
    });

    test('should use the children prop as primary node', () => {
      const primary = <View testID="test-view" />;
      const { getByTestId } = render(<ListItemText>{primary}</ListItemText>);
      const component = getByTestId('test-view');

      expect(component).toBeTruthy();
      expect(component.type).toBe('View');
    });
  });

  describe('prop: secondary', () => {
    test('should render secondary text', () => {
      const { getByText } = render(<ListItemText secondary="Time Traveler" />);
      const secondaryComponent = getByText('Time Traveler');

      expect(secondaryComponent).toBeTruthy();
      expect(secondaryComponent.type).toBe('Text');
    });

    test('should use secondary node', () => {
      const secondary = <View testID="test-view" />;
      const { getByTestId } = render(<ListItemText secondary={secondary} />);
      const component = getByTestId('test-view');

      expect(component).toBeTruthy();
      expect(component.type).toBe('View');
    });
  });
});
