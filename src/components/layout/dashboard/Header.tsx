import { formatDate } from "@/lib/utils";
import { SidebarTrigger } from "@/ui";

export const Header = ({ title }: { title: string }) => {
  const date = new Date();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4 border-b border-zinc-700 py-2 px-4">
      <div className="flex justify-start items-center gap-4">
        <SidebarTrigger />
        {title && <h2 className="text-xl">{title}</h2>}
      </div>
      <p className="text-sm underline underline-offset-4">
        Today: {formatDate(date)}
      </p>
    </div>
  );
};
