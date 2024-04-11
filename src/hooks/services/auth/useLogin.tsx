import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useAuthContext } from '../../../context/AuthContext';

import { loginApi } from '../../../services/auth/login';

import { ILoginBody, IUser } from '../../../interfaces/auth';

export const useLogin = () => {
  const { setAuth } = useAuthContext();

  return useMutation<IUser, AxiosError, { body: ILoginBody }>({
    mutationFn: async ({ body }) => {
      const data = await loginApi(body);
      setAuth(data);

      return data;
    },
  });
};
