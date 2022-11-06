import { InitialDataType } from "../../types/InitialDataType";

export const initialData: InitialDataType = {
  tasks: {
    1: { id: 1, content: "Configure Next.js application", icon: "✨" },
    2: { id: 2, content: "Configure Next.js and tailwind ", icon: "🔧" },
    3: { id: 3, content: "Create sidebar navigation menu", icon: "🚧" },
    4: { id: 4, content: "Create page footer", icon: "🚧" },    
    5: { id: 5, content: "Create page navigation menu" , icon: "📏" },
    6: { id: 6, content: "Create page layout" , icon: "💄" },
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
};
