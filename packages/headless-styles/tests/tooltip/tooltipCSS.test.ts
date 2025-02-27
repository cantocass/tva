import { getTooltipProps } from '../../src'

describe('Tooltip CSS', () => {
  const baseClass = 'ps-tooltip'
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper tooltipWrapper`,
    },
    tooltip: {
      className: `${baseClass} tooltip topTooltip`,
      'data-disabled': false,
      'data-tooltip': true,
      id: 'tooltip',
      role: 'tooltip',
    },
    tooltipContent: {
      className: `${baseClass}-content tooltipContent`,
    },
    trigger: {
      'aria-describedby': 'tooltip',
      className: `${baseClass}-trigger tooltipTrigger`,
      tabIndex: 0,
    },
  }

  test('should accept a tooltip ID', () => {
    const tooltipId = 'tooltip-test'

    expect(
      getTooltipProps({
        id: tooltipId,
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        id: tooltipId,
      },
      trigger: {
        ...result.trigger,
        'aria-describedby': tooltipId,
      },
    })
  })

  test('should accept a disabled option', () => {
    const tooltipId = 'tooltip-test'

    expect(
      getTooltipProps({
        id: tooltipId,
        disabled: true,
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        'data-disabled': true,
        id: tooltipId,
      },
      trigger: {
        ...result.trigger,
        'aria-describedby': tooltipId,
      },
    })
  })

  test('should accept a position of topStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'topStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topStartTooltip`,
      },
    })
  })

  test('should accept a position of top', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'top',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topTooltip`,
      },
    })
  })

  test('should accept a position of topEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'topEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topEndTooltip`,
      },
    })
  })

  test('should accept a position of right', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'right',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightTooltip`,
      },
    })
  })

  test('should accept a position of rightStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'rightStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightStartTooltip`,
      },
    })
  })

  test('should accept a position of rightEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'rightEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightEndTooltip`,
      },
    })
  })

  test('should accept a position of bottom', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottom',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomTooltip`,
      },
    })
  })

  test('should accept a position of bottomStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottomStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomStartTooltip`,
      },
    })
  })

  test('should accept a position of bottomEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottomEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomEndTooltip`,
      },
    })
  })

  test('should accept a position of left', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'left',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftTooltip`,
      },
    })
  })

  test('should accept a position of leftStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'leftStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftStartTooltip`,
      },
    })
  })

  test('should accept a position of leftEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'leftEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftEndTooltip`,
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        tech: 'svelte',
      })
    ).toEqual({
      wrapper: {
        class: `${baseClass}-wrapper tooltipWrapper`,
      },
      tooltip: {
        class: `${baseClass} tooltip topTooltip`,
        'data-disabled': false,
        'data-tooltip': true,
        id: 'tooltip',
        role: 'tooltip',
      },
      tooltipContent: {
        class: `${baseClass}-content tooltipContent`,
      },
      trigger: {
        'aria-describedby': 'tooltip',
        class: `${baseClass}-trigger tooltipTrigger`,
        tabIndex: 0,
      },
    })
  })
})
