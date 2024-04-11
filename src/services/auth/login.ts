import { apiInstance } from '../apiInstance';

import { ILoginBody, IUser } from '../../interfaces/auth';

export const loginApi = async (body: ILoginBody) => {
  const { data } = await apiInstance.post<Promise<IUser>>(`auth/login`, body);

  return data;
};
