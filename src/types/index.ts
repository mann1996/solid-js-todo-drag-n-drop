export type Todo = {
  id: string;
  title: string;
  description?: string;
  status?: TodoStatus;
};

export enum TodoStatus {
  TODO,
  INPROGRESS,
  DONE,
}
