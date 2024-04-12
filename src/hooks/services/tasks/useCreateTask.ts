import { useMutation } from '@tanstack/react-query';

import { createTasksApi } from '../../../services/tasks/createTask';

import { ICreateTaskBody, ITask } from '../../../interfaces/tasks';
import { AxiosError } from 'axios';

export const useCreateTask = () => {
  return useMutation<ITask, AxiosError, ICreateTaskBody>({
    mutationFn: async body => {
      const data = await createTasksApi(body);

      return data;
    },
  });
};
