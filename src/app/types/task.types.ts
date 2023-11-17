export interface ITask {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export interface ITaskState {
  tasks: ITask[];
  loading: boolean;
  error: unknown;
}