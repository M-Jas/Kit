// Libs
import { Dimensions, StyleSheet } from 'react-native';

const createSpacing = () => ({
  hairlineWidth: StyleSheet.hairlineWidth,
  unit: 8,
  window: Dimensions.get('window'),
});

export default createSpacing;
