import Form from '../../components/Form/Form.tsx';
import { useState } from 'react';
import { IFilm } from '../../types';
import FilmList from '../../components/FilmList/FilmList.tsx';


const Films = () => {
  const [films, setFilms] = useState<IFilm[]>([]);

  const AddFilms = (newFilm: IFilm) => {
     setFilms(prevFilm => [newFilm, ...prevFilm]);
  }

  const editFilmName = (id: string, newName: string) => {
    setFilms(prevFilms =>
      prevFilms.map(film =>
        film.id === id ? { ...film, name: newName } : film
      )
    );
  };

  return (
    <>
      <Form onSubmitFormToAddFilm={AddFilms}/>
      <FilmList films={films} editFilmName={editFilmName}/>
    </>
  );
};

export default Films;