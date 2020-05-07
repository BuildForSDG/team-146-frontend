import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="App">
      <div className="container w-75 text-center">
          <h1 className="display-4">
              You weren't looking for this page?
              <Link to="/">
                <button className="btn btn-outline-primary">Go Back Home</button> 
              </Link>
          </h1>
      </div>
    </div>
  );
}

export default PageNotFound;
