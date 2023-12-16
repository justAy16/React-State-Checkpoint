import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  // State to store the elapsed time
  const [elapsedTime, setElapsedTime] = useState(0);

  // useEffect hook to handle side effects
  useEffect(() => {
    // Function to update elapsed time every second
    const intervalId = setInterval(() => {
      // Update state using the previous state value
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000); // Update every second

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  // JSX to render the component
  return (
    <div>
      {/* <h2>Timer Component</h2> */}
      <p>Time interval since mount: {elapsedTime} seconds</p>
    </div>
  );
};

export default TimerComponent;

