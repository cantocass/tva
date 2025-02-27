// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  topPosition: {
    bottom: '100%',
    paddingBottom: '12px',
    '&::after': {
      borderColor:
        'var(--ps-surface-inverse) transparent transparent transparent',
      bottom: '0',
    },
  },
  bottomPosition: {
    paddingTop: '12px',
    top: '100%',
    '&::after': {
      borderColor:
        'transparent transparent var(--ps-surface-inverse) transparent',
      top: '0',
    },
  },
  leftPosition: {
    paddingRight: '12px',
    right: '100%',
    '&::after': {
      borderColor:
        'transparent transparent transparent var(--ps-surface-inverse)',
      right: '0',
    },
  },
  rightPosition: {
    left: '100%',
    paddingLeft: '12px',
    '&::after': {
      borderColor:
        'transparent var(--ps-surface-inverse) transparent transparent',
      left: '0',
    },
  },
  horizontalCenter: {
    left: '50%',
    transform: 'translateX(-50%)',
    '&::after': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  horizontalStart: {
    left: '0',
    '&::after': {
      left: '4px',
    },
  },
  horizontalEnd: {
    right: '0',
    '&::after': {
      right: '4px',
    },
  },
  verticalCenter: {
    top: '50%',
    transform: 'translateY(-50%)',
    '&::after': {
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  verticalStart: {
    top: '0',
    '&::after': {
      top: '4px',
    },
  },
  verticalEnd: {
    bottom: '0',
    '&::after': {
      bottom: '4px',
    },
  },
  topTooltip: {
    composes: 'topPosition horizontalCenter',
  },
  topStartTooltip: {
    composes: 'topPosition horizontalStart',
  },
  topEndTooltip: {
    composes: 'topPosition horizontalEnd',
  },
  bottomTooltip: {
    composes: 'bottomPosition horizontalCenter',
  },
  bottomStartTooltip: {
    composes: 'bottomPosition horizontalStart',
  },
  bottomEndTooltip: {
    composes: 'bottomPosition horizontalEnd',
  },
  leftTooltip: {
    composes: 'leftPosition verticalCenter',
  },
  leftStartTooltip: {
    composes: 'leftPosition verticalStart',
  },
  leftEndTooltip: {
    composes: 'leftPosition verticalEnd',
  },
  rightTooltip: {
    composes: 'rightPosition verticalCenter',
  },
  rightStartTooltip: {
    composes: 'rightPosition verticalStart',
  },
  rightEndTooltip: {
    composes: 'rightPosition verticalEnd',
  },
}
