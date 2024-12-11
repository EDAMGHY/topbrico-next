import Image from "next/image";

import { IProfileType } from "@/types";
import { RegisterForm } from "./RegisterForm";

export const Register = ({ type }: { type: IProfileType }) => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="p-5 space-y-4">
        <h1 className="text-4xl font-bold">Register</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          eveniet!
        </p>
        {type}
        <RegisterForm />
      </div>
      <div className="relative size-full">
        <Image src={"https://picsum.photos/1600/1600"} fill alt="register" />
      </div>
    </section>
  );
};
