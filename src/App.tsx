import './App.css'
import Films from './containers/Films/Films.tsx';
import Jokes from './containers/Jokes/Jokes.tsx';
import { useState } from 'react';

const App = () => {
  const [exBtn, setExBtn] = useState<boolean>(false);

  const changeExercises = () => {
    setExBtn(prevState => !prevState);
  };

  return (
    <div className="mx-auto w-75">
      <button className="my-5 btn btn-danger" type="button" onClick={changeExercises}>Change Exercise</button>
      {exBtn ? <Jokes/> : <Films/>}


    </div>
  );
};

export default App;
