//Reivew component to build the review that is displayed in the modal. Props are passed in from review list component.
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