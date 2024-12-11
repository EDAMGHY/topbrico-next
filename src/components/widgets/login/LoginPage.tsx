import Image from "next/image";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative size-full">
        <Image src={"https://picsum.photos/1400/1400"} fill alt="login" />
      </div>
      <div className="p-5 space-y-4">
        <h1 className="text-4xl font-bold">Login</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          eveniet!
        </p>
        <LoginForm />
      </div>
    </section>
  );
};
