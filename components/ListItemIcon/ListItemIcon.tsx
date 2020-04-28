// Libs
import React from 'react';

// UI
import { View, ViewProps } from 'react-native';
import makeStyles from '@styles/makeStyles';

// types
import { StylesProp } from '@styles/makeStyles/types';

export interface ListItemIconProps extends React.PropsWithChildren<ViewProps> {
  styles?: StylesProp;
}

const ListItemIcon = (props: ListItemIconProps) => {
  const { children, styles: incomingStyles, ...other } = props;
  const styles = useStyles({ styles: incomingStyles });

  return (
    <View style={styles.root} {...other}>
      {children}
    </View>
  );
};

ListItemIcon.displayName = 'ListItemIcon';
ListItemIcon.defaultProps = {
  testID: 'ListItemIcon',
};

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme?.spacing.unit,
  },
}));

export default ListItemIcon;
