import { IFilm } from '../../types';
import Film from './Film/Film.tsx';

interface Props {
  films: IFilm[];
}

const FilmList: React.FC<Props> = ({films}) => {
  return (
    <>
      {films.length === 0 ? "No Added Films" :
        <>
          {films.map((film) => (
            <Film name = {film.name} key={film.id} />
          ))}
        </>
      }
    </>
  );
};

export default FilmList;