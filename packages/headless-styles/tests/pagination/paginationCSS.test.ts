import { getPaginationProps } from '../../src'

describe('Pagination CSS', () => {
  const baseClass = 'ps-pagination'
  const result = {
    container: {
      className: `${baseClass} paginationContainer`,
      style: {
        gridTemplateColumns: 'repeat(1, 1fr)',
        textAlign: 'center',
      },
    },
    newer: {
      className: `${baseClass}-newer paginationNewer`,
    },
    older: {
      className: `${baseClass}-older paginationOlder`,
    },
    text: {
      className: `${baseClass}-text paginationText`,
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getPaginationProps()).toEqual(result)
  })

  test('should accept a tech type', () => {
    expect(getPaginationProps({ tech: 'svelte' })).toEqual({
      container: {
        class: result.container.className,
        style: result.container.style,
      },
      newer: {
        class: result.newer.className,
      },
      older: {
        class: result.older.className,
      },
      text: {
        class: result.text.className,
      },
    })
  })
})
