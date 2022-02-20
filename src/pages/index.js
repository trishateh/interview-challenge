import { Box, Spinner, Flex } from 'theme-ui'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'
import { EPOCHES_QUERY } from '../apollo/queries.js'
import Container from '../components/Container'

const Index = () => {
  const [search, setSearch] = useState('')

  const { loading, error, data } = useQuery(EPOCHES_QUERY, {
    variables: {
      orderBy: 'startBlock',
      orderDirection: 'asc',
      where: search ? { startBlock: Number(search) } : null,
    },
  })

  if (loading) {
    return (
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </Flex>
    )
  }

  if (error) {
    return `Error! ${error}`
  }

  const handleBigInt = (num) => parseInt(num / 10 ** 18)

  const formatData = (data) =>
    data.map((epoch) => ({
      ...epoch,
      queryFeesCollected: handleBigInt(epoch.queryFeesCollected),
      totalRewards: handleBigInt(epoch.totalRewards),
    }))

  return (
    <Box
      sx={{
        backgroundImage: 'url(/Background.jpg)',
        w: '1440px',
        height: '768px',
      }}
    >
      <Box
        sx={{
          pt: '96px',
          pl: '76px',
          m: '0 auto',
          textAlign: 'center',
          bg: 'transparent',
        }}
      >
        <Container
          search={search}
          setSearch={setSearch}
          epoches={data && formatData(data.epoches)}
        />
      </Box>
    </Box>
  )
}

export default withApollo(Index, { ssr: false })
