export enum Status {
  TODO = 'todo',
  INPROGRESS = 'inProgress',
  COMPLETED = 'completed',
}

export type TodoCreateType = {
  task: string;
  status: Status;
  image?: string;
};

export type TodoUpdateType = {
  id: string;
  task?: string;
  status?: Status;
  image?: string;
};

export type TodoType = {
  id: string;
  task: string;
  status: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
};
