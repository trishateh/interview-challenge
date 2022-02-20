import { gql } from 'apollo-boost'

export const EPOCHES_QUERY = gql`
  query epoches($orderBy: String!, $orderDirection: String!, $where: Epoch_filter) {
    epoches(orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      startBlock
      endBlock
      queryFeesCollected
      totalRewards
    }
  }
`
