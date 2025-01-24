import React from 'react';
import { IJokes } from '../../types';

interface Props {
  joke: IJokes;
}

const Joke: React.FC<Props> = ({joke}) => {

  return (
    <div>
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