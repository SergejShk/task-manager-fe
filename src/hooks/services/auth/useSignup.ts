import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useAuthContext } from '../../../context/AuthContext';

import { signupApi } from '../../../services/auth/signup';

import { ILoginBody, IUser } from '../../../interfaces/auth';

export const useSignup = () => {
  const { setAuth } = useAuthContext();

  return useMutation<IUser, AxiosError, { body: ILoginBody }>({
    mutationFn: async ({ body }) => {
      const data = await signupApi(body);
      setAuth(data);

      return data;
    },
  });
};
