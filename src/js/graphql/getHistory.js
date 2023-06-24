import { gql } from '@apollo/client';

const GET_HISTORY = gql`
  query getHistories {
    histories {
      contact
      dateRange
      titleCard
      historyType
      info
      id
    }
  }
`;

export default GET_HISTORY;
