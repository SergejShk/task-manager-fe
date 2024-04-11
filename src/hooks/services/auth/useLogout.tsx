import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { initialState, useAuthContext } from '../../../context/AuthContext';

import { logOutApi } from '../../../services/auth/logout';

export const useLogOut = () => {
  const { setAuth } = useAuthContext();

  return useMutation<boolean, AxiosError>({
    mutationFn: async () => {
      const data = await logOutApi();

      setAuth(initialState);
      return data;
    },
  });
};
