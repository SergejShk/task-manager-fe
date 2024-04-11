import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useAuthContext } from '../../../context/AuthContext';

import { getMeApi } from '../../../services/auth/getMe';

import { IUser } from '../../../interfaces/auth';

export const useGetMe = () => {
  const { setAuth } = useAuthContext();

  return useMutation<IUser, AxiosError>({
    mutationFn: async () => {
      const data = await getMeApi();

      const user = data;

      setAuth(user);
      return data;
    },
  });
};
