import { EStatus } from '../interfaces/tasks';

export const statusOptions = [
  { value: EStatus.Open as string, label: 'Open' },
  { value: EStatus.InProgress as string, label: 'In progress' },
  { value: EStatus.Done as string, label: 'Done' },
];

export const statusValue = {
  [EStatus.Open]: 'Open',
  [EStatus.InProgress]: 'In progress',
  [EStatus.Done]: 'Done',
};
