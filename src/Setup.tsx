import React, { useEffect } from 'react';
import axios from 'axios';

import { getToken } from '~/auth';
import { setupAuth } from './auth';
import { AXIOS_INSTANCE } from './api/axios-instance';

/**
 * Do all the client-side setup.
 */
export default function Setup({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    /**
     * Make sure auth is initialized (loading the user's credentials from
     * storage and make sure it is in memory)
     */
    setupAuth();

    /**
     * Adds the axios interceptor (this makes sure axios has access to the
     * auth token for its requests)
     */
    const interceptorId = AXIOS_INSTANCE.interceptors.request.use(
      (request) => {
        const token = getToken();

        if (token) {
          request.headers = {
            ...request.headers,
            Authorization: `Bearer ${token}`,
          };
        }

        return request;
      },
      (error) => error
    );

    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, []);

  return <>{children}</>;
}
