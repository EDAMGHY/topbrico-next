import { INotFoundBlock } from "@/types";
import { CircleSlash } from "lucide-react";

const defaultProps = {
  message: "This item is not found, please check the url and try again...",
};

export const NotFoundBlock = ({
  message = defaultProps.message,
}: INotFoundBlock) => {
  return (
    <div className="p-10 border border-zinc-800 rounded-md flex items-center flex-col justify-center gap-5">
      <CircleSlash size={150} className="shrink-0" />
      <div className="text-center space-y-5">
        <h2 className="text-4xl font-bold leading-[46px]">Ooops!</h2>
        <p className="text-sm leading-6 font-light">{message}</p>
      </div>
    </div>
  );
};
