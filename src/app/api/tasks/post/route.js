import tasks from "@/lib/data";

export async function POST(request) {
  const body = await request.json();
  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    done: false,
  };

  tasks.push(newTask);

  return Response.json(newTask, { status: 201 });
}