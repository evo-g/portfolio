import { gql } from '@apollo/client';

const GET_PORJECTS = gql`
  query getProjects {
    projects {
      name
      id
      description
      href
      codeHref
      stack
      publishedAt
      image {
        url
      }
    }
  }
`;

export default GET_PORJECTS;
