import { apiInstance } from '../apiInstance';

import { ITask } from '../../interfaces/tasks';

export const updateTaskApi = async (body: ITask) => {
  const { id, ...task } = body;

  const { data } = await apiInstance.put<Promise<ITask>>(`tasks/${id}`, task);

  return data;
};
