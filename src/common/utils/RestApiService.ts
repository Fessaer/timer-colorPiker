import Env from '../../config/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'restApi',
  baseQuery: fetchBaseQuery({ baseUrl: Env().REST_API_URL }),
  endpoints: () => ({}),
});
