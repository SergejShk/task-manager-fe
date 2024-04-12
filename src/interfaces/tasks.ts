export enum EStatus {
  Open = 'open',
  InProgress = 'in_progress',
  Done = 'done',
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  assignee?: string;
  dueDate?: Date;
  status: EStatus;
}

export interface ITaskFormValues {
  title: string;
  description: string;
  assignee?: string;
  dueDate?: Date;
  status: { label: string; value: EStatus };
}
