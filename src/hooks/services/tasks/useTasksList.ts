import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getTasksApi } from '../../../services/tasks/getTasks';

import { ITask } from '../../../interfaces/tasks';

export const useTasksList = () => {
  return useQuery<ITask[] | null, AxiosError>({
    queryKey: ['tasks-list'],
    queryFn: async () => {
      return await getTasksApi();
    },
  });
};
