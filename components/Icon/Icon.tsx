// Libs
import React from 'react';

// UI
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { default as RNVI_Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import makeStyles from '@styles/makeStyles';

// Types
import { IconProps as RNVI_IconProps } from 'react-native-vector-icons/Icon';
import { StylesProp } from '@styles/makeStyles/types';
/**
 * There are 2 different ways we could render an Icon. RNVI Icon or Custom
 *
 * 1) RNVI Icon: If the icon needed is part of the Material Icon set we'll use RNVI.
 * Any properties from Text, TouchableHighlight or TouchableWithoutFeedback
 * can be used in addition to these: https://github.com/oblador/react-native-vector-icons#properties-1
 *
 * 2) Custom If we need to use a custom icon we will pass in a styled image as a child.
 * Any properties from TouchableOpacity or View can be used.
 *
 * Material Icon set: https://material.io/resources/icons/?style=baseline
 */

// @ts-ignore name prop is required for RNVI but kit lets us pass anything as children
interface IconProps
  extends React.PropsWithChildren<TouchableOpacityProps>,
    RNVI_IconProps {
  name?: String;
  styles?: StylesProp;
}

const Icon = (props: IconProps) => {
  const {
    children,
    name,
    size,
    onPress,
    styles: incomingStyles,
    ...other
  } = props;
  const styles = useStyles({ styles: incomingStyles });
  const Component: React.ElementType = onPress ? TouchableOpacity : View;

  return (
    <Component style={styles.root} onPress={onPress} {...other}>
      {name && !children && (
        <RNVI_Icon
          // @ts-ignore
          name={name}
          size={size || 24}
          style={styles.icon}
        />
      )}
      {children && !name && children}
    </Component>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  testID: 'Icon',
};

const useStyles = makeStyles(theme => ({
  root: {},
  icon: {
    color: theme?.palette.common.black,
  },
}));

export default Icon;
