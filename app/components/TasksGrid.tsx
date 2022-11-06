"use client";

import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./Column";
import { initialData } from "../data/initialData";
import { InitialDataType } from "../../types/InitialDataType";

export default function TasksGrid() {
  const [columnsState, setColumnsState] = useState(initialData);

  const reorderColumnList = (
    sourceCol: InitialDataType['columns'][0],
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
      <div className="flex items-start gap-x-4 mt-4 md:max-w-[95%] md:mx-auto h-[73vh] max-w-[100vw] overflow-x-auto pr-[10vw] md:pr-0">
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
