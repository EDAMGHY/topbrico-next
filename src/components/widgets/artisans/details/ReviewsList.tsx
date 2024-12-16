import { IReview } from "@/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
  Rating,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";

export const ReviewsList = ({ reviews }: { reviews: IReview[] }) => {
  return (
    <div className="space-y-5 border border-zinc-800 rounded-md py-6 px-5 bg-stone-950">
      <h2 className="text-3xl leading-10 font-bold">Reviews :</h2>
      <div className="flex justify-center items-center gap-4 mb-5">
        <Input placeholder="Enter Your Review..." /> <Button>Submit</Button>
      </div>
      <div className="flex justify-start items-center gap-4">
        <p className="text-sm">{reviews.length} reviews. </p>
        <Select>
          <SelectTrigger className="max-w-[150px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest_date">Newest Date</SelectItem>
            <SelectItem value="top_reviews">Top Reviews</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="divide-y divide-zinc-800">
        {reviews.map((review) => (
          <div key={review.id} className="last:pb-0 first:pt-0 py-4 space-y-3">
            <div className="flex justify-start gap-4 items-center flex-wrap">
              <Avatar size="xsmall">
                <AvatarImage
                  src={review.picture}
                  className="object-cover"
                  alt={review.fullName}
                />
                <AvatarFallback>{review.fullName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold leading-7">{review.fullName}</h3>
              <span className="inline-block size-2 shrink-0 bg-zinc-800 rounded-full"></span>
              <Rating rating={review.rating} />
            </div>
            <p className="text-sm leading-7">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
