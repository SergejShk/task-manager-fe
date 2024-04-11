import { AxiosError } from 'axios';

import { apiInstance } from '../apiInstance';

import { IUser } from '../../interfaces/auth';

export const refreshApi = async () => {
  return await apiInstance.get(`auth/refresh`);
};

export const getMeApi = async (): Promise<IUser> => {
  try {
    const { data } = await apiInstance.get<Promise<IUser>>(`auth/me`);

    return data;
  } catch (err) {
    const error: AxiosError = err as AxiosError<'string', unknown>;

    if (!error.response) {
      throw err;
    }

    if (error.response?.status === 401) {
      try {
        await refreshApi();

        return await getMeApi();
      } catch (error) {
        throw err;
      }
    }

    throw error;
  }
};
