import { Button, Link } from "@/ui";
import { Danger } from "iconsax-react";

export default function NotFound() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="space-y-6">
        <Danger size={100} variant="Bold" className="text-red-500" />
        <div>
          <h2 className="text-7xl mb-2 font-bold">Not Found</h2>
          <p className="font-light text-lg">
            Could not find requested resource
          </p>
        </div>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </section>
  );
}
