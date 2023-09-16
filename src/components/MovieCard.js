import React from 'react'
import Stars from './Stars'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function MovieCard(props) {
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormClose = () => setFormShow(false);
  const handleFormShow = () => setFormShow(true);

  const [reviews, setReviews] = useState ([]);

  const addReview = (reviewData) => {
    setReviews([...reviews, reviewData])
  }

    return (
      
        <>
            <div className="card m-2" style={{ width: '18rem' }}>
                <img src={props.poster} className="card-img-top mt-2 rounded" alt="Movie Image" />
                <div className="card-body">
                  <h5 className="card-title" id="movieTitle">{props.name}</h5>
                  <p className="card-text" id="description">{props.overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" id="movieDirector"><b>Director: </b>{props.director}</li>
                  <li className="list-group-item" id="movieRating"><b>Rating:</b><Stars rating={props.rating} /></li>
                </ul>
                <button className="btn btn-outline-success my-1" type="button" id="reviewButton" onClick={handleShow}>Reviews</button> 
                <button className="btn btn-outline-primary" type="button" id="leaveReviewButton" onClick={handleFormShow}>Leave a Review</button> 
              </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewList 
            reviewList={reviews}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      <Modal show={formShow} onHide={handleFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave A Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm
            movieId = {props.id}
            onSubmit = {addReview}
            onClick = {handleFormClose} /> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFormClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    
    )
}