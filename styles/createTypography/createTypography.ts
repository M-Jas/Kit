const createTypography = (color: string) => {
  const defaults = {
    color,
    fontFamily: 'System',
  };

  return {
    title: {
      ...defaults,
      fontSize: 22,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    subtitle2Bold: {
      ...defaults,
      fontSize: 17,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    subtitle2: {
      ...defaults,
      fontSize: 14,
      letterSpacing: 0.1,
    },
    subtitle1: {
      ...defaults,
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0.15,
    },
    body2: {
      ...defaults,
      fontSize: 14,
      letterSpacing: 0.15,
    },
    body1: {
      ...defaults,
      fontSize: 16,
      letterSpacing: 0.15,
    },
    button: {
      ...defaults,
      fontSize: 14,
      letterSpacing: 0.4,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    caption: {
      ...defaults,
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      ...defaults,
      fontSize: 12,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
  };
};

export default createTypography;
