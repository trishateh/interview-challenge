import { useCallback, useState } from 'react'
import { Box, Flex, Input, Image } from 'theme-ui'
import debounce from 'lodash/debounce'

const Search = ({ search, setSearch }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)

  const [dbValue, saveToDb] = useState('')

  const debounceSave = useCallback(
    debounce((nextSearch) => saveToDb(nextSearch), 250),
    [],
  )

  const handleChange = (e) => {
    const { search: nextSearch } = e.target
    setSearch(nextSearch)
    debounceSave(nextSearch)
  }

  const handleStopSearch = () => {
    setSearch('')
    setActiveSearch(false)
  }

  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Box>
        <span
          style={{
            marginRight: '10px',
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: 'bold',
            borderRight: '1px solid rgba(255, 255, 255, 0.1',
            paddingRight: '10px',
          }}
        >
          Epochs
        </span>
      </Box>

      {!activeSearch && (
        <Flex onClick={() => setActiveSearch(true)}>
          <Image
            sx={{
              marginRight: '5px',
              width: '12px',
              height: '12px',
              opacity: isHovered ? 0.64 : 0.48,
            }}
            src="/Search.svg"
          />
          <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{ opacity: isHovered ? 0.64 : 0.48 }}
          >
            Search
          </Box>
        </Flex>
      )}
      {activeSearch && (
        <Flex sx={{ alignItems: 'center' }}>
          <Image
            onClick={handleStopSearch}
            src="/close.svg"
            sx={{
              width: '12px',
              height: '12px',
              marginRight: '5px',
            }}
          />

          <Input
            sx={{
              border: 'none',
              cursor: 'default',
              ':hover': { border: 'none' },
              ':focus': { outline: 'none' },
              ':active': { border: 'none' },
            }}
            onChange={handleChange}
            type="number"
          />
        </Flex>
      )}
    </Flex>
  )
}

export default Search
