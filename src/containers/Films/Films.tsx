import Form from '../../components/Form/Form.tsx';
import { useState } from 'react';
import { Film } from '../../types';

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const AddFilms = (newFilm: Film) => {
     setFilms(prevFilm => [newFilm, ...prevFilm]);
  }

  return (
    <>
      <Form onSubmitFormToAddFilm={AddFilms}/>

      {films.length === 0 ? "No Added Films" :
      <>
        {films.map((film) => (
          <input
            type="text"
            className="form-control my-3"
            value={film.name}
            key={film.id}
          />
        ))}
      </>
      }
    </>
  );
};

export default Films;