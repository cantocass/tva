// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  textareaBase: {
    appearance: 'none',
    background: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border)',
    borderImage: 'initial',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'var(--ps-text-medium)',
    fontFamily: 'inherit',
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionDuration: '150ms',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    width: '100%',
    '&:active': {
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  initialTextarea: {
    composes: 'textareaBase',
  },
  noneTextarea: {
    composes: 'textareaBase',
    resize: 'none',
  },
  horizontalTextarea: {
    composes: 'textareaBase',
    resize: 'horizontal',
  },
  verticalTextarea: {
    composes: 'textareaBase',
    resize: 'vertical',
  },
  textareaBase_data_disabled__true: {
    opacity: '0.5',
    cursor: 'not-allowed',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  textareaBase_data_invalid__true: {
    borderColor: 'var(--ps-danger-border)',
    boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
  },
  textareaBase_data_readonly__true: {
    cursor: 'not-allowed',
    '&:hover': {
      boxShadow: 'none',
    },
  },
}
