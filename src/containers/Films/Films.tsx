import Form from '../../components/Form/Form.tsx';
import { useState } from 'react';
import { IFilm } from '../../types';
import FilmList from '../../components/FilmList/FilmList.tsx';


const Films = () => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const AddFilms = (newFilm: IFilm) => {
     setFilms(prevFilm => [newFilm, ...prevFilm]);
  }

  return (
    <>
      <Form onSubmitFormToAddFilm={AddFilms}/>
      <FilmList films={films}/>
    </>
  );
};

export default Films;