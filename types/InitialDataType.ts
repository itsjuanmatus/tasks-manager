export interface Task {
  id: number;
  content: string;
  icon: string;
  status: {
    type: "Urgent" | "Priority" | "Normal" | "Low" | "None";
    color: string;
  };
  description?: string;
}

export interface InitialDataType {
  tasks: {
    [key: string]: Task;
  };
  columns: {
    [key: string]: {
      id: string;
      title: string;
      taskIds: number[];
      color: string;
    };
  };
  columnOrder: string[];
}
