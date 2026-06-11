import { NextResponse } from "next/server";

let todos = [
  { id: 1, text: "Learn Context API", done: false },
  { id: 2, text: "Build with Next.js", done: false },
];

export function GET() {
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const todo = { id: Date.now(), text, done: false };
  todos.push(todo);
  return NextResponse.json(todo, { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  todos = todos.filter((t) => t.id !== id);
  return NextResponse.json({ success: true });
}
