import { grid } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import {
  getDefaultGridOptions,
  getDefaultGridItemOptions,
  createGridProps,
  createGridItemProps,
} from './shared'
import type { GridOptions, GridItemOptions } from './types'
import styles from './gridCSS.module.css'

const GRID = 'ps-grid'

export function getGridProps(options?: GridOptions) {
  const { tech, ...defaultOptions } = getDefaultGridOptions(options)
  const props = createGridProps(defaultOptions)

  if (grid) {
    return {
      ...props,
      ...createClassProp(tech, {
        defaultClass: `${GRID} ${styles.gridContainer}`,
        svelteClass: `${GRID} gridContainer`,
      }),
    }
  }

  return null
}

export function getGridItemProps(options?: GridItemOptions) {
  const { tech, ...defaultOptions } = getDefaultGridItemOptions(options)
  const props = createGridItemProps(defaultOptions)

  if (grid) {
    return {
      ...props,
      ...createClassProp(tech, {
        defaultClass: `${GRID}-item`,
        svelteClass: `${GRID}-item`,
      }),
    }
  }

  return null
}
