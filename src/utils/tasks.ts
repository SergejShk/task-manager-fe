import { EStatus, ITask, ITaskFormValues } from '../interfaces/tasks';
import { statusValue } from './constants';

export const defaultTaskFormValues = (
  initialTask?: ITask
): ITaskFormValues => ({
  title: initialTask?.title || '',
  description: initialTask?.description || '',
  assignee: initialTask?.assignee || '',
  dueDate: initialTask?.dueDate,
  status: initialTask
    ? { label: statusValue[initialTask.status], value: initialTask.status }
    : { label: 'Open', value: EStatus.Open },
});
