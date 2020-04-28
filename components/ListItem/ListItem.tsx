// Libs
import React, { PropsWithChildren } from 'react';

// UI
import {
  Platform,
  View,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native';

// Components
import Icon from '../Icon';

// hooks
import makeStyles from '@styles/makeStyles';

// Types
import { StylesProp } from '@styles/makeStyles/types';

export interface ListItemProps
  extends PropsWithChildren<TouchableOpacityProps>,
    ViewProps,
    TouchableNativeFeedbackProps {
  chevron?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  styles?: StylesProp;
}

const ListItem = (props: ListItemProps) => {
  const {
    chevron = false,
    children,
    disabled = false,
    disableGutters = false,
    onPress,
    styles: incomingStyles,
    ...other
  } = props;
  const styles = useStyles({ styles: incomingStyles });

  // Settings
  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
  const Component: React.ElementType = onPress ? Touchable : View;
  const gutters = disableGutters ? [] : styles.gutters;

  return (
    <Component
      disabled={disabled}
      onPress={onPress}
      style={[...styles.root, ...gutters]}
      {...other}
    >
      {children}
      {onPress && chevron && (
        <Icon
          testID="list-item-chevron"
          name="chevron-right"
          styles={{ root: styles.chevronRoot, icon: styles.chevronIcon }}
        />
      )}
    </Component>
  );
};

ListItem.displayName = 'ListItem';
ListItem.defaultProps = {
  testID: 'ListItem',
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingVertical: theme?.spacing.unit,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  gutters: {
    paddingHorizontal: theme?.spacing.unit * 2,
  },
  sectionTitle: {
    ...theme?.typography.subtitle2Bold,
  },
  chevronRoot: {
    position: 'absolute',
    right: theme?.spacing.unit,
  },
  chevronIcon: {},
}));

export default ListItem;
