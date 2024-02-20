import Env from '../../config/env';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(Env().GRAPHQL_API_URL, {
  headers: { authorization: '{token}' },
});

export const api = createApi({
  reducerPath: 'graphQlApi',
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
