import { filters } from "@/lib/mock-data";
import { Checkbox } from "@/ui";
import React from "react";

export const Filters = () => {
  return (
    <aside className="md:sticky top-[64px] shrink-0 mb-5 w-full md:w-[calc(20%-32px)] mdDown:border-b md:border-r border-zinc-700">
      <h3 className="text-2xl font-bold mb-4">Filters</h3>
      <div className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.name} className="space-y-2">
            <h4 className="text-base">{filter.name} :</h4>
            <ul className="space-y-1.5">
              {filter.options.map((option) => (
                <li className="flex items-center gap-2" key={option.value}>
                  <Checkbox value={option.value} name={filter.name} />
                  <label className="text-sm font-light" htmlFor={filter.name}>
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};
