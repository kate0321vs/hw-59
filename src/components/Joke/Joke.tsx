import React from 'react';
import { IJokes } from '../../types';

interface Props {
  joke: IJokes;
}

const Joke: React.FC<Props> = ({joke}) => {

  return (
    <div className="py-4">
      {joke.type === 'single' ? <p>{joke.joke}</p> : null}
      {joke.type === 'twopart' ?
        <p>
          {joke.setup} <br/> <br/> {joke.delivery}
        </p> : null
      }
    </div>
  );
};

export default Joke;