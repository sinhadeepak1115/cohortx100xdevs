import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getTodos(userId: number) {
  const response = await prisma.todos.findMany({
    where: {
      userId: userId
    }
  })
  console.log(response)
}
getTodos(1);
