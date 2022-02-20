import { useState, useMemo } from 'react'
import { Image } from 'theme-ui'

const TABLE_HEADERS = {
  id: 'EPOCH',
  startBlock: 'START BLOCK',
  endBlock: 'END BLOCK',
  queryFeesCollected: 'QUERY FEES',
  totalRewards: 'TOTAL REWARDS',
}

const ADD_GRT = ['totalRewards', 'queryFeesCollected']
const ADD_HASH = ['startBlock', 'endBlock']

const Table = ({ tableData }) => {
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedColumn, setSelectedColumn] = useState('startBlock')
  const [activeRow, setActiveRow] = useState(null)

  const handleSortColumn = (headerKey) => {
    if (headerKey === selectedColumn) {
      const orderDirection = sortOrder === 'asc' ? 'desc' : 'asc'
      setSortOrder(orderDirection)
    }
    setSelectedColumn(headerKey)
  }

  const directionIcon = useMemo(
    () => (
      <Image
        sx={{ marginLeft: '5px' }}
        src={sortOrder === 'asc' ? '/Direction-Up.svg' : 'Direction-Down.svg'}
      />
    ),
    [sortOrder],
  )

  const dataDirection = useMemo(() => {
    if (tableData) {
      return tableData.sort((a, b) =>
        sortOrder === 'asc'
          ? a[selectedColumn] > b[selectedColumn]
            ? 1
            : -1
          : a[selectedColumn] < b[selectedColumn]
          ? 1
          : -1,
      )
    }
  }, [tableData, selectedColumn, sortOrder])

  const formatCell = (rowData, dataKey) => {
    if (ADD_GRT.includes(dataKey)) return `${rowData[dataKey]} GRT`
    if (ADD_HASH.includes(dataKey)) return `# ${rowData[dataKey]}`
    return rowData[dataKey]
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(TABLE_HEADERS).map((headerKey) => (
            <th
              key={headerKey}
              onClick={() => handleSortColumn(headerKey)}
              style={{
                fontSize: '10px',
                fontFamily: 'EuclidCircular, Arial',
                textShadow:
                  '0 0 16px 0 rgba(102,216,255,0.32), 0 0 24px 0 rgba(111,76,255,0.16)',
                letterSpacing: '1.2px',
                fontWeight: '500',
                width: '257px',
                height: '46px',
                paddingTop: '17px',
                paddingBottom: '17px',
                paddingLeft: '16px',
                marginLeft: '76px',
                borderBottom:
                  headerKey === selectedColumn
                    ? '1px solid rgba(255, 255, 255, 0.64)'
                    : '1px solid rgba(255, 255, 255, 0.16)',
              }}
            >
              {TABLE_HEADERS[headerKey]}
              {headerKey === selectedColumn && directionIcon}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dataDirection &&
          dataDirection.map((rowData, id) => (
            <tr key={rowData.id}>
              {Object.keys(TABLE_HEADERS).map((dataKey, id) => (
                <td
                  key={`${rowData.id}-${dataKey}`}
                  onMouseEnter={() => setActiveRow(rowData)}
                  style={{
                    width: '257px',
                    height: '64px',
                    fontFamily: 'EuclidCircular, Arial',
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.88)',
                    paddingTop: '20px',
                    marginLeft: '76px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  }}
                >
                  {formatCell(rowData, dataKey)}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Table
