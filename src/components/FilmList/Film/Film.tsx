import React from 'react';

interface Props {
  name: string;
  id: string;
  onInputChange: (id: string, name: string) => void;
  deleteItem: (id: string) => void;
}

const Film: React.FC<Props> = React.memo( ({name, id, onInputChange, deleteItem}) => {

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    onInputChange(id, value);
  };

  return (
    <div  className="d-flex justify-content-between">
      <input
        type="text"
        className="form-control my-3 w-75"
        value={name}
        onChange={inputChangeHandler}
      />

      <button className="border-0 bg-transparent me-1" type="button" onClick={() => deleteItem(id)}>X</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name});

export default Film;