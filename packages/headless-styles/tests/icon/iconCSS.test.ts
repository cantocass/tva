import { getIconProps } from '../../src'

describe('Icon CSS', () => {
  describe('getIconProps', () => {
    const baseClass = 'ps-icon'
    const result = {
      'aria-hidden': false,
      'aria-label': 'icon',
      className: `${baseClass} mIconSize`,
      role: 'img',
    }

    test('should allow no props to be passed in', () => {
      expect(getIconProps()).toEqual(result)
    })

    test('should accept a size type', () => {
      expect(getIconProps({ size: 's' })).toEqual({
        ...result,
        className: `${baseClass} sIconSize`,
      })
      expect(getIconProps({ size: 'm' })).toEqual(result)
      expect(getIconProps({ size: 'l' })).toEqual({
        ...result,
        className: `${baseClass} lIconSize`,
      })
    })

    test('should accept a custom size', () => {
      expect(getIconProps({ customSize: '5rem' })).toEqual({
        ...result,
        className: 'ps-icon customIconSize',
        height: '5rem',
        width: '5rem',
      })
    })

    test('should accept a tech type', () => {
      expect(getIconProps({ tech: 'svelte' })).toEqual({
        'aria-label': result['aria-label'],
        'aria-hidden': result['aria-hidden'],
        role: result.role,
        class: `ps-icon psIcon mIconSize`,
      })
    })

    test('should accept an ariaLabel', () => {
      expect(getIconProps({ ariaLabel: 'my label' })).toEqual({
        ...result,
        'aria-label': 'my label',
      })
    })

    test('should accept an ariaHidden flag', () => {
      expect(getIconProps({ ariaHidden: true })).toEqual({
        ...result,
        'aria-hidden': true,
      })
      expect(getIconProps({ ariaHidden: false })).toEqual({
        ...result,
        'aria-hidden': false,
      })
    })
  })
})
