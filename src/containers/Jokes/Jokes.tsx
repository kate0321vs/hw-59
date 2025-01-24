import { useEffect, useState } from 'react';
import { IJokes } from '../../types';
import Joke from '../../components/Joke/Joke.tsx';


const Jokes = () => {
  const [joke, setJoke] = useState<IJokes>();
  const [newJoke, setNewJoke] = useState<boolean>(false);
  const url = 'https://v2.jokeapi.dev/joke/Programming';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const dataRequest = await response.json() as IJokes;
        setJoke(dataRequest);
      }
    };
    void fetchData();
  }, [newJoke]);


  return (
    <div className="card px-4 py-4">
      <h4>Programmer Joke</h4>
      <hr/>
      {joke ? <Joke joke={joke}/> : <p>Loading...</p>}
      <div>
        <button className="btn btn-primary" type="button" onClick={() => setNewJoke(prev => !prev)}>New Joke</button>
      </div>
    </div>
  );
};

export default Jokes;