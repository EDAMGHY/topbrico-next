import { Button, Link } from "@/ui";

export const ContactUsSection = () => {
  return (
    <section className="bg-zinc-900 w-full border-2 border-zinc-800 rounded p-10">
      <div className="space-y-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          delectus temporibus. Cupiditate aperiam molestias officia quibusdam
          iure ut similique voluptatum, quasi expedita. Pariatur impedit aut a?
          Dicta nam consequuntur qui.
        </p>
        <Button>
          <Link href="mailto:damriabdellah@gmail.com">
            Contact us through here
          </Link>
        </Button>
      </div>
    </section>
  );
};
