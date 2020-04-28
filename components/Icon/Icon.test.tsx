// Libs
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// UI
import { View } from 'react-native';
import Icon from './Icon';

const mockFn = jest.fn();

const setup = () => {
  return <Icon name="share" testID="component-icon" onPress={mockFn} />;
};

describe('Kit Icon Component using React Native Vector Icons', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    const component = getByTestId('component-icon');

    expect(component).toBeTruthy();
  });

  test('it renders 1 child element', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    const component = getByTestId('component-icon');

    expect(component.children.length).toBe(1);
  });

  test('opens native OS sharing feature', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    const component = getByTestId('component-icon');

    fireEvent.press(component);
    expect(mockFn).toHaveBeenCalled();
  });
});

describe('Custom Kit Icon component', () => {
  test('should use children component', () => {
    const child = <View testID="test-view" />;
    const { getByTestId } = render(<Icon>{child}</Icon>);
    const component = getByTestId('test-view');

    expect(component.type).toBe('View');
  });

  test('should be able to press icon', () => {
    const child = <View testID="test-view" />;
    const { getByTestId } = render(<Icon onPress={mockFn}>{child}</Icon>);
    const component = getByTestId('test-view');

    fireEvent.press(component);
    expect(mockFn).toHaveBeenCalled();
  });
});
