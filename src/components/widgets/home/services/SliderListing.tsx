import { categories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const SliderListing = () => {
  return (
    <div className="lg:col-span-2 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <div
          key={index}
          className={cn(
            "w-full flex gap-6 rounded items-center justify-start border border-zinc-800 bg-neutral-900/80 p-4",
            [0, 3, 4, 7, 8].includes(index) ? "lg:col-span-2" : "lg:col-span-1"
          )}
        >
          <category.icon className="shrink-0" size={32} />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{category.name}</h3>
            <p className="text-sm">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
