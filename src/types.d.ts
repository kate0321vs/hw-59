export interface IFilm {
  name: string;
  id: string;
}

export interface FilmMutation {
  name: string;
}

export interface IJokes {
  type: string;
  joke?: string;
  delivery?: string;
  setup?: string;
}