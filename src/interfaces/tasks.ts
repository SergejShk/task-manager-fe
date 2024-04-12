export enum EStatus {
  Open = 'open',
  InProgress = 'in_progress',
  Done = 'done',
}

export interface ICreateTaskBody {
  title: string;
  description: string;
  assignee?: string;
  dueDate?: Date;
  status: EStatus;
}

export interface ITask extends ICreateTaskBody {
  id: number;
}

export interface ITaskFormValues {
  title: string;
  description: string;
  assignee?: string;
  dueDate?: Date;
  status: { label: string; value: EStatus };
}
