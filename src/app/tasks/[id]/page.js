const TaskPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/tasks/get/${id}`, { cache: "no-store" });
  const task = await res.json();
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4"> {task.title} </h1>
        <p className="text-gray-300 text-lg">
          Status:
          <span
            className={`ml-2 font-semibold ${task.done ? "text-green-400" : "text-red-400"}`}
          >
            {task.done ? "✅ Done" : "❌ Not Done"}
          </span>
        </p>
      </div>
    </div >
  );
}
export default TaskPage;