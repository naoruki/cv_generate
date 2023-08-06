import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const Greeting = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate some asynchronous task
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating 2 seconds of loading time
  }, []);

  return (
    <div>
      {/* Your content goes here */}
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" role="status">
            {/* <span className="sr-only">Loading...</span> */}
          </Spinner>
        </div>
      ) : (
        /* Render your actual content here */
        <div>
          <h1>Hello, this is my content!</h1>
        </div>
      )}
    </div>
  );
};

export default Greeting;
