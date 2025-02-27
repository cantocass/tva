import { createClassProp } from '../../utils/helpers'
import {
  createTooltipProps,
  getDefaultTooltipOptions,
  getTooltipClasses,
} from './shared'
import tooltipStyles from './tooltipCSS.module.css'
import positionStyles from './tooltipPositioning.module.css'
import type { TooltipOptions } from './types'

const TOOLTIP = 'ps-tooltip'

export function getTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const tech = defaultOptions.tech
  const props = createTooltipProps(defaultOptions)
  const { positionClass } = getTooltipClasses(defaultOptions.position)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP}-wrapper tooltipWrapper`,
        defaultClass: `${TOOLTIP}-wrapper ${tooltipStyles.tooltipWrapper}`,
      }),
    },
    tooltip: {
      ...props.tooltip,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP} tooltip ${positionClass}`,
        defaultClass: `${TOOLTIP} ${tooltipStyles.tooltip} ${
          positionStyles[positionClass as keyof typeof positionStyles]
        }`,
      }),
    },
    tooltipContent: {
      ...props.tooltipContent,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP}-content tooltipContent`,
        defaultClass: `${TOOLTIP}-content ${tooltipStyles.tooltipContent}`,
      }),
    },
    trigger: {
      ...props.trigger,
      ...createClassProp(tech, {
        svelteClass: `${TOOLTIP}-trigger tooltipTrigger`,
        defaultClass: `${TOOLTIP}-trigger ${tooltipStyles.tooltipTrigger}`,
      }),
    },
  }
}
