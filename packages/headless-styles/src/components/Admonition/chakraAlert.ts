import styles from './generated/admonitionCSS.module'

const chakraAlertStyle = {
  container: {
    ...styles.admonitionWrapper,
  },
  title: {
    ...styles.admonitionText,
    ...styles.admonitionTitle,
    fontVariationSettings: "'wght' 700",
    fontWeight: 700,
    fontSize: '1rem',
    marginBottom: '4px',
  },
  description: {
    ...styles.admonitionText,
    ...styles.admonitionDescription,
    fontVariationSettings: "'wght' 500",
    fontWeight: 500,
    fontSize: '0.875rem',
  },
  icon: {
    ...styles.admonitionIconWrapper,
    height: 'initial',
  },
  spinner: {},
}

export const ChakraAlert = {
  parts: ['container', 'title', 'description', 'icon', 'spinner'],
  baseStyle: chakraAlertStyle,
  variants: {
    info: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.infoAdmonition,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.infoAdmonition['&::before'],
        },
      },
    },
    success: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.successAdmonition,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.successAdmonition['&::before'],
        },
      },
    },
    warning: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.warningAdmonition,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.warningAdmonition['&::before'],
        },
      },
    },
    danger: {
      ...chakraAlertStyle,
      container: {
        ...chakraAlertStyle.container,
        ...styles.dangerAdmonition,
        _before: {
          ...chakraAlertStyle.container['&::before'],
          ...styles.dangerAdmonition['&::before'],
        },
      },
    },
    subtle: chakraAlertStyle,
    'left-accent': chakraAlertStyle,
    'top-accent': chakraAlertStyle,
    solid: chakraAlertStyle,
  },
}
