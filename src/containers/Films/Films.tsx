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

  const DeleteFilm = (id: string) => {
    setFilms(prevFilms =>
      prevFilms.filter(film => film.id !== id
      )
    );
  }

  return (
    <div className="card py-4 px-4">
      <Form onSubmitFormToAddFilm={AddFilms}/>
      <FilmList films={films} editFilmName={editFilmName} deleteItem={DeleteFilm}/>
    </div>
  );
};

export default Films;