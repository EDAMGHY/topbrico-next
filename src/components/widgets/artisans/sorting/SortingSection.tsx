import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";

export const SortingSection = ({ length }: { length: number }) => {
  return (
    <div className="flex justify-between items-end gap-5">
      <p className="text-sm">{length} artisans found</p>
      <Select>
        <SelectTrigger className="w-full max-w-[150px]">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="available">Available</SelectItem>
          <SelectItem value="unavailable">Unavailable</SelectItem>
          <SelectItem value="name_az">Name: A-Z</SelectItem>
          <SelectItem value="name_za">Name: Z-A</SelectItem>
          <SelectItem value="location_az">Location: A-Z</SelectItem>
          <SelectItem value="location_za">Location: Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
