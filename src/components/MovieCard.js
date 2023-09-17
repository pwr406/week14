// component used to display the movie data. I liked using a card from my previous project and took that over. 
//I think I would like to have the modals in other components but ran out of time and didn't want to keep messing with
//it and potentially break the app.

import React from 'react'
import Stars from './Stars' //I had misread the assignment and thought we needed a component to convert a nunmber rating into stars. Kept it in though.
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function MovieCard(props) {
  //state for showing review modal
  const [show, setShow] = useState(false);

  //state for showing review form modal
  const [formShow, setFormShow] = useState(false);

  // functions to show or hide the review modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // functions to show or hide review form modal
  const handleFormClose = () => setFormShow(false);
  const handleFormShow = () => setFormShow(true);

  //state to hold reviews that are created
  const [reviews, setReviews] = useState([]);

  //function to add a review to the review state. 
  const addReview = (reviewData) => {
    setReviews([...reviews, reviewData])
  }

  return (
    <>
      {/*Card to hold movie data - could have used react-bootstrap but already had it built */}
      <div className="card m-2" style={{ width: '18rem' }}>
        <img src={props.poster} className="card-img-top mt-2 rounded" alt="Movie Image" />
        <div className="card-body">
          <h5 className="card-title" id="movieTitle">{props.name}</h5> {/*bringing in properties from movie list */}
          <p className="card-text" id="description">{props.overview}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" id="movieDirector"><b>Director: </b>{props.director}</li>
          <li className="list-group-item" id="movieRating"><b>Rating:</b><Stars rating={props.rating} /></li>
        </ul>
        <button className="btn btn-outline-success my-1" type="button" id="reviewButton" onClick={handleShow}>Reviews</button> {/*onClick calls handleShow to show modal */}
        <button className="btn btn-outline-primary" type="button" id="leaveReviewButton" onClick={handleFormShow}>Leave a Review</button> {/*onClick calls handleFormShow to show modal */}
      </div>

      {/*Modal to show movie reviews */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*create review list prop on review list component that passes state of reviews*/}
          <ReviewList
            reviewList={reviews}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button> {/*onClick closes modal */}
        </Modal.Footer>
      </Modal>

      {/*Modal to show movie review form */}
      <Modal show={formShow} onHide={handleFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave A Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*creating props to pass along to Review Form, including function for adding review on submit and closing the modal onClick - also passed MovieId to tie to movie */}
          <ReviewForm
            movieId={props.id}
            onSubmit={addReview}
            onClick={handleFormClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFormClose}> {/*onClick closes modal */}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}