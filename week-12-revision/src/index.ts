interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>;

function update(updatedProps: UpdateProps) {}
