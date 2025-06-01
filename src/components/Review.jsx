import { Star } from "lucide-react";

// function formatDate(isoDate) {
//   return new Date(isoDate).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// }

function formatDateTime(isoString) {
  const [datePart, timePart] = isoString.split("T");
  const [year, month, day] = datePart.split("-");
  const [hour, minute] = timePart.split(":");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${months[parseInt(month) - 1]} ${parseInt(
    day
  )}, ${year}`;

  // Convert to 12-hour format
  let h = parseInt(hour);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  const formattedTime = `${h}:${minute} ${ampm}`;

  return (
    <div className="flex flex-col text-sm text-gray-500">
      <span className="font-medium">{formattedTime}</span>
      <span className="font-bold">{formattedDate}</span>
    </div>
  );
}

export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Customer Reviews
        </h2>
        <p className="text-gray-500">No reviews available for this product.</p>
      </div>
    );
  }

  return (
    <div className="px-[8vw] pb-12">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Customer Reviews {reviews.length > 0 ? `(${reviews.length})` : ""}
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {review.reviewerName}
                </h4>
                <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
              </div>
                <span className="text-sm text-gray-400">
                  {formatDateTime(review.date)}
                </span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {review.rating}/5
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
