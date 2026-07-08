import Link from "next/link";

export default async function TasksList() {

    const res = await fetch('http://localhost:3000/api/tasks/get', { cache: "no-store" });
    const tasks = await res.json();

    return (
        <div className="space-y-4">

            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="bg-gray-900 p-4 rounded-xl shadow flex items-center justify-between"
                >
                    <div>
                        <h3 className="text-lg font-semibold">
                            {task.title}
                        </h3>

                        <p className="text-sm text-gray-400">
                            {task.done ? "✅ Done" : "❌ Not Done"}
                        </p>
                    </div>
                    <div>
                        <Link
                            href={`/tasks/${task.id}/edit`}
                            className="text-yellow-400 hover:text-yellow-300 transition-colors ml-4 mr-4"
                        >
                            Edit
                        </Link>
                        <Link
                            href={`/tasks/${task.id}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            View
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    );
}