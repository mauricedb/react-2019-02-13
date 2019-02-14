import React from 'react';
import PropTypes from 'prop-types';

const JokesPresentation = ({ jokes }) => {
  return (
    <div>
      <h2>Chuck Norris Jokes</h2>
      <ul>
        {jokes.map((joke, index) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    </div>
  );
};

JokesPresentation.propTypes = {
  jokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      joke: PropTypes.string.isRequired
    })
  ).isRequired
};

export default JokesPresentation;
