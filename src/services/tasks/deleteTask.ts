import { apiInstance } from '../apiInstance';

export const deleteTaskApi = async (id: number) => {
  const { data } = await apiInstance.delete<Promise<boolean>>(`tasks/${id}`);

  return data;
};
