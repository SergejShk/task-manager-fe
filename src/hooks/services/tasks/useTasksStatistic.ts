import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { getTasksStatisticApi } from '../../../services/tasks/tasksStatistic';

import { IStatistic } from '../../../interfaces/tasks';

export const useTasksStatistic = () => {
  return useQuery<IStatistic | null, AxiosError>({
    queryKey: ['tasks-statistic'],
    queryFn: async () => {
      return await getTasksStatisticApi();
    },
  });
};
