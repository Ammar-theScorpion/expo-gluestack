import { createAuth } from '@coinbits/auth';

import { API_URL } from './constants';

export const authService = createAuth({
  baseUrl: API_URL,
  endpoints: {
    signin: '/rest/auth/signin',
    signup: '/rest/auth/signup',
    verify: '/rest/auth/verify',
    logout: '/rest/auth/logout',
  },
});
