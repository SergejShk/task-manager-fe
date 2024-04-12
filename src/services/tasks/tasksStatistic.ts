import { apiInstance } from '../apiInstance';

import { IStatistic } from '../../interfaces/tasks';

export const getTasksStatisticApi = async () => {
  const { data } = await apiInstance.get<Promise<IStatistic>>(
    `tasks/statistic`
  );

  return data;
};
