import { useEffect, useState } from 'react';
import { IJokes } from '../../types';
import Joke from '../../components/Joke/Joke.tsx';


const Jokes = () => {
  const [joke, setJoke] = useState<IJokes>();
  const url = 'https://v2.jokeapi.dev/joke/Programming';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const dataRequest = await response.json() as IJokes;
        console.log(dataRequest);
        setJoke(dataRequest);
      }
    };
    void fetchData();
  }, []);


  return (
    <div>
      {joke ? <Joke joke={joke} /> : null}
    </div>
  );
};

export default Jokes;