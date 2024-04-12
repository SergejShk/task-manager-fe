import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { deleteTaskApi } from '../../../services/tasks/deleteTask';

export const useDeleteTask = () => {
  return useMutation<boolean, AxiosError, number>({
    mutationFn: async id => {
      const data = await deleteTaskApi(id);

      return data;
    },
  });
};
