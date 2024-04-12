import { statusValue } from './constants';

import {
  EStatus,
  ICreateTaskBody,
  ITask,
  ITaskFormValues,
} from '../interfaces/tasks';

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

export const normalizeCreateTaskBody = (
  formValues: ITaskFormValues
): ICreateTaskBody => ({
  title: formValues.title,
  description: formValues.description,
  assignee: formValues.assignee || undefined,
  dueDate: formValues.dueDate,
  status: formValues.status.value,
});

export const normalizeDefaultTaskFormValues = (
  data?: ITask
): ITaskFormValues => {
  return data
    ? {
        title: data.title,
        description: data.description,
        assignee: data.assignee,
        dueDate: data?.dueDate ? new Date(data.dueDate) : undefined,
        status: { label: statusValue[data.status], value: data.status },
      }
    : {
        title: '',
        description: '',
        assignee: '',
        dueDate: undefined,
        status: { value: EStatus.Open, label: 'Open' },
      };
};
