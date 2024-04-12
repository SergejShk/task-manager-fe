import { apiInstance } from '../apiInstance';

import { ITask } from '../../interfaces/tasks';

export const getTasksApi = async () => {
  const { data } = await apiInstance.get<Promise<ITask[]>>(`tasks`);

  return data;
};
