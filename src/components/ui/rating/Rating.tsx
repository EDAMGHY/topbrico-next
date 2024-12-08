import { Star } from "./Star";

export const Rating = ({ rating }: { rating: number }) => {
  const MAX_STARS = 5;

  // Generate an array of stars with their fill percentages
  const stars = Array.from({ length: MAX_STARS }, (_, i) => {
    const remaining = Math.max(0, rating - i); // Remaining value for this star
    return Math.min(1, remaining) * 100; // Fill percentage (0 to 100)
  });

  return (
    <div className="flex space-x-1">
      {stars.map((fill, index) => (
        <Star key={index} fillPercentage={fill} />
      ))}
    </div>
  );
};
