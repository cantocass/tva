// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  btnBase: {
    alignItems: 'center',
    appearance: 'none',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontVariationSettings: "'wght' 600",
    fontWeight: '600',
    gap: '0.5rem',
    justifyContent: 'center',
    lineHeight: '0',
    minWidth: '2.5rem',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    '&:focus': {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  actionButton: {
    backgroundColor: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-action-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-action-background-active)',
    },
  },
  defaultButton: {
    backgroundColor: 'var(--ps-background)',
    color: 'var(--ps-text)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  dangerButton: {
    backgroundColor: 'var(--ps-danger-background)',
    color: 'var(--ps-danger-text-inverse)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-danger-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-danger-background-active)',
    },
  },
  filledButton: {
    composes: 'btnBase',
  },
  outlineButton: {
    composes: 'btnBase',
    backgroundColor: 'transparent',
    border: '2px solid var(--ps-border-strong)',
    color: 'var(--ps-text)',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-hover)',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'var(--ps-background-active)',
    },
  },
  textButton: {
    composes: 'btnBase',
    backgroundColor: 'transparent',
    color: 'var(--ps-action-navigation)',
    textDecoration: 'underline',
    "&:hover:not([data-disabled='true'])": {
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-hover)',
      textDecoration: 'none',
    },
    "&:active:not([data-disabled='true'])": {
      backgroundColor: 'transparent',
      color: 'var(--ps-action-navigation-visited)',
    },
  },
  mButton: {
    fontSize: '0.875rem',
    height: '2rem',
    paddingInlineEnd: '1.125rem',
    paddingInlineStart: '1.125rem',
  },
  lButton: {
    height: '3rem',
    paddingInlineEnd: '2.156rem',
    paddingInlineStart: '2.156rem',
  },
  btnBase_data_disabled__true: {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
}
