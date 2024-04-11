import { apiInstance } from '../apiInstance';

import { ILoginBody, IUser } from '../../interfaces/auth';

export const signupApi = async (body: ILoginBody) => {
  const { data } = await apiInstance.post<Promise<IUser>>(`auth/sign-up`, body);

  return data;
};
