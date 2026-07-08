import AddTaskForm from "../components/addTaskForm";
import TasksList from "../components/TasksList";

export default async function TasksPage() {

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Tasks
        </h1>

        <div className="mb-8">
          <AddTaskForm />
        </div>

      <TasksList/>
      </div>
    </div>
  );
}