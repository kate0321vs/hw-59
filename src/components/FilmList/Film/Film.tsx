import React from 'react';

interface Props {
  name: string;
  id: string;
  onInputChange: (id: string, name: string) => void;
}

const Film: React.FC<Props> = React.memo( ({name, id, onInputChange}) => {

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    onInputChange(id, value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control my-3"
        value={name}
        onChange={inputChangeHandler}
      />
    </>
  );
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name});

export default Film;