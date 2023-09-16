
export default function Review(props) {
    return (
        <div>
            <div>
            <h5>
                Reviewer: {props.reviewer}
            </h5>
            <p>
                Rating: {props.rating}
            </p>
            </div> 
            <div>
                <p>
                    Review: {props.reviewText}
                </p>
            </div>
        </div>
    )
}