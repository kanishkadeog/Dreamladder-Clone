let users = [];

export async function POST(req) {
  const body = await req.json();
  users.push(body);

  return Response.json({ message: "User created" });
}