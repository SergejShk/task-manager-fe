import { apiInstance } from '../apiInstance';

export const logOutApi = async () => {
  const { data } = await apiInstance.get<Promise<boolean>>(`auth/logout`);

  return data;
};
