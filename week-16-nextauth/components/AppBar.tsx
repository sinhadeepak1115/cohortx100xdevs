"use client";
import { useRouter } from "next/navigation";

export const AppBar = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/api/auth/signin");
        }}
      >
        Signin
      </button>
    </div>
  );
};
