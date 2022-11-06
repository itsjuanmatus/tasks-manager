import { Fragment } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Column({
  column,
  tasks,
}: {
  column: any;
  tasks: {
    id: number;
    content: string;
  }[];
}) {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex flex-col w-full">
          <p className="text-xs">{column.title}</p>
          <hr
            className="w-full mt-2 mx-auto h-[2px] border-[1.5px] rounded-full"
            style={{
              borderColor: column.color,
            }}
          />
        </div>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div
              className="flex flex-col gap-y-2 w-full bg-[#f5f6fa] p-2 rounded-md h-full items-start"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, i) => (
                <Draggable
                  draggableId={`draggable-${task.id}`}
                  index={i}
                  key={task.id}
                >
                  {(provided) => (
                    <div
                      className="flex flex-col w-full bg-white h-40 rounded-md p-2"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p className="text-xs">{task.content}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              <div className="h-0">{provided.placeholder}</div>
            </div>
          )}
        </Droppable>
      </div>
    </Fragment>
  );
}
