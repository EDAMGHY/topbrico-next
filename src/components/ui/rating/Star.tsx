export const Star = ({ fillPercentage }: { fillPercentage: number }) => {
  return (
    <div className="relative w-6 h-6 bg-zinc-600 clip-star overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-orange-500"
        style={{ width: `${fillPercentage}%` }}
      ></div>
    </div>
  );
};
