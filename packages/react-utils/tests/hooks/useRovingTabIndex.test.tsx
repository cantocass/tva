import { render, screen } from 'test-utils'
import { useRovingTabIndex } from '../../src'

describe('useMenuKeyNavigation', () => {
  function TestButton(props: { label: string }) {
    const rovingIndexProps = useRovingTabIndex()
    return <button {...rovingIndexProps}>{props.label}</button>
  }

  function FocusTest() {
    return (
      <>
        <TestButton label="Button 1" />
        <TestButton label="Button 2" />
      </>
    )
  }

  beforeEach(async () => {
    render(<FocusTest />)
  })

  test('should set tabindex to -1 initially', () => {
    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('tabindex', '-1')
    expect(buttons[1]).toHaveAttribute('tabindex', '-1')
  })

  test('should set tabindex to 0 when an item is focused', async () => {
    const buttons = screen.getAllByRole('button')

    buttons[0].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '0')
    expect(buttons[1]).toHaveAttribute('tabindex', '-1')
  })

  test('should set tabindex to -1 when a menu item is blurred', async () => {
    const buttons = screen.getAllByRole('button')

    buttons[0].focus()
    buttons[1].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '-1')
    expect(buttons[1]).toHaveAttribute('tabindex', '0')
  })
})
