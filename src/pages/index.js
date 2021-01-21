import { Box } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'

const Index = () => {
	return (
		<Box>
			<Box
				sx={{
					pt: '48px',
					m: '0 auto',
					textAlign: 'center'
				}}>
				<h1>Welcome to the Edge & Node coding challenge!</h1>
			</Box>
		</Box>
	)
}

export default withApollo(Index, { ssr: false })

