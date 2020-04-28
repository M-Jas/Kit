// Libs
import React from 'react';

// Components
import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  Text,
} from 'react-native';

// hooks
import makeStyles from '@styles/makeStyles';

// styles
import { StyledView } from '@styles/types';

interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  title: string;
}

const Button: StyledView<ButtonProps> = props => {
  const { onPress, title, styles: incomingStyles, ...other } = props;
  const styles = useStyles({ styles: incomingStyles });

  const TouchableComponent: React.ElementType =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <TouchableComponent style={styles.root} onPress={onPress} {...other}>
      <Text style={styles.title}>{title}</Text>
    </TouchableComponent>
  );
};

const useStyles = makeStyles((theme, { buttonColor, textColor }) => ({
  root: {
    backgroundColor: buttonColor || theme?.palette.common.black,
    paddingVertical: theme?.spacing.unit,
    paddingHorizontal: theme?.spacing.unit * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...theme?.typography.button,
    color: textColor || theme?.palette.primary.contrastText,
  },
}));

export default Button;
