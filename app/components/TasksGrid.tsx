'use client';

import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";

export default function TasksGrid() {
  const [columnsState, setColumnsState] = useState(initialData);

  const reorderColumnList = (
    sourceCol: {
      id: string;
      title: string;
      taskIds: number[];
      color: string;
    },
    startIndex: number,
    endIndex: number
  ) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
      ...sourceCol,
      taskIds: newTaskIds,
    };

    return newColumn;
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = columnsState.columns[source.droppableId];
    const destinationCol = columnsState.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...columnsState,
        columns: {
          ...columnsState.columns,
          [newColumn.id]: newColumn,
        },
      };
      setColumnsState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...columnsState,
      columns: {
        ...columnsState.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setColumnsState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex items-start gap-x-4 mt-4 w-[95%] mx-auto">
        {columnsState.columnOrder.map((columnId) => {
          const column = columnsState.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => columnsState.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
}



const initialData = {
  tasks: {
    1: { id: 1, content: "Configure Next.js application" },
    2: { id: 2, content: "Configure Next.js and tailwind " },
    3: { id: 3, content: "Create sidebar navigation menu" },
    4: { id: 4, content: "Create page footer" },
    5: { id: 5, content: "Create page navigation menu" },
    6: { id: 6, content: "Create page layout" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: [1, 2, 3, 4, 5, 6],
      color: "#7a8999",
    },
    "column-2": {
      id: "column-2",
      title: "Progress",
      taskIds: [],
      color: "#6abeb1",
    },
    "column-3": {
      id: "column-3",
      title: "Review",
      taskIds: [],
      color: "#f4bdb2",
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: [],
      color: "#6995f0", 
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
} as {
  tasks: { [key: string]: { id: number; content: string } };
  columns: {
    [key: string]: {
      id: string;
      title: string;
      taskIds: number[];
      color: string;
    };
  };
  columnOrder: string[];
};
