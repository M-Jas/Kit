import createPalette from '../createPalette';
import createTypography from '../createTypography';
import createSpacing from '../createSpacing';
import createShape from '../createShape';
import { Mode } from '../useTheme/types';
import { ProductType } from '@store/productReducer';

const createTheme = (productType: ProductType, mode: Mode = 'light') => {
  const palette = createPalette(productType, mode);
  const typography = createTypography(palette.text.primary);
  const spacing = createSpacing();
  const shape = createShape();

  return {
    palette,
    typography,
    spacing,
    shape,
  };
};

export default createTheme;
