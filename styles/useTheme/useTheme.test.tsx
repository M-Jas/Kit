// Libs
import 'react-native';
import React from 'react';
import { View } from 'react-native';

// Component
import useTheme from './useTheme';
import ThemeProvider from '../ThemeProvider';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('styles - useTheme', () => {
  it('should use the theme', () => {
    const theme = { foo: 'foo' };
    let themeFromProvider;

    const TestComponent = () => {
      const contextTheme = useTheme();
      themeFromProvider = contextTheme;
      return <View />;
    };

    renderer.create(
      <ThemeProvider theme={{ foo: 'foo' }}>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(themeFromProvider).toEqual(theme);
  });
});
