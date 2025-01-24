import { IFilm } from '../../types';
import Film from './Film/Film.tsx';

interface Props {
  films: IFilm[];
  editFilmName: (id: string, name: string) => void;
  deleteItem: (id: string) => void;
}

const FilmList: React.FC<Props> = ({films, editFilmName, deleteItem}) => {

  return (
    <div  className="my-5">
      <h4>Film List</h4>
      <hr/>
      {films.length === 0 ? "No Added Films" :
        <>
          {films.map((film) => (
            <Film name = {film.name}
                  key={film.id}
                  id={film.id} onInputChange={ editFilmName }
                  deleteItem={() => deleteItem(film.id)}/>
          ))}
        </>
      }
    </div>
  );
};

export default FilmList;