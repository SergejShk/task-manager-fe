import { apiInstance } from '../apiInstance';

import { ICreateTaskBody, ITask } from '../../interfaces/tasks';

export const createTasksApi = async (body: ICreateTaskBody) => {
  const { data } = await apiInstance.post<Promise<ITask>>(`tasks`, body);

  return data;
};
