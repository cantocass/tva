import React, { forwardRef, memo, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getConfirmDialogProps,
} from '@pluralsight/headless-styles'

function ConfirmDialogEl(props, triggerRef) {
  const { onClose, ...confirmProps } = props
  const wrapperRef = useRef(null)
  const confirm = getConfirmDialogProps(confirmProps)
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  useEffect(() => {
    setupFocusTrap()
  }, [setupFocusTrap])

  return (
    <div {...confirm.backdrop}>
      <div {...confirm.focusGuard} />

      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>
          <header>
            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>
          </header>
          <p {...confirm.confirmBody}>{props.body}</p>
          <footer {...confirm.buttonGroup}>
            <button
              {...getButtonProps(confirm.cancelBtnOptions).button}
              onClick={onClose}
            >
              Cancel
            </button>
            <button {...getButtonProps(confirm.agreeBtnOptions).button}>
              {props.confirmText}
            </button>
          </footer>
        </section>
      </div>

      <div {...confirm.focusGuard} />
    </div>
  )
}

const ConfirmDialog = memo(forwardRef(ConfirmDialogEl))

export default ConfirmDialog
