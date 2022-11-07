import { InitialDataType } from "../../types/InitialDataType";

export const initialData: InitialDataType = {
  tasks: {
    1: {
      id: 1,
      content: "Configure Next.js application",
      icon: "✨",
      status: { type: "Urgent", color: "#e8b7b0" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    2: {
      id: 2,
      content: "Configure Next.js and tailwind ",
      icon: "🔧",
      status: { type: "Priority", color: "#68b6f0" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    3: {
      id: 3,
      content: "Create sidebar navigation menu",
      icon: "🚧",
      status: { type: "Normal", color: "#5daca0" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    4: {
      id: 4,
      content: "Create page footer",
      icon: "🚧",
      status: { type: "Low", color: "#2aa18e" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    5: {
      id: 5,
      content: "Create page navigation menu",
      icon: "📏",
      status: { type: "None", color: "#68788c" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    6: {
      id: 6,
      content: "Create page layout",
      icon: "💄",
      status: { type: "None", color: "#68788c" },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: [1, 2],
      color: "#7a8999",
    },
    "column-2": {
      id: "column-2",
      title: "Progress",
      taskIds: [4, 5],
      color: "#6abeb1",
    },
    "column-3": {
      id: "column-3",
      title: "Review",
      taskIds: [3],
      color: "#f4bdb2",
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: [6],
      color: "#6995f0",
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};
