import tasks from "@/lib/data";

export async function GET(request, { params }) {
  const { id } = await params;
  const taskId=Number(id);
  const task = tasks.find(
    (t) => t.id === taskId
  );

  if (!task) {
    return Response.json(
      { error: "Not found" },
      { status: 404 }
    );
  }

  return Response.json(task);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const taskId=Number(id);
  const taskIndex = tasks.findIndex(
    (t) => t.id === taskId
  );
  if(taskIndex === -1) {
    return Response.json(
      { error: "Not found" },
      { status: 404 }
    );
  }
  const body = await request.json();
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...body,
  };
  return Response.json(tasks[taskIndex]);
}