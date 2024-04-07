import { AppBar } from "@/components/Appbar";
import { getServerSession } from "next-auth";

export default async function () {
  const session = await getServerSession();
  return (
    <div>
      <AppBar />
      User Component
      {JSON.stringify(session)}
    </div>
  );
}
