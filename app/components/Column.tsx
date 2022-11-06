import { Fragment } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import girl1 from "../../public/girl-1.jpg";
import girl2 from "../../public/girl-2.jpg";
import Image from "next/image";
import { InitialDataType } from "../../types/InitialDataType";

export default function Column({
  column,
  tasks,
}: {
  column: InitialDataType["columns"][0];
  tasks: {
    id: number;
    content: string;
    icon: string;
  }[];
}) {
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 w-full h-full">
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
              className="flex flex-col gap-y-2 w-full bg-[#f5f6fa] p-2 rounded-md items-start h-full overflow-y-auto"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, i) => (
                <Draggable
                  draggableId={`draggable-${task.id}`}
                  index={i}
                  key={task.id}
                >
                  {(provided, snapshot) => (
                    <div
                      className="flex flex-col w-full bg-white min-h-40 rounded-md p-4 gap-y-3"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        rotate: snapshot.isDragging ? "7.5deg" : "0deg",
                        boxShadow: snapshot.isDragging
                          ? "0 0 10px rgba(0,0,0,0.2)"
                          : "none",
                      }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-[#f2f5fa]">
                        {task.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-[#55677e]">
                        {task.content}
                      </h3>
                      <p className="text-xs text-[#dddee2]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Image
                            src={girl1}
                            alt="girl 1"
                            className="object-cover h-7 w-7 rounded-full border-[1px] aspect-square"
                          />
                          <Image
                            src={girl2}
                            alt="girl 1"
                            className="object-cover h-7 w-7 rounded-full border-[1px] border-white aspect-square -ml-2"
                          />
                        </div>
                      </div>
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
