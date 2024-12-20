import { getDictionary, getUsers } from "@/actions";

export default async function Home() {
  const dict = await getDictionary();
  const users = await getUsers();

  return (
    <div className="h-full grid place-content-center gap-y-5 grow">
      <p className="text-3xl font-medium">{dict.home.title}</p>

      <div className="space-y-2">
        <p className="font-medium">Render from server</p>
        <ul className="space-y-1">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id}>
              {user.id} {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
