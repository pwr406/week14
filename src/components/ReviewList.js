import Review from './Review'

export default function ReviewList(props) {
    if (props.reviewList.length === 0) {
        return <p>No reviews yet</p>
    }

    return (
        <div>
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

