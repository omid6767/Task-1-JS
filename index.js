const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js interview",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];
function filterNotesList(
  data,
  { sort = "latest", search = "", status = "all" }
) {
  return data
    .filter(
      (item) =>
        (status === "completed" && item.completed) ||
        (status === "uncompleted" && !item.completed) ||
        status === "all"
    )
    .filter((item) =>
      item.title.toLowerCase().trim().includes(search.toLowerCase().trim())
    )
    .sort((a, b) =>
      sort === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );
}
console.log(
  filterNotesList(notesList, { sort: "latest", status: "all", search: " Study" })
);
