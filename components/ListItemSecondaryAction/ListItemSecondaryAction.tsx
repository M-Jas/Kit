// Libs
import React from 'react';

// UI
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import makeStyles from '@styles/makeStyles';

// types
import { StylesProp } from '@styles/makeStyles/types';

export interface ListItemSecondaryActionProps
  extends React.PropsWithChildren<TouchableOpacityProps> {
  styles?: StylesProp;
}

const ListItemSecondaryAction = (props: ListItemSecondaryActionProps) => {
  const { styles: incomingStyles, children, ...other } = props;
  const styles = useStyles({ styles: incomingStyles });

  return (
    <TouchableOpacity style={styles.root} {...other}>
      {children}
    </TouchableOpacity>
  );
};

ListItemSecondaryAction.displayName = 'ListItemSecondaryAction';
ListItemSecondaryAction.defaultProps = {
  testID: 'ListItemSecondaryAction',
};

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme?.spacing.unit,
  },
}));

export default ListItemSecondaryAction;
