import { getConfirmDialogProps } from '../../src'

describe('Confirm Dialog CSS', () => {
  const baseClass = 'ps-confirm-dialog'
  const result = {
    cancelBtnOptions: {
      usage: 'outline',
    },
    agreeBtnOptions: {
      sentiment: 'action',
    },
    confirmTitle: {
      id: '',
      className: `${baseClass}-title confirmDialogTitle`,
    },
    confirmBody: {
      id: '',
      className: `${baseClass}-body`,
    },
    backdrop: {
      className: `${baseClass}-backdrop confirmDialogBackdrop`,
    },
    buttonGroup: {
      className: `${baseClass}-btn-group confirmDialogBtnGroup`,
    },
    cancelButton: {
      className: `${baseClass}-cancel confirmDialogCancelBtn`,
    },
    focusGuard: {
      ['data-aria-hidden']: true,
      ['data-focus-guard']: true,
      tabIndex: 0,
      className: `${baseClass}-focus-guard confirmFocusGuard`,
    },
    section: {
      ['aria-modal']: true,
      ['aria-describedby']: '',
      ['aria-labelledby']: '',
      id: '',
      role: 'alertdialog',
      tabIndex: -1,
      className: `${baseClass}-section confirmDialogSection`,
    },
    wrapper: {
      ['data-focus-lock-disabled']: false,
      tabIndex: -1,
      className: `${baseClass} confirmDialogWrapper`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getConfirmDialogProps()).toEqual(result)
  })

  test('should accept a non-destructive kind type', () => {
    const headerId = 'nd-header-test'
    const bodyId = 'nd-body-test'

    expect(
      getConfirmDialogProps({
        kind: 'non-destructive',
        id: 'nd-test',
        headerId,
        bodyId,
      })
    ).toEqual({
      ...result,
      confirmBody: {
        ...result.confirmBody,
        id: bodyId,
      },
      confirmTitle: {
        ...result.confirmTitle,
        id: headerId,
      },
      section: {
        ...result.section,
        ['aria-describedby']: bodyId,
        ['aria-labelledby']: headerId,
        id: 'nd-test',
      },
    })
  })

  test('should accept a destructive kind type', () => {
    const id = 'test'
    const headerId = 'header-test'

    expect(
      getConfirmDialogProps({
        kind: 'destructive',
        id,
        headerId,
        bodyId: 'body-test',
      })
    ).toEqual({
      ...result,
      agreeBtnOptions: {
        sentiment: 'danger',
      },
      confirmBody: {
        ...result.confirmBody,
        id: 'body-test',
      },
      confirmTitle: {
        ...result.confirmTitle,
        id: headerId,
      },
      section: {
        ...result.section,
        ['aria-describedby']: 'body-test',
        ['aria-labelledby']: headerId,
        id,
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      getConfirmDialogProps({
        id: '',
        headerId: '',
        bodyId: '',
        tech: 'svelte',
      })
    ).toEqual({
      ...result,
      confirmTitle: {
        id: '',
        class: `${baseClass}-title confirmDialogTitle`,
      },
      confirmBody: {
        id: '',
        class: `${baseClass}-body`,
      },
      backdrop: {
        class: `${baseClass}-backdrop confirmDialogBackdrop`,
      },
      buttonGroup: {
        class: `${baseClass}-btn-group confirmDialogBtnGroup`,
      },
      cancelButton: {
        class: `${baseClass}-cancel confirmDialogCancelBtn`,
      },
      focusGuard: {
        ['data-aria-hidden']: true,
        ['data-focus-guard']: true,
        tabIndex: 0,
        class: `${baseClass}-focus-guard confirmFocusGuard`,
      },
      section: {
        ['aria-modal']: true,
        ['aria-describedby']: '',
        ['aria-labelledby']: '',
        id: '',
        role: 'alertdialog',
        tabIndex: -1,
        class: `${baseClass}-section confirmDialogSection`,
      },
      wrapper: {
        ['data-focus-lock-disabled']: false,
        tabIndex: -1,
        class: `${baseClass} confirmDialogWrapper`,
      },
    })
  })
})
