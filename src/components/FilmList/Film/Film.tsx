interface Props {
  name: string;
  id: string;
  onInputChange: (id: string, name: string) => void;
}

const Film: React.FC<Props> = ({name, id, onInputChange}) => {

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
};

export default Film;