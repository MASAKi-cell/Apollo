import gql from 'graphql-tag'

export const ALL_POSTS=gql`
  query{
      post{
          id
          title
          author
      }    
  }
thoch
`