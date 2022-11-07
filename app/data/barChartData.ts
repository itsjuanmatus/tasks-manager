export const chartdata = [
  {
    name: "Data 3",
    "Lorem Ipsum": 2488,
  },
  {
    name: "Data 2",
    "Lorem Ipsum": 1445,
  },
  {
    name: "Data 1",
    "Lorem Ipsum": 743,
  },
  {
    name: "Data 4",
    "Lorem Ipsum": 500,
  },
  {
    name: "Data 5",
    "Lorem Ipsum": 100,
  },
  {
    name: "Data 6",
    "Lorem Ipsum": 300,
  },
  {
    name: "Data 7",
    "Lorem Ipsum": 100,
  },
  {
    name: "Data 8",
    "Lorem Ipsum": 1800,
  },
];

export const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

