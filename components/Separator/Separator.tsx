// Libs
import React from 'react';

// UI
import { View } from 'react-native';

// hooks
import makeStyles from '@styles/makeStyles';
import { StyledView } from '@styles/types';

const Separator: StyledView = ({ styles: incomingStyles, ...other }) => {
  const styles = useStyles({ styles: incomingStyles });

  return <View style={styles.root} {...other} />;
};

Separator.displayName = 'Separator';
Separator.defaultProps = {
  testID: 'Separator',
};

const useStyles = makeStyles(theme => ({
  root: {
    height: theme?.spacing.hairlineWidth,
    backgroundColor: theme?.palette.grey[200],
  },
}));
export default Separator;
