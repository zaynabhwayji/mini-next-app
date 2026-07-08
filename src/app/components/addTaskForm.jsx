'use client';
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function AddTaskForm() {
    const [title, setTitle] = useState("");
    const router = useRouter();
    async function handleSubmit(e) {
        e.preventDefault();

        await fetch(`http://localhost:3000/api/tasks/post`, {
            method: "POST",
            body: JSON.stringify({ title }),
        });

        setTitle("");
        router.refresh();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-gray-900 p-3 rounded-xl shadow-md w-full max-w-md mx-auto"
        >
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                className="shrink-0 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg font-medium"
            >
                Add
            </button>
        </form>
    );
}