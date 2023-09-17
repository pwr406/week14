//component for Review list that displays the reviews that are created
import Review from './Review'
// started with an if statment that checks if there are any reviews to begin with which was passed in as a prop - could use Ternary operation?
export default function ReviewList(props) {
  if (props.reviewList.length === 0) {
    return <p>No reviews yet</p>
  }

  return (
    <div>
      {/*Builds review by mapping through review list that was passed in as a prop from the review form */}
      {props.reviewList.map((review, index) => (
        <Review
          key={index}
          reviewer={review.name}
          rating={review.rating}
          reviewText={review.review}
        />
      ))}
    </div>
  )
}

