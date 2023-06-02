import React from 'react';

// import useHistory here.

const PetDetailsNotFound = () => {

  // get the history object from useHistory()

  const goBack = () => {
    // Go back!
  }
  
  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <p>Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!</p>
      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
