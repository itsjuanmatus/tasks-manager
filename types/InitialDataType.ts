export interface InitialDataType {
  tasks: { [key: string]: { id: number; content: string; icon: string } };
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
