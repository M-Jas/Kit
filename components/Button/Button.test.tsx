// Lib
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// UI
import Button from './Button';

const mockFn = jest.fn();

const setup = () => {
  return (
    <Button
      testID="button-component"
      title="test title"
      onPress={mockFn}
      styles={{
        root: { backgroundColor: 'red' },
        title: { color: 'pink' },
      }}
    />
  );
};

describe('Button Component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    getByTestId('button-component');
  });

  it('must have a `onPress` prop', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    const component = getByTestId('button-component');
    fireEvent.press(component);

    expect(mockFn).toHaveBeenCalled();
  });

  it('has a title', () => {
    const wrapper = setup();
    const { getByText } = render(wrapper);

    getByText('test title');
  });

  it('takes a `color` prop to set background color', () => {
    const wrapper = setup();
    const { getByTestId } = render(wrapper);
    const component = getByTestId('button-component');
    const backgroundColor = component.props.style[1].backgroundColor;

    expect(backgroundColor).toBe('red');
  });

  it('takes a `textColor` prop and sets the title text color', () => {
    const wrapper = setup();
    const { getByText } = render(wrapper);
    const component = getByText('test title');
    const textColor = component.props.style[1].color;

    expect(textColor).toBe('pink');
  });
});
