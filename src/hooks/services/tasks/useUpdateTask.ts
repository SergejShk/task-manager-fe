import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { updateTaskApi } from '../../../services/tasks/updateTask';

import { ITask } from '../../../interfaces/tasks';

export const useUpdateTask = () => {
  return useMutation<ITask, AxiosError, ITask>({
    mutationFn: async body => {
      const data = await updateTaskApi(body);

      return data;
    },
  });
};
