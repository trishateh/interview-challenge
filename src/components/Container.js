import { useState } from 'react'
import { Button } from 'theme-ui'
import Search from '../components/Search'
import Table from '../components/Table'

const DEFAULT_NUM_ROWS = 3

const Container = ({ epoches, search, setSearch }) => {
  const [numRows, setNumRows] = useState(DEFAULT_NUM_ROWS)
  const tableData = epoches && epoches.length ? epoches.slice(0, numRows) : null

  return (
    <div>
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Table tableData={tableData} search={search} />
      </div>
      <div
        style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.48)',
        }}
      >
        {numRows} of {epoches.length}
      </div>
      <Button
        onClick={() => setNumRows(numRows + DEFAULT_NUM_ROWS)}
        sx={{
          backgroundColor: 'inherit',
          marginLeft: '649px',
          marginTop: '66px',
          pt: '14.5px 32.5px',
          width: '143px',
          height: '49px',
          border: '1px solid rgba(255,255,255,0.48)',
          borderRadius: '4px',
        }}
      >
        Load More
      </Button>
    </div>
  )
}

export default Container
