'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTaskForm({ task }) {

    const [title, setTitle] = useState(task.title);
    const [done, setDone] = useState(task.done);

    const router = useRouter();


    async function handleSubmit(e) {
        e.preventDefault();

        await fetch(`/api/tasks/get/${task.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                title,
                done
            }),
        });

        router.push("/tasks");
        router.refresh();
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 h-fit bg-gray-900 p-6 rounded-xl shadow-md max-w-md m-auto sm:w-[40vw]"
        >

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-900 text-white p-3 rounded-lg border border-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="button"
                onClick={() => setDone(!done)}
                className="flex items-center gap-2 text-white ">
                {done ? "Completed ✅" : "Not Completed ❌"}
            </button>


            <button className="bg-blue-600 px-4 py-2 rounded-lg  ">
                Save
            </button>

        </form>
    );
}