import { getTableProps } from '../../src'

describe('Table CSS', () => {
  const result = {
    table: {
      className: 'ps-table table',
    },
    caption: {
      className: 'ps-table-caption caption',
    },
    headCell: {
      className: 'ps-table-headCell headCell',
      scope: 'col',
    },
    bodyCell: {
      className: 'ps-table-bodyCell bodyCell',
    },
    row: {
      className: 'ps-table-tableRow tableRow',
    },
  }

  test('should allow no props to be passed in', () => {
    expect(getTableProps()).toEqual(result)
  })

  test('should allow a tech option', () => {
    expect(
      getTableProps({
        tech: 'svelte',
      })
    ).toEqual({
      table: {
        class: result.table.className,
      },
      caption: {
        class: result.caption.className,
      },
      headCell: {
        class: result.headCell.className,
        scope: 'col',
      },
      bodyCell: {
        class: result.bodyCell.className,
      },
      row: {
        class: result.row.className,
      },
    })
  })
})
