import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import DocIcon from "./DocIcon";
import { Button } from "@/lib/materialTailwind";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <DocIcon width={48} height={48} />
      <h1 className="text-3xl text-gray-700">Google Docs</h1>
      <Button color="blue" onClick={() => signIn()}>
        Login
      </Button>
    </div>
  );
};

export default Login;
