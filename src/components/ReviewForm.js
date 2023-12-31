//component for reivew form.

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import StarSelection from './StarSelection';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function ReviewForm(props) {
  {/*states for the different elements of the form */ }
  const [nameState, setNameState] = useState("")
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")

  {/*function to handle when submit button is pressed. Stopped page from reloading - created variable to store information that goes into review, called onSubmit. */ }
  const handleSubmit = (event) => {
    event.preventDefault()
    const reviewData = {
      movieId: props.movieId,
      name: nameState,
      rating: rating,
      review: review,
    };
    props.onSubmit(reviewData);
    props.onClick();
  }

  return (

    <>
      {/*Form for review - setting state to keep track of changes in the fomr */}
      <InputGroup className="mb-3">

        <Form.Control
          placeholder="Name"
          aria-label="Name"
          value={nameState}
          onChange={(event) => setNameState(event.target.value)}
        />
      </InputGroup>

      <Form.Label htmlFor="basic-url">Rate the Movie from 1 to 5:</Form.Label>
      <InputGroup className="mb-3">

        <StarSelection
          value={rating}
          onChange={(newRating) => setRating(newRating)}
        />
      </InputGroup>

      <InputGroup>

        <InputGroup.Text>Your Review:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </InputGroup>
      <div className="text-center">
        <Button variant="primary" className="mt-2" onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
}

