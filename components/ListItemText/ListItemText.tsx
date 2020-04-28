// Libs
import React from 'react';
import { Text, View, ViewProps } from 'react-native';

// UI
import makeStyles from '@styles/makeStyles';

// Types
import { StylesProp } from '@styles/makeStyles/types';
import { StyledView } from '@styles/types';

export interface ListItemTextProps extends React.PropsWithChildren<ViewProps> {
  primary?: string;
  secondary?: string | JSX.Element;
  styles?: StylesProp;
}

const ListItemText: StyledView<ListItemTextProps> = props => {
  const {
    children,
    primary: primaryProp,
    secondary: secondaryProp,
    styles: incomingStyles,
    ...other
  } = props;
  const styles = useStyles({ styles: incomingStyles });

  const primary =
    typeof primaryProp === 'string' ? (
      <Text style={styles.primary}>{primaryProp}</Text>
    ) : (
      children
    );

  const secondary =
    typeof secondaryProp === 'string' ? (
      <Text style={styles.secondary}>{secondaryProp}</Text>
    ) : (
      secondaryProp
    );

  return (
    <View style={styles.root} {...other}>
      {primary}
      {secondary}
    </View>
  );
};

ListItemText.displayName = 'ListItemText';
ListItemText.defaultProps = {
  testID: 'ListItemText',
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    marginVertical: theme?.spacing.unit,
  },
  primary: {
    ...theme?.typography.body1,
  },
  secondary: {
    ...theme?.typography.caption,
    paddingTop: theme?.spacing.unit / 2,
  },
}));

export default ListItemText;
