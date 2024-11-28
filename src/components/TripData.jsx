import React, { useState } from 'react';
import './trip.css';

const TripData = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Trip Card */}
      <div className='t-card' onClick={openModal}>
        <div className="t-image">
          <img src={props.image} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <img src={props.image} alt="modal" />
          </div>
        </div>
      )}
    </>
  );
};

export default TripData;
