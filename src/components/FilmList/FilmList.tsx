import { IFilm } from '../../types';
import Film from './Film/Film.tsx';

interface Props {
  films: IFilm[];
  editFilmName: (id: string, name: string) => void;
}

const FilmList: React.FC<Props> = ({films, editFilmName}) => {

  console.log(films);
  return (
    <>
      {films.length === 0 ? "No Added Films" :
        <>
          {films.map((film) => (
            <Film name = {film.name} key={film.id} id={film.id} onInputChange={ editFilmName }/>
          ))}
        </>
      }
    </>
  );
};

export default FilmList;