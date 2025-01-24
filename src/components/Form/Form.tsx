import { IFilm, FilmMutation } from '../../types';
import * as React from 'react';
import { useState } from 'react';

interface Props {
  onSubmitFormToAddFilm: (film: IFilm) => void;
}



const Form: React.FC<Props> = ({onSubmitFormToAddFilm}) => {
  const [form, setForm] = useState<FilmMutation>(
    {name: ''}
  );

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFormToAddFilm({id: String(new Date().toISOString()), ...form, name: form.name});
    setForm({ name: '' });
  }

  return (
    <form onSubmit={onSubmit} className="my-3 mx-3">
      <h4>Add new film</h4>
      <hr/>
      <div className="form-group">
        <label htmlFor="filmName">Film Name</label>
        <input
          type="text"
          id="filmName"
          name="name"
          className="form-control"
          value={form.name}
          onChange={inputChangeHandler}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">Add</button>
    </form>
  );
};

export default Form;