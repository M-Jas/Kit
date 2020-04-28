import createPalette, { dark, light } from './index';

describe('Creates Palette Object', () => {
  it('should be defined', () => {
    expect(createPalette).toBeDefined();
  });

  test('The type property is "dark" ', () => {
    expect(createPalette('dcom', 'dark')).toHaveProperty('type', 'dark');
  });

  test('The dark theme text property is the same', () => {
    const palette = createPalette('dcom', 'dark');
    const textProperty = palette.text;

    expect(textProperty).toEqual(dark.text);
  });

  test('The light theme text property is the same', () => {
    const palette = createPalette('dcom', 'light');
    const textProperty = palette.text;

    expect(textProperty).toEqual(light.text);
  });

  test('tcom `primary.main` color is `#f5a623`', () => {
    const palette = createPalette('tcom', 'light');
    const primaryMain = palette.primary.main;
    const primaryDark = palette.primary.dark;
    const primaryLight = palette.primary.light;

    expect(primaryMain).toBe('#f5a623');
    expect(primaryDark).toBe('#e18e05');
    expect(primaryLight).toBe('#f7ba54');
  });

  test('primary colors default to dcom blues', () => {
    const palette = createPalette('dcom', 'light');
    const primaryMain = palette.primary.main;
    const primaryDark = palette.primary.dark;
    const primaryLight = palette.primary.light;

    expect(primaryMain).toBe('#0E5AB6');
    expect(primaryDark).toBe('#0a4387');
    expect(primaryLight).toBe('#106ad6');
  });
});
