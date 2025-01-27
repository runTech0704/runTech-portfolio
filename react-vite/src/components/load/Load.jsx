// Load.jsx
import React from 'react';
import "./load.css"

const Load = () => {
  return (
      <div className="load-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
            <circle cx="12" cy="12" r="12" fill="#696969"/>
            <circle cx="12" cy="5" r="4" fill="#fff">
                <animateTransform attributeName="transform" type="rotate"
                                from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
      </div>
  );
};

export default Load;
