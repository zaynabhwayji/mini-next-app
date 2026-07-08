import EditTaskForm from "../../../components/EditTaskForm";
export default async function EditPage({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/tasks/get/${id}`, { cache: "no-store" });
  const task = await res.json();


    return (
        <div className="min-h-screen bg-gray-950 text-white p-10">

            <EditTaskForm task={task} />

        </div>
    );
}